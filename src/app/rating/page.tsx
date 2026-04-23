import { AppShell } from "@/components/app-shell";
import { SectionBar, StatStrip } from "@/components/mobile-cards";
import { leaderboard } from "@/lib/mock-data";

export default function RatingPage() {
  return (
    <AppShell
      eyebrow="Elo"
      title="Рейтинг"
      meta={["Elo", "2x2", "Москва", "30 дней"]}
    >
      <section className="grid gap-3">
        <StatStrip
          items={[
            { label: "топ", value: "1488" },
            { label: "игроки", value: "420" },
            { label: "матчи", value: "128" },
          ]}
        />
      </section>

      <section className="grid gap-3">
        <SectionBar title="Лидерборд" />
        {leaderboard.map((player, index) => (
          <article
            key={player.id}
            className="app-row flex items-center gap-3 p-3"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-ink)] text-base font-black uppercase text-white">
              {index + 1}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="truncate text-base font-semibold text-[var(--color-ink)]">
                    {player.name}
                  </h3>
                  <p className="mt-1 truncate text-sm font-medium text-[var(--color-muted)]">
                    {player.city} · {player.side}
                  </p>
                </div>
                <span className="ui-chip ui-chip--orange shrink-0">
                  {player.rating}
                </span>
              </div>

              <div className="mt-2 flex gap-2">
                <span className="ui-chip">{player.initials}</span>
                <span className="ui-chip ui-chip--green">Win {player.winRate}</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </AppShell>
  );
}
