# Movio Roadmap — Anime-first, Netflix-like Experience

This document outlines the evolution of Movio from a discovery app to an anime-first, Netflix-like platform. Timelines are indicative and may adjust based on contributors and community demand.

## Phase 1 — Foundation (Now)
- Search, listing, and trending backed by Appwrite
- Responsive UI and accessibility baseline
- Error/loading states and graceful fallbacks
- Environment and configuration hardening
- Basic CI: Lint checks (GitHub Actions)

## Phase 2 — Accounts & Collections (Q3–Q4 2025)
- Appwrite Auth: email/password + OAuth providers
- Favorites and watchlist persistence
- Basic profile pages
- Import/export lists (JSON/CSV)

## Phase 3 — Anime-Native Data (Q1 2026)
- Integrate AniList GraphQL or Jikan (MAL) for richer anime metadata
- Episode and season modeling in UI
- Seasonal calendar (Winter/Spring/Summer/Fall)
- Character and studio pages with filters

## Phase 4 — Personalization & Social (Q2 2026)
- Recommendation engine (collaborative + content-based)
- Activity feed, comments, ratings/reviews
- Shareable lists and public profiles
- PWA improvements: offline cache for metadata and images

## Phase 5 — Performance & Scale (Q3 2026)
- Image optimization, lazy-loading, responsive images
- Data caching strategies (HTTP cache, SWR/React Query)
- API rate limiting and backoff
- Monitoring/analytics dashboards

## Phase 6 — Ecosystem (Q4 2026)
- Public API for lists and metadata (where allowed by ToS)
- Theme/skin system (anime-inspired themes)
- i18n: Japanese/English first, then community translations
- Developer docs and examples

## Guardrails
- No hosting of copyrighted content; discovery and tracking only
- Respect API provider Terms of Service
- Accessibility and performance are non-negotiable quality bars
