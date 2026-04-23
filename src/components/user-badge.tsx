"use client";

import Link from "next/link";

import { useSession } from "@/components/session-provider";

export function UserBadge() {
  const { isReady, session } = useSession();

  if (!isReady) {
    return (
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 text-xs font-black text-[var(--color-muted)]">
        ...
      </div>
    );
  }

  if (!session) {
    return (
      <Link
        href="/auth"
        className="badge-login"
      >
        Войти
      </Link>
    );
  }

  return (
    <Link
      href="/profile"
      className="badge-player"
    >
      {session.initials}
    </Link>
  );
}
