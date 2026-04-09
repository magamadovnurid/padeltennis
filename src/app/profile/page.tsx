import Link from "next/link";

import { AppShell } from "@/components/app-shell";
import { ProfileOverview } from "@/components/profile-overview";

export default function ProfilePage() {
  return (
    <AppShell
      eyebrow="Player"
      title="Профиль"
      meta={["Рейтинг", "Матчи", "Аккаунт"]}
    >
      <ProfileOverview />

      <section className="grid gap-3">
        <div className="rounded-[26px] border border-[var(--color-line)] bg-[var(--color-panel-strong)] p-4 shadow-[0_16px_40px_rgba(16,33,43,0.08)]">
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/auth"
              className="inline-flex h-12 items-center justify-center rounded-[22px] bg-[var(--color-clay)] px-5 text-sm font-semibold text-white"
            >
              Вход
            </Link>
            <Link
              href="/matches"
              className="inline-flex h-12 items-center justify-center rounded-[22px] border border-[var(--color-line)] bg-white px-5 text-sm font-semibold text-[var(--color-ink)]"
            >
              Матчи
            </Link>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
