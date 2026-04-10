"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Главная", icon: "home" },
  { href: "/matches", label: "Матчи", icon: "matches" },
  { href: "/tournaments", label: "Турниры", icon: "trophy" },
  { href: "/rating", label: "Рейтинг", icon: "rating" },
  { href: "/profile", label: "Профиль", icon: "profile" },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-[calc(12px+var(--safe-bottom))] z-30 mx-auto w-[calc(100%-24px)] max-w-[406px] rounded-[28px] border border-white/16 bg-[rgba(10,20,29,0.56)] px-2 py-2 shadow-[0_24px_60px_rgba(16,33,43,0.24)] backdrop-blur-2xl">
      <ul className="grid grid-cols-5 gap-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-[0.72rem] font-semibold transition ${
                  isActive
                    ? "bg-[rgba(227,100,61,0.92)] text-white shadow-[0_10px_24px_rgba(227,100,61,0.28)]"
                    : "bg-transparent text-white/95 hover:bg-white/10"
                }`}
              >
                <NavIcon name={item.icon} active={isActive} />
                <span
                  className={
                    isActive
                      ? "leading-none text-white"
                      : "leading-none text-white/95"
                  }
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function NavIcon({
  name,
  active,
}: {
  name: (typeof navItems)[number]["icon"];
  active: boolean;
}) {
  const stroke = active ? "#ffffff" : "rgba(255,255,255,0.95)";

  switch (name) {
    case "home":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 10.5L12 4L20 10.5V20H4V10.5Z"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 20V13H14.5V20"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "matches":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="9" cy="9" r="4.5" stroke={stroke} strokeWidth="1.8" />
          <circle cx="15.5" cy="15.5" r="4.5" stroke={stroke} strokeWidth="1.8" />
          <path d="M12.2 12.2L19 19" stroke={stroke} strokeWidth="1.8" />
        </svg>
      );
    case "trophy":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 4H17V8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8V4Z"
            stroke={stroke}
            strokeWidth="1.8"
          />
          <path d="M9.5 13V16H14.5V13" stroke={stroke} strokeWidth="1.8" />
          <path d="M8 20H16" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
          <path
            d="M17 5H19C19.5523 5 20 5.44772 20 6V7C20 8.65685 18.6569 10 17 10"
            stroke={stroke}
            strokeWidth="1.8"
          />
          <path
            d="M7 5H5C4.44772 5 4 5.44772 4 6V7C4 8.65685 5.34315 10 7 10"
            stroke={stroke}
            strokeWidth="1.8"
          />
        </svg>
      );
    case "rating":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 18L9 13L12 16L18 8L19 18H5Z" stroke={stroke} strokeWidth="1.8" />
          <path d="M18 8H14" stroke={stroke} strokeWidth="1.8" />
        </svg>
      );
    case "profile":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="3.5" stroke={stroke} strokeWidth="1.8" />
          <path
            d="M5 20C5.9 16.9 8.5 15.2 12 15.2C15.5 15.2 18.1 16.9 19 20"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}
