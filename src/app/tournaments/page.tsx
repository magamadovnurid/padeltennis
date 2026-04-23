import Link from "next/link";

import { AppShell } from "@/components/app-shell";
import { SectionBar, TournamentRow } from "@/components/mobile-cards";
import { tournaments } from "@/lib/mock-data";

export default function TournamentsPage() {
  return (
    <AppShell
      eyebrow="Афиша"
      title="Турниры"
      meta={["Москва", "Mix", "Americano", "2x2"]}
    >
      <section className="grid gap-3">
        <div className="grid grid-cols-2 gap-2">
          <Link href="/auth" className="btn-primary">
            Создать
          </Link>
          <Link href="/rating" className="btn-secondary">
            Фильтр
          </Link>
        </div>
      </section>

      <section className="grid gap-3">
        <SectionBar title="Афиша" />
        {tournaments.map((tournament) => (
          <TournamentRow key={tournament.id} tournament={tournament} />
        ))}
      </section>
    </AppShell>
  );
}
