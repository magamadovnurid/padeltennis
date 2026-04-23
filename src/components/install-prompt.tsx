"use client";

import { useEffect, useMemo, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
};

type MobilePlatform = "ios" | "android" | "other";

const SESSION_KEY = "padel-next-point-install-popup";

export function InstallPrompt() {
  const [promptEvent, setPromptEvent] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [platform, setPlatform] = useState<MobilePlatform>("other");
  const [isStandalone, setIsStandalone] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let timeout: number | undefined;

    const frame = window.requestAnimationFrame(() => {
      const ua = window.navigator.userAgent.toLowerCase();
      const nextPlatform = /iphone|ipad|ipod/.test(ua)
        ? "ios"
        : /android/.test(ua)
          ? "android"
          : "other";
      const standalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        Boolean(
          (window.navigator as Navigator & { standalone?: boolean }).standalone,
        );
      const touchDevice =
        window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;
      const shouldTreatAsMobile =
        nextPlatform !== "other" || (touchDevice && window.innerWidth <= 900);

      setPlatform(nextPlatform);
      setIsStandalone(standalone);
      setIsMobile(shouldTreatAsMobile);

      if (
        shouldTreatAsMobile &&
        !standalone &&
        window.sessionStorage.getItem(SESSION_KEY) !== "shown"
      ) {
        timeout = window.setTimeout(() => {
          setIsVisible(true);
          window.sessionStorage.setItem(SESSION_KEY, "shown");
        }, 450);
      }
    });

    return () => {
      window.cancelAnimationFrame(frame);
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, []);

  useEffect(() => {
    const handlePrompt = (event: Event) => {
      event.preventDefault();
      setPromptEvent(event as BeforeInstallPromptEvent);
    };

    const handleInstalled = () => {
      setIsVisible(false);
      setIsStandalone(true);
      setPromptEvent(null);
    };

    window.addEventListener("beforeinstallprompt", handlePrompt);
    window.addEventListener("appinstalled", handleInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handlePrompt);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  const title = useMemo(() => {
    if (platform === "ios") {
      return "На экран";
    }

    return "Установить";
  }, [platform]);

  const description = useMemo(() => {
    if (platform === "ios") {
      return "Safari → Поделиться → На экран Домой.";
    }

    if (promptEvent) {
      return "Запуск без адресной строки, как приложение.";
    }

    return "Открой ссылку в Chrome или Safari.";
  }, [platform, promptEvent]);

  if (!isMobile || isStandalone || !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center bg-[rgba(16,26,32,0.5)] p-4 backdrop-blur-[3px]">
      <div className="w-full max-w-[406px] rounded-[30px] bg-[var(--color-panel-solid)] p-4 shadow-[0_24px_80px_rgba(16,26,32,0.28)]">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              PWA
            </p>
            <h2 className="mt-1 max-w-[15rem] text-2xl font-black leading-none text-[var(--color-ink)]">
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setIsVisible(false)}
            aria-label="Закрыть"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-xl font-bold text-[var(--color-ink)] shadow-[0_8px_20px_rgba(16,26,32,0.08)]"
          >
            ×
          </button>
        </div>

        <div className="mt-4 rounded-[24px] bg-[var(--color-ink)] p-4 text-white">
          <p className="text-sm font-medium leading-6 text-white/90">{description}</p>

          <div className="mt-4 grid grid-cols-3 gap-2 text-[0.72rem]">
            <StepCard number="1" text="Открой" />
            <StepCard
              number="2"
              text={
                platform === "ios"
                  ? "Поделиться"
                  : promptEvent
                    ? "Установить"
                    : "Меню"
              }
            />
            <StepCard
              number="3"
              text={
                platform === "ios"
                  ? "Домой"
                  : "Запуск"
              }
            />
          </div>
        </div>

        <div className="mt-4 grid gap-2">
          {promptEvent ? (
            <button
              type="button"
              onClick={async () => {
                await promptEvent.prompt();
                const result = await promptEvent.userChoice;

                if (result.outcome === "accepted") {
                  setIsVisible(false);
                }

                setPromptEvent(null);
              }}
              className="btn-primary"
            >
              Установить
            </button>
          ) : null}

          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="btn-secondary"
          >
            Позже
          </button>
        </div>
      </div>
    </div>
  );
}

function StepCard({ number, text }: { number: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white/8 px-3 py-3">
      <p className="text-xl font-black leading-none text-white">{number}</p>
      <p className="mt-2 text-white/86">{text}</p>
    </div>
  );
}
