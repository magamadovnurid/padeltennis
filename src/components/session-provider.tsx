"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type ProviderName = "email" | "max";

type Session = {
  name: string;
  email: string;
  provider: ProviderName;
  city: string;
  level: string;
  side: string;
  rating: number;
  initials: string;
};

type SessionContextValue = {
  isReady: boolean;
  session: Session | null;
  signInWithEmail: (input: { name: string; email: string }) => void;
  signInWithMaxMock: () => void;
  signOut: () => void;
};

const STORAGE_KEY = "padel-next-point-session-v1";

const SessionContext = createContext<SessionContextValue | null>(null);

export function SessionProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [session, setSession] = useState<Session | null>(() => readStoredSession());
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const persist = useCallback((nextSession: Session | null) => {
    setSession(nextSession);

    if (nextSession) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSession));
      return;
    }

    window.localStorage.removeItem(STORAGE_KEY);
  }, []);

  const signInWithEmail = useCallback(
    ({ name, email }: { name: string; email: string }) => {
      const normalizedName = name.trim();
      const normalizedEmail = email.trim().toLowerCase();

      persist({
        name: normalizedName,
        email: normalizedEmail,
        provider: "email",
        city: "Москва",
        level: "3.5",
        side: "Правая",
        rating: 1240,
        initials: buildInitials(normalizedName),
      });
    },
    [persist],
  );

  const signInWithMaxMock = useCallback(() => {
    persist({
      name: "MAX Player",
      email: "max@local.dev",
      provider: "max",
      city: "Москва",
      level: "4.0",
      side: "Левая",
      rating: 1315,
      initials: "MP",
    });
  }, [persist]);

  const signOut = useCallback(() => {
    persist(null);
  }, [persist]);

  const value = useMemo(
    () => ({
      isReady,
      session,
      signInWithEmail,
      signInWithMaxMock,
      signOut,
    }),
    [isReady, session, signInWithEmail, signInWithMaxMock, signOut],
  );

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("useSession must be used within SessionProvider");
  }

  return context;
}

function buildInitials(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);
  const initials = parts.slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "");

  return initials.join("") || "PL";
}

function readStoredSession() {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as Session;
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}
