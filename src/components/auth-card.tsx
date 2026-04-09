"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { useSession } from "@/components/session-provider";

export function AuthCard() {
  const router = useRouter();
  const { isReady, session, signInWithEmail, signInWithMaxMock, signOut } =
    useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const canSubmit = useMemo(
    () => Boolean(email.trim()) && Boolean(name.trim()),
    [email, name],
  );

  const handleEmailLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    signInWithEmail({
      email,
      name,
    });
    router.push("/profile");
  };

  return (
    <section className="grid gap-4">
      <article className="rounded-[30px] bg-white/88 p-5 shadow-[0_18px_40px_rgba(16,33,43,0.08)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Email
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--color-ink)]">Вход</h2>
          </div>
          <span className="rounded-full bg-[var(--color-court-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-court)]">
            Active
          </span>
        </div>

        <form className="mt-5 grid gap-3" onSubmit={handleEmailLogin}>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-[var(--color-ink)]">
              Имя
            </span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Например, Нурид"
              className="h-12 rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] px-4 outline-none transition focus:border-[var(--color-clay)]"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-[var(--color-ink)]">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="player@padel.app"
              className="h-12 rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] px-4 outline-none transition focus:border-[var(--color-clay)]"
            />
          </label>

          <button
            type="submit"
            disabled={!canSubmit}
            className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-clay)] px-5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-45"
          >
            Войти по email
          </button>
        </form>
      </article>

      <article className="rounded-[30px] bg-[var(--color-ink)] p-5 text-white shadow-[0_20px_48px_rgba(16,33,43,0.16)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/74">
              MAX
            </p>
            <h2 className="mt-2 text-xl font-semibold">Dev</h2>
          </div>
          <span className="rounded-full bg-white/14 px-3 py-1 text-xs font-semibold text-white/95">
            Mock
          </span>
        </div>

        <button
          type="button"
          onClick={() => {
            signInWithMaxMock();
            router.push("/profile");
          }}
          className="mt-5 inline-flex h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[var(--color-ink)]"
        >
          Войти через MAX
        </button>
      </article>

      {isReady && session ? (
        <article className="rounded-[26px] border border-[var(--color-line)] bg-[var(--color-panel-strong)] p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Сессия
          </p>
          <h2 className="mt-2 text-lg font-semibold text-[var(--color-ink)]">
            {session.name}
          </h2>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            {session.email} · {session.provider.toUpperCase()}
          </p>
          <button
            type="button"
            onClick={signOut}
            className="mt-4 inline-flex h-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-5 text-sm font-semibold text-[var(--color-ink)]"
          >
            Выйти
          </button>
        </article>
      ) : null}
    </section>
  );
}
