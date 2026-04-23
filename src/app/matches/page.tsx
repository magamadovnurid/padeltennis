import Link from "next/link";

import { AppShell } from "@/components/app-shell";
import { MatchRow, SectionBar, StatStrip } from "@/components/mobile-cards";
import { friendlyMatches } from "@/lib/mock-data";

const filters = ["Москва", "Сегодня", "2x2", "3.0–4.0"];

export default function MatchesPage() {
  return (
    <AppShell
      eyebrow="Поиск"
      title="Матчи"
      meta={filters}
    >
      <section className="grid gap-3">
        <div className="grid grid-cols-2 gap-2">
          <Link href="/auth" className="btn-primary">
            Создать
          </Link>
          <Link href="/rating" className="btn-secondary">
            Подбор
          </Link>
        </div>

        <StatStrip
          items={[
            { label: "открыто", value: "18" },
            { label: "сегодня", value: "7" },
            { label: "слоты", value: "5" },
          ]}
        />
      </section>

      <section className="grid gap-3">
        <SectionBar title="Открытые игры" />
        {friendlyMatches.map((match) => (
          <MatchRow key={match.id} match={match} />
        ))}
      </section>
    </AppShell>
  );
}
