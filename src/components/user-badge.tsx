"use client";

import Link from "next/link";

import { useSession } from "@/components/session-provider";

export function UserBadge() {
  const { isReady, session } = useSession();

  if (!isReady) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-panel)] text-xs font-semibold text-[var(--color-muted)]">
        ...
      </div>
    );
  }

  if (!session) {
    return (
      <Link
        href="/auth"
        className="inline-flex h-12 items-center justify-center rounded-2xl bg-[var(--color-ink)] px-4 text-sm font-semibold text-white"
      >
        Войти
      </Link>
    );
  }

  return (
    <Link
      href="/profile"
      className="flex h-12 min-w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(227,100,61,1),rgba(12,124,89,1))] px-4 font-display text-2xl uppercase text-white"
    >
      {session.initials}
    </Link>
  );
}
