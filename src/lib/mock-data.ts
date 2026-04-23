export const keyStats = [
  { label: "открыто", value: "18" },
  { label: "сегодня", value: "7" },
  { label: "игроков", value: "420" },
];

export const tournaments = [
  {
    id: "t1",
    title: "Open Mix",
    city: "Москва",
    date: "25 апреля · Сб",
    level: "3.0–4.0",
    club: "Padel Friends",
    format: "Mix",
  },
  {
    id: "t2",
    title: "City Ladder",
    city: "Санкт-Петербург",
    date: "28 апреля · Вт",
    level: "4.0+",
    club: "North Padel Club",
    format: "2x2",
  },
  {
    id: "t3",
    title: "Rookie Cup",
    city: "Сочи",
    date: "3 мая · Вс",
    level: "Beginner",
    club: "Black Sea Padel",
    format: "Americano",
  },
];

export type Tournament = (typeof tournaments)[number];

export const friendlyMatches = [
  {
    id: "m1",
    city: "Москва",
    club: "Лужники · корт 2",
    time: "Сегодня · 20:30",
    level: "3.0–3.5",
    surface: "Индор",
    host: "Илья В.",
    playersNeeded: 2,
  },
  {
    id: "m2",
    city: "Москва",
    club: "West Side Arena",
    time: "Завтра · 09:00",
    level: "4.0",
    surface: "Индор",
    host: "Мария Л.",
    playersNeeded: 1,
  },
  {
    id: "m3",
    city: "Сочи",
    club: "Sea Breeze",
    time: "Пятница · 19:00",
    level: "2.5–3.0",
    surface: "Открытый",
    host: "Денис П.",
    playersNeeded: 2,
  },
];

export type FriendlyMatch = (typeof friendlyMatches)[number];

export const leaderboard = [
  {
    id: "p1",
    name: "Анна Воронцова",
    initials: "АВ",
    city: "Москва",
    side: "Левая",
    rating: 1488,
    winRate: "76%",
  },
  {
    id: "p2",
    name: "Дмитрий Нестеров",
    initials: "ДН",
    city: "Сочи",
    side: "Правая",
    rating: 1462,
    winRate: "71%",
  },
  {
    id: "p3",
    name: "Михаил Орлов",
    initials: "МО",
    city: "Казань",
    side: "Левая",
    rating: 1440,
    winRate: "67%",
  },
  {
    id: "p4",
    name: "Елена Карпова",
    initials: "ЕК",
    city: "Санкт-Петербург",
    side: "Правая",
    rating: 1424,
    winRate: "66%",
  },
];
