import Link from "next/link";

import { AppShell } from "@/components/app-shell";
import { friendlyMatches } from "@/lib/mock-data";

const filters = ["Уровень ±0.5", "Москва", "Сегодня", "2x2", "Индор"];

export default function MatchesPage() {
  return (
    <AppShell
      eyebrow="Open Matches"
      title="Матчи"
      meta={filters}
    >
      <section className="grid gap-3">
        <div className="grid grid-cols-2 gap-2">
          <Link
            href="/auth"
            className="inline-flex h-12 items-center justify-center rounded-[24px] bg-[var(--color-clay)] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(227,100,61,0.24)]"
          >
            Создать
          </Link>
          <Link
            href="/rating"
            className="inline-flex h-12 items-center justify-center rounded-[24px] border border-[var(--color-line)] bg-white px-5 text-sm font-semibold text-[var(--color-ink)]"
          >
            Рейтинг
          </Link>
        </div>

        <div className="rounded-[26px] border border-[var(--color-line)] bg-[var(--color-panel-strong)] p-4 shadow-[0_12px_40px_rgba(16,33,43,0.08)] backdrop-blur">
          <div className="grid grid-cols-3 gap-2">
            <MetricCard label="Открыто" value="18" />
            <MetricCard label="Сегодня" value="7" />
            <MetricCard label="2x2" value="100%" />
          </div>

          <div className="mt-4 flex gap-2">
            <Link
              href="/auth"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--color-ink)] px-5 text-sm font-semibold text-white"
            >
              Мой матч
            </Link>
            <Link
              href="/rating"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-5 text-sm font-semibold text-[var(--color-ink)]"
            >
              Фильтр
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-3">
        {friendlyMatches.map((match) => (
          <article
            key={match.id}
            className="rounded-[28px] bg-white/88 p-4 shadow-[0_18px_40px_rgba(16,33,43,0.08)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  {match.city}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--color-ink)]">
                  {match.club}
                </h3>
              </div>
              <span className="rounded-full border border-[rgba(12,124,89,0.16)] bg-[rgba(12,124,89,0.16)] px-3 py-1 text-xs font-semibold text-[var(--color-court-ink)]">
                {match.playersNeeded} места
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="rounded-2xl bg-[var(--color-panel)] px-3 py-3">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Время
                </p>
                <p className="mt-2 text-sm font-medium text-[var(--color-ink)]">
                  {match.time}
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--color-panel)] px-3 py-3">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Уровень
                </p>
                <p className="mt-2 text-sm font-medium text-[var(--color-ink)]">
                  {match.level}
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--color-panel)] px-3 py-3">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Корт
                </p>
                <p className="mt-2 text-sm font-medium text-[var(--color-ink)]">
                  {match.surface}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-[var(--color-muted)]">{match.host}</p>
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--color-ink)] px-5 text-sm font-semibold text-white"
              >
                Войти
              </button>
            </div>
          </article>
        ))}
      </section>
    </AppShell>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white px-3 py-3 shadow-[0_8px_18px_rgba(16,33,43,0.05)]">
      <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        {label}
      </p>
      <p className="mt-2 text-base font-semibold text-[var(--color-ink)]">
        {value}
      </p>
    </div>
  );
}
