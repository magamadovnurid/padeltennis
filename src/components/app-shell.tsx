import type { ReactNode } from "react";

import { BottomNav } from "@/components/bottom-nav";
import { InstallPrompt } from "@/components/install-prompt";
import { UserBadge } from "@/components/user-badge";

type AppShellProps = {
  eyebrow?: string;
  title: string;
  meta?: string[];
  showHeader?: boolean;
  children: ReactNode;
};

export function AppShell({
  eyebrow,
  title,
  meta,
  showHeader = true,
  children,
}: AppShellProps) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-4 pb-[calc(112px+var(--safe-bottom))] pt-[calc(14px+var(--safe-top))]">
      {showHeader ? (
        <header className="rounded-[30px] border border-white/35 bg-white/58 p-4 shadow-[0_18px_50px_rgba(16,33,43,0.08)] backdrop-blur-md">
          <div className="flex items-start justify-between gap-3">
            <div>
              {eyebrow ? (
                <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[var(--color-muted)]">
                  {eyebrow}
                </p>
              ) : null}
              <h1 className="mt-2 max-w-[15rem] font-display text-4xl uppercase leading-none text-[var(--color-ink)]">
                {title}
              </h1>
            </div>
            <UserBadge />
          </div>

          {meta?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {meta.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/50 bg-white/78 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)] shadow-[0_8px_20px_rgba(16,33,43,0.05)] backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </header>
      ) : null}

      <main className={`flex flex-1 flex-col gap-4 ${showHeader ? "py-4" : "pt-0 pb-4"}`}>
        {children}
      </main>

      <InstallPrompt />
      <BottomNav />
    </div>
  );
}
