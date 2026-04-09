# Padel Next Point

Локальный mobile-first PWA-прототип для падел-платформы:
- installable web app;
- главная, матчи, турниры, рейтинг, профиль;
- локальная сессия по email;
- dev-заглушка под вход через MAX.

## Запуск

```bash
npm install
npm run dev
```

Открыть: `http://localhost:3000`

## Что уже есть

- `Next.js 16` + `App Router`
- PWA manifest
- service worker
- app-like mobile shell
- локальные мок-данные для матчей, турниров и рейтинга

## Что делать следующим шагом

1. Подключить локальную БД (`SQLite + Prisma`).
2. Вынести сессию из `localStorage` в серверную auth-логику.
3. Подключить реальный провайдер MAX после получения понятного API/credential flow.
4. Добавить создание матчей, подтверждение результатов и admin flow.
