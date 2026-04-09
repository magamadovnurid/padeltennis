"use client";

import Link from "next/link";

import { useSession } from "@/components/session-provider";
import { friendlyMatches } from "@/lib/mock-data";

export function ProfileOverview() {
  const { isReady, session } = useSession();

  if (!isReady) {
    return (
      <section className="rounded-[26px] bg-white/80 p-4 shadow-[0_16px_40px_rgba(16,33,43,0.08)]">
        <p className="text-sm text-[var(--color-muted)]">Загружаем профиль...</p>
      </section>
    );
  }

  if (!session) {
    return (
      <section className="rounded-[28px] bg-[var(--color-ink)] p-5 text-white shadow-[0_18px_48px_rgba(16,33,43,0.14)]">
        <p className="text-xs uppercase tracking-[0.24em] text-white/74">Гость</p>
        <h2 className="mt-2 text-xl font-semibold">Нет сессии</h2>
        <Link
          href="/auth"
          className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[var(--color-ink)]"
        >
          Войти
        </Link>
      </section>
    );
  }

  const upcomingMatch = friendlyMatches[0];

  return (
    <section className="grid gap-4">
      <article className="rounded-[30px] bg-white/88 p-5 shadow-[0_18px_40px_rgba(16,33,43,0.08)]">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-[linear-gradient(135deg,rgba(227,100,61,1),rgba(12,124,89,1))] font-display text-3xl uppercase text-white">
            {session.initials}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
              {session.provider.toUpperCase()}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--color-ink)]">
              {session.name}
            </h2>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              {session.email}
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <Metric label="Elo" value={session.rating.toString()} />
          <Metric label="Уровень" value={session.level} />
          <Metric label="Сторона" value={session.side} />
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-[var(--color-muted)]">
          <span className="rounded-full bg-[var(--color-panel)] px-3 py-1">
            {session.city}
          </span>
          <span className="rounded-full bg-[var(--color-panel)] px-3 py-1">
            {session.provider.toUpperCase()}
          </span>
        </div>
      </article>

      <article className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-panel-strong)] p-4 shadow-[0_14px_34px_rgba(16,33,43,0.08)]">
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
          Ближайший матч
        </p>
        <h3 className="mt-2 text-lg font-semibold text-[var(--color-ink)]">
          {upcomingMatch.club}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-muted)]">
          {upcomingMatch.city} · {upcomingMatch.time}
        </p>
      </article>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[var(--color-panel)] px-3 py-3">
      <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-[var(--color-ink)]">{value}</p>
    </div>
  );
}
