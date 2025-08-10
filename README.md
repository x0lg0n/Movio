# 🎬 Movio — Open Anime Discovery Platform

<div align="center">
  <img src="./public/hero.png" alt="Movio Banner" width="420"/>

  <br/>

  <a href="https://react.dev"><img alt="React" src="https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=white"></a>
  <a href="https://vitejs.dev"><img alt="Vite" src="https://img.shields.io/badge/Vite-7.0.4-646CFF?logo=vite&logoColor=white"></a>
  <a href="https://tailwindcss.com"><img alt="Tailwind" src="https://img.shields.io/badge/Tailwind-4.1.11-38B2AC?logo=tailwindcss&logoColor=white"></a>
  <a href="https://appwrite.io"><img alt="Appwrite" src="https://img.shields.io/badge/Appwrite-BaaS-FF3366?logo=appwrite&logoColor=white"></a>
  <a href="./LICENSE"><img alt="MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
  <a href="http://makeapullrequest.com"><img alt="PRs" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
</div>

## 🌟 Overview

Movio is a modern, open-source anime discovery and tracking platform inspired by Netflix-like experiences. It focuses on anime-first UX with smart search, trending insights, and a clean responsive UI. It currently integrates TMDB and Appwrite, with planned support for anime-centric sources like AniList and MyAnimeList (via Jikan).

> Note: Movio does not host or distribute copyrighted content. It is a discovery, tracking, and catalog UI.

## ✨ Features

- 🔎 Debounced global search with results from TMDB (anime-first filters planned)
- 🔥 Trending list backed by Appwrite (tracks popular searches)
- 🎴 Rich anime cards: rating, language, year, poster fallbacks
- 📱 Fully responsive Tailwind UI, accessible and keyboard-friendly
- ⚙️ Environment-driven configuration for keys and endpoints
- 🧩 Modular component architecture with React 19 + Vite

Planned anime-specific capabilities:
- 🎞️ Episode/season tracking and progress
- 🗂️ Seasonal calendar (Winter/Spring/Summer/Fall)
- 🧠 Personalized recommendations and watchlist
- 👤 Profiles, favorites, lists, and activity
- 📰 News feeds and studio/character databases

## 🚀 Quick Start

Prerequisites
- Node.js 18+
- pnpm (recommended) or npm
- TMDB API key (Bearer token)
- Appwrite project (for trending/favorites persistence)

Setup
```bash
# 1) Clone
git clone https://github.com/x0lg0n/movio.git
cd movio

# 2) Install deps
pnpm install
# or: npm install

# 3) Configure env
cp .env.example .env.local
# then edit .env.local with your keys

# 4) Run dev server
pnpm dev
# or: npm run dev

# 5) Open
# http://localhost:5173
```

Environment variables (.env.local)
```env
VITE_TMDB_API_KEY=your_tmdb_bearer_token
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

## 🧱 Tech Stack
- React 19 + Vite 7
- Tailwind CSS 4 + Flowbite React
- Appwrite (Database, future Auth/Functions)
- TMDB API (anime data via "Animation" + country/genre filters)

Future integrations
- AniList GraphQL or Jikan (MyAnimeList) for anime-native metadata
- Sentry or OpenTelemetry for observability

## 🗂️ Project Structure
```
src/
├─ components/         # Reusable UI
│  ├─ MovieCard.jsx
│  ├─ Search.jsx
│  └─ Spinner.jsx
├─ pages/              # Route-level views
│  ├─ Home.jsx
│  ├─ Login.jsx
│  └─ Register.jsx
├─ appwrite.js         # Appwrite SDK helpers
├─ App.jsx             # Main shell
├─ main.jsx            # App entry
├─ App.css             # Component styles
└─ index.css           # Global styles
```

## 🛠️ Development
- Build: `pnpm build` / `npm run build`
- Dev Server: `pnpm dev` / `npm run dev`
- Preview: `pnpm preview` / `npm run preview`
- Typecheck: `pnpm typecheck` / `npm run typecheck`
- Format: `pnpm format` / `npm run format`
- Lint: `pnpm lint` / `npm run lint`


## 🧪 Quality
- Lint: `pnpm lint`
- Tests: Testing setup is not included yet. See ROADMAP for plans (Vitest + RTL).
- Best Practices: see [BEST_PRACTICES.md](https://github.com/x0lg0n/Movio/blob/master/.github/BEST_PRACTICES.md)

## 🤝 Contributing
We welcome contributions of all kinds! Read:
- [CONTRIBUTING.md](https://github.com/x0lg0n/Movio/blob/master/.github/CONTRIBUTING.md)
- [CODE_OF_CONDUCT.md](https://github.com/x0lg0n/Movio/blob/master/.github/CODE_OF_CONDUCT.md)
- [SECURITY.md](https://github.com/x0lg0n/Movio/blob/master/.github/SECURITY.md)
- [SUPPORT.md](.https://github.com/x0lg0n/Movio/blob/master/.github/SUPPORT.md)

Create issues using our templates and submit PRs with the provided checklist.

## 📖 Documentation
- [Best Practices](https://github.com/x0lg0n/Movio/blob/master/.github/BEST_PRACTICES.md) : coding standards, testing guidelines, etc.
- [Roadmap](https://github.com/x0lg0n/Movio/blob/master/.github/ROADMAP.md) : detailed feature timeline and priorities

## CONTRIBUTORS
Contributions are welcome! See [CONTRIBUTING.md](https://github.com/x0lg0n/Movio/blob/master/.github/CONTRIBUTING.md).
<br/>
<div align="center">
<a href="https://github.com/x0lg0n/Movio/graphs/contributors">
<img src="https://contrib.rocks/image?repo=x0lg0n/Movio" />
</a>
</div>


## 🗺️ Roadmap (Anime-first, Netflix-like)
A high-level view of our plans. Detailed milestones live in [ROADMAP.md](https://github.com/x0lg0n/Movio/blob/master/.github/ROADMAP.md).

Phase 1 — Foundation (Now)
- [x] Search + results + trending
- [x] Responsive UI and basic accessibility
- [ ] Auth (Appwrite) + protected routes
- [ ] Favorites + Watchlist backed by Appwrite

Phase 2 — Anime Native (Q3–Q4 2025)
- [ ] AniList/Jikan integration for richer anime/episode metadata
- [ ] Seasonal calendar + airing schedules
- [ ] Episode tracking: progress, resume points
- [ ] Genre/Studio/Character pages and filters

Phase 3 — Personalization & Social (Q1–Q2 2026)
- [ ] Recommendation engine (content + collaborative filtering)
- [ ] User profiles, lists, sharing
- [ ] Reviews/ratings, comments, activity feed
- [ ] Mobile-friendly PWA enhancements

Phase 4 — Scale & Ecosystem (Q3–Q4 2026)
- [ ] Performance: caching, image optimization, CDN
- [ ] Accessibility and i18n at scale (Japanese/English first)
- [ ] Third-party developer API (public endpoints)
- [ ] Optional monetization hooks (donations/sponsorships)

Note: Any future “streaming” features will only support legally provided content and user-owned media. We do not endorse or include piracy.

## 🔒 Security
Please report vulnerabilities responsibly. See [SECURITY.md](https://github.com/x0lg0n/Movio/blob/master/.github/SECURITY.md).

## 📄 License
This project is licensed under the MIT © Contributors — see [LICENSE](https://github.com/x0lg0n/Movio/blob/master/LICENSE)

## 🙏 Acknowledgements
- TMDB for content data (movies + animation)
- Appwrite for the backend platform
- Tailwind + Flowbite for UI productivity
- All contributors and the open-source community
