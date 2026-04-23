"use client";

import Link from "next/link";

import { useSession } from "@/components/session-provider";
import { friendlyMatches } from "@/lib/mock-data";

export function ProfileOverview() {
  const { isReady, session } = useSession();

  if (!isReady) {
    return (
      <section className="app-card p-4">
        <p className="text-sm text-[var(--color-muted)]">Загружаем профиль...</p>
      </section>
    );
  }

  if (!session) {
    return (
      <section className="rounded-[28px] bg-[var(--color-ink)] p-4 text-white shadow-[var(--shadow-lift)]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
          Гость
        </p>
        <h2 className="mt-2 text-xl font-black">Войдите, чтобы вести рейтинг</h2>
        <Link
          href="/auth"
          className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-black text-[var(--color-ink)]"
        >
          Войти
        </Link>
      </section>
    );
  }

  const upcomingMatch = friendlyMatches[0];

  return (
    <section className="grid gap-3">
      <article className="app-card p-4">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[24px] bg-[var(--color-clay)] text-xl font-black uppercase text-white">
            {session.initials}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              {session.provider.toUpperCase()}
            </p>
            <h2 className="mt-1 truncate text-xl font-black text-[var(--color-ink)]">
              {session.name}
            </h2>
            <p className="mt-1 truncate text-sm font-medium text-[var(--color-muted)]">
              {session.email}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <Metric label="Elo" value={session.rating.toString()} />
          <Metric label="Уровень" value={session.level} />
          <Metric label="Сторона" value={session.side} />
        </div>

        <div className="mt-3 flex gap-2 overflow-hidden">
          <span className="ui-chip ui-chip--green">
            {session.city}
          </span>
          <span className="ui-chip">
            {session.provider.toUpperCase()}
          </span>
        </div>
      </article>

      <article className="app-row p-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
          Ближайший матч
        </p>
        <h3 className="mt-2 text-lg font-black text-[var(--color-ink)]">
          {upcomingMatch.club}
        </h3>
        <p className="mt-1 text-sm font-medium text-[var(--color-muted)]">
          {upcomingMatch.city} · {upcomingMatch.time}
        </p>
      </article>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[var(--color-line)] bg-white/62 px-3 py-3">
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">
        {label}
      </p>
      <p className="mt-1 truncate text-sm font-black text-[var(--color-ink)]">
        {value}
      </p>
    </div>
  );
}
