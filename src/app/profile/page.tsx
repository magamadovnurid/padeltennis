import Link from "next/link";

import { AppShell } from "@/components/app-shell";
import { ProfileOverview } from "@/components/profile-overview";

export default function ProfilePage() {
  return (
    <AppShell
      eyebrow="Игрок"
      title="Профиль"
      meta={["Аккаунт", "Elo", "История"]}
    >
      <ProfileOverview />

      <section className="grid gap-3">
        <div className="app-card p-3">
          <div className="grid grid-cols-2 gap-2">
            <Link href="/auth" className="btn-primary">
              Вход
            </Link>
            <Link href="/matches" className="btn-secondary">
              Матчи
            </Link>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
