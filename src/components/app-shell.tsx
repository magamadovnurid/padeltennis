import type { ReactNode } from "react";

import { BottomNav } from "@/components/bottom-nav";
import { InstallPrompt } from "@/components/install-prompt";
import { UserBadge } from "@/components/user-badge";

type AppShellProps = {
  eyebrow?: string;
  title: string;
  meta?: string[];
  showHeader?: boolean;
  children: ReactNode;
};

export function AppShell({
  eyebrow,
  title,
  meta,
  showHeader = true,
  children,
}: AppShellProps) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-3 pb-[calc(106px+var(--safe-bottom))] pt-[calc(12px+var(--safe-top))]">
      {showHeader ? (
        <header className="app-card p-3">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              {eyebrow ? (
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[var(--color-muted)]">
                  {eyebrow}
                </p>
              ) : null}
              <h1 className="mt-1 truncate text-[1.65rem] font-black leading-tight text-[var(--color-ink)]">
                {title}
              </h1>
            </div>
            <UserBadge />
          </div>

          {meta?.length ? (
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {meta.map((item) => (
                <span
                  key={item}
                  className="ui-chip"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </header>
      ) : null}

      <main className={`flex flex-1 flex-col gap-4 ${showHeader ? "py-3" : "pt-0 pb-4"}`}>
        {children}
      </main>

      <InstallPrompt />
      <BottomNav />
    </div>
  );
}
