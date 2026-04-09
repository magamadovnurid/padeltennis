import { AppShell } from "@/components/app-shell";
import { leaderboard } from "@/lib/mock-data";

export default function RatingPage() {
  return (
    <AppShell
      eyebrow="Ranking"
      title="Рейтинг"
      meta={["Elo", "2x2", "Москва"]}
    >
      <section className="grid gap-3">
        <div className="grid grid-cols-3 gap-2">
          <RatingStat label="#1" value="1488" />
          <RatingStat label="Игроки" value="420" />
          <RatingStat label="Матчи" value="128" />
        </div>
      </section>

      <section className="grid gap-3">
        {leaderboard.map((player, index) => (
          <article
            key={player.id}
            className="flex items-center gap-3 rounded-[26px] bg-white/88 p-4 shadow-[0_14px_34px_rgba(16,33,43,0.08)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-ink)] font-display text-2xl uppercase text-white">
              {player.initials}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    #{index + 1}
                  </p>
                  <h3 className="truncate text-base font-semibold text-[var(--color-ink)]">
                    {player.name}
                  </h3>
                </div>
                <span className="rounded-full bg-[var(--color-clay-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-clay)]">
                  {player.rating}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 text-xs text-[var(--color-muted)]">
                <span className="rounded-full bg-[var(--color-panel)] px-3 py-1">
                  {player.city}
                </span>
                <span className="rounded-full bg-[var(--color-panel)] px-3 py-1">
                  {player.side}
                </span>
                <span className="rounded-full bg-[var(--color-panel)] px-3 py-1">
                  {player.winRate}
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </AppShell>
  );
}

function RatingStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[24px] border border-[var(--color-line)] bg-[var(--color-panel-strong)] p-4 shadow-[0_10px_28px_rgba(16,33,43,0.06)]">
      <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold text-[var(--color-ink)]">{value}</p>
    </div>
  );
}
