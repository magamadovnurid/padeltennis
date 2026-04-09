import { AppShell } from "@/components/app-shell";
import { AuthCard } from "@/components/auth-card";

export default function AuthPage() {
  return (
    <AppShell eyebrow="Access" title="Вход" meta={["Email", "MAX"]}>
      <AuthCard />
    </AppShell>
  );
}
