import Link from "next/link";

import type { FriendlyMatch, Tournament } from "@/lib/mock-data";

export function SectionBar({
  title,
  actionHref,
  actionLabel = "Все",
}: {
  title: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 px-1">
      <h2 className="text-[1.15rem] font-black text-[var(--color-ink)]">
        {title}
      </h2>
      {actionHref ? (
        <Link
          href={actionHref}
          className="text-sm font-extrabold text-[var(--color-court)]"
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}

export function StatStrip({
  items,
}: {
  items: Array<{ label: string; value: string }>;
}) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {items.map((item) => (
        <div key={item.label} className="app-row px-3 py-3">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">
            {item.label}
          </p>
          <p className="mt-1 text-lg font-black text-[var(--color-ink)]">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export function MatchRow({
  match,
  href = "/auth",
  ctaLabel = "Войти",
}: {
  match: FriendlyMatch;
  href?: string;
  ctaLabel?: string;
}) {
  const [day, time = ""] = match.time.split("·").map((part) => part.trim());

  return (
    <article className="app-row p-3">
      <div className="flex items-center gap-3">
        <div className="flex h-[62px] w-[62px] shrink-0 flex-col items-center justify-center rounded-[20px] bg-[var(--color-ink)] text-white">
          <span className="text-[0.64rem] font-bold uppercase tracking-[0.12em] text-white/72">
            {day}
          </span>
          <strong className="mt-1 text-base leading-none">{time}</strong>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-black text-[var(--color-ink)]">
            {match.club}
          </h3>
          <p className="mt-1 truncate text-sm font-medium text-[var(--color-muted)]">
            {match.city} · {match.host}
          </p>
          <div className="mt-2 flex gap-2 overflow-hidden">
            <span className="ui-chip ui-chip--green">{match.level}</span>
            <span className="ui-chip">{match.playersNeeded} места</span>
          </div>
        </div>

        <Link
          href={href}
          className="btn-mini-primary"
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}

export function TournamentRow({
  tournament,
  href = "/auth",
  ctaLabel = "Войти",
}: {
  tournament: Tournament;
  href?: string;
  ctaLabel?: string;
}) {
  const [date, weekday = ""] = tournament.date.split("·").map((part) => part.trim());
  const compactDate = date
    .replace("апреля", "апр")
    .replace("июня", "июн")
    .replace("июля", "июл")
    .replace("августа", "авг");

  return (
    <article className="app-row p-3">
      <div className="flex items-center gap-3">
        <div className="flex h-[62px] w-[62px] shrink-0 flex-col items-center justify-center rounded-[20px] bg-[var(--color-court)] text-white">
          <span className="text-[0.64rem] font-bold uppercase tracking-[0.12em] text-white/74">
            {weekday || tournament.city}
          </span>
          <strong className="mt-1 text-sm leading-none">{compactDate}</strong>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-black text-[var(--color-ink)]">
            {tournament.title}
          </h3>
          <p className="mt-1 truncate text-sm font-medium text-[var(--color-muted)]">
            {tournament.club}
          </p>
          <div className="mt-2 flex gap-2 overflow-hidden">
            <span className="ui-chip ui-chip--orange">{tournament.format}</span>
            <span className="ui-chip">{tournament.level}</span>
          </div>
        </div>

        <Link
          href={href}
          className="btn-mini-dark"
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}
