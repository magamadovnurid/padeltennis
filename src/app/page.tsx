import Link from "next/link";

import { AppShell } from "@/components/app-shell";
import {
  MatchRow,
  SectionBar,
  StatStrip,
  TournamentRow,
} from "@/components/mobile-cards";
import { friendlyMatches, keyStats, tournaments } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <AppShell
      showHeader={false}
      title="Главная"
    >
      <section className="rounded-[30px] bg-[var(--color-clay)] p-4 text-white shadow-[var(--shadow-lift)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/78">
              Сегодня
            </p>
            <h1 className="mt-1 text-[2rem] font-black leading-none">
              Играй сегодня
            </h1>
          </div>
          <span className="rounded-full bg-black/16 px-3 py-1 text-xs font-black text-white">
            Москва
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {keyStats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/16 bg-white/14 px-3 py-3"
            >
              <p className="text-xl font-black leading-none">{item.value}</p>
              <p className="mt-1 text-[0.72rem] font-bold text-white/82">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-2">
        <Link href="/matches" className="btn-dark">
          Найти матч
        </Link>
        <Link href="/rating" className="btn-secondary">
          Рейтинг
        </Link>
      </section>

      <section className="grid gap-3">
        <SectionBar title="Ближайшие матчи" actionHref="/matches" />
        <div className="grid gap-2">
          {friendlyMatches.slice(0, 2).map((match) => (
            <MatchRow key={match.id} match={match} ctaLabel="+" />
          ))}
        </div>
      </section>

      <section className="grid gap-3">
        <SectionBar title="Турниры" actionHref="/tournaments" />
        <div className="grid gap-2">
          {tournaments.slice(0, 2).map((tournament) => (
            <TournamentRow
              key={tournament.id}
              tournament={tournament}
              ctaLabel="+"
            />
          ))}
        </div>
      </section>

      <section className="grid gap-3">
        <SectionBar title="Обзор" />
        <StatStrip
          items={[
            { label: "Elo", value: "1240" },
            { label: "Win", value: "64%" },
            { label: "Level", value: "3.5" },
          ]}
        />
      </section>
    </AppShell>
  );
}
