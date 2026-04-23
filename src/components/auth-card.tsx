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
    <section className="grid gap-3">
      <article className="app-card p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Аккаунт
            </p>
            <h2 className="mt-1 text-xl font-black text-[var(--color-ink)]">
              Вход
            </h2>
          </div>
          <span className="ui-chip ui-chip--green">
            Email
          </span>
        </div>

        <form className="mt-4 grid gap-3" onSubmit={handleEmailLogin}>
          <label className="grid gap-2">
            <span className="text-sm font-bold text-[var(--color-ink)]">
              Имя
            </span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Например, Нурид"
              className="h-12 rounded-2xl border border-[var(--color-line)] bg-white/70 px-4 text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-clay)]"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-[var(--color-ink)]">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="player@padel.app"
              className="h-12 rounded-2xl border border-[var(--color-line)] bg-white/70 px-4 text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-clay)]"
            />
          </label>

          <button
            type="submit"
            disabled={!canSubmit}
            className="btn-primary mt-1 disabled:cursor-not-allowed disabled:opacity-45"
          >
            Войти по email
          </button>
        </form>
      </article>

      <article className="rounded-[28px] bg-[var(--color-ink)] p-4 text-white shadow-[var(--shadow-lift)]">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              MAX
            </p>
            <h2 className="mt-1 text-xl font-black">Быстрый вход</h2>
          </div>
          <span className="rounded-full bg-white/14 px-3 py-1 text-xs font-black text-white">
            Mock
          </span>
        </div>

        <button
          type="button"
          onClick={() => {
            signInWithMaxMock();
            router.push("/profile");
          }}
          className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-black text-[var(--color-ink)]"
        >
          Войти через MAX
        </button>
      </article>

      {isReady && session ? (
        <article className="app-row p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Сессия
          </p>
          <h2 className="mt-2 text-lg font-black text-[var(--color-ink)]">
            {session.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-[var(--color-muted)]">
            {session.email} · {session.provider.toUpperCase()}
          </p>
          <button
            type="button"
            onClick={signOut}
            className="btn-secondary mt-4"
          >
            Выйти
          </button>
        </article>
      ) : null}
    </section>
  );
}
