import { AppShell } from "@/components/app-shell";
import { tournaments } from "@/lib/mock-data";

export default function TournamentsPage() {
  return (
    <AppShell
      eyebrow="Competition"
      title="Турниры"
      meta={["Americano", "Mix", "2x2"]}
    >
      <section className="grid gap-3">
        {tournaments.map((tournament) => (
          <article
            key={tournament.id}
            className="overflow-hidden rounded-[30px] bg-[var(--color-ink)] text-white shadow-[0_18px_48px_rgba(16,33,43,0.14)]"
          >
            <div className="bg-[linear-gradient(120deg,rgba(12,124,89,0.86),rgba(16,33,43,0.96))] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/74">
                    {tournament.city}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold">{tournament.title}</h2>
                </div>
                <span className="rounded-full border border-white/14 bg-white/18 px-3 py-1 text-xs font-semibold text-white">
                  {tournament.format}
                </span>
              </div>
            </div>

            <div className="grid gap-3 p-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-2xl bg-white/6 px-3 py-3">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/62">
                    Дата
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    {tournament.date}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/6 px-3 py-3">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/62">
                    Уровень
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    {tournament.level}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/6 px-3 py-3">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/62">
                  Клуб
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  {tournament.club}
                </p>
              </div>

              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-white/82">{tournament.club}</p>
                <button
                  type="button"
                  className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[var(--color-ink)]"
                >
                  Войти
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </AppShell>
  );
}
