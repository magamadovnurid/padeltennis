import Link from "next/link";

import { AppShell } from "@/components/app-shell";
import { friendlyMatches, keyStats, tournaments } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <AppShell
      eyebrow="Padel Next Point"
      title="Главная"
      meta={["Матчи", "Турниры", "Рейтинг"]}
      showHeader={false}
    >
      <section className="grid gap-3">
        <div className="overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,rgba(227,100,61,0.96),rgba(12,124,89,0.92))] p-5 text-white shadow-[0_28px_80px_rgba(16,33,43,0.2)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.32em] text-white/84">
                Today
              </p>
              <h2 className="mt-2 max-w-[12rem] font-display text-3xl uppercase leading-none">
                Играй сегодня
              </h2>
            </div>
            <span className="rounded-full border border-white/22 bg-white/16 px-3 py-1 text-xs font-semibold tracking-[0.2em] uppercase text-white">
              Beta
            </span>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 text-[0.72rem]">
            {keyStats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/14 bg-black/14 px-3 py-3 backdrop-blur"
              >
                <p className="font-display text-2xl leading-none">{item.value}</p>
                <p className="mt-1 text-white/88">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex gap-2">
            <Link
              href="/matches"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[var(--color-ink)]"
            >
              Матчи
            </Link>
            <Link
              href="/auth"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur"
            >
              Войти
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl uppercase text-[var(--color-ink)]">
            Турниры
          </h2>
          <Link
            href="/tournaments"
            className="text-sm font-semibold text-[var(--color-court)]"
          >
            Все
          </Link>
        </div>

        <div className="grid gap-3">
          {tournaments.slice(0, 2).map((tournament) => (
            <article
              key={tournament.id}
              className="rounded-[26px] border border-black/5 bg-white/80 p-4 shadow-[0_16px_40px_rgba(16,33,43,0.08)] backdrop-blur"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    {tournament.city}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--color-ink)]">
                    {tournament.title}
                  </h3>
                </div>
                <span className="rounded-full bg-[var(--color-clay-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-clay)]">
                  {tournament.format}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-[var(--color-muted)]">
                <span className="rounded-full bg-[var(--color-panel)] px-3 py-1">
                  {tournament.date}
                </span>
                <span className="rounded-full bg-[var(--color-panel)] px-3 py-1">
                  {tournament.level}
                </span>
                <span className="rounded-full bg-[var(--color-panel)] px-3 py-1">
                  {tournament.club}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl uppercase text-[var(--color-ink)]">
            Матчи
          </h2>
          <Link
            href="/matches"
            className="text-sm font-semibold text-[var(--color-court)]"
          >
            Все
          </Link>
        </div>

        <div className="grid gap-3">
          {friendlyMatches.slice(0, 3).map((match) => (
            <article
              key={match.id}
              className="rounded-[26px] bg-[var(--color-ink)] p-4 text-white shadow-[0_16px_48px_rgba(16,33,43,0.16)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/74">
                    {match.city}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{match.club}</h3>
                </div>
                <span className="rounded-full bg-white/14 px-3 py-1 text-xs font-semibold text-white/95">
                  {match.surface}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/86">
                <div className="rounded-2xl bg-white/6 px-3 py-3">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/62">
                    Время
                  </p>
                  <p className="mt-2 font-medium text-white">{match.time}</p>
                </div>
                <div className="rounded-2xl bg-white/6 px-3 py-3">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/62">
                    Уровень
                  </p>
                  <p className="mt-2 font-medium text-white">{match.level}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-white/82">
                <span>{match.host}</span>
                <span>{match.playersNeeded} места</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
