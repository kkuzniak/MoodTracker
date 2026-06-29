# Mood Tracking App

A polished, responsive mood and sleep dashboard - built as a portfolio piece on top of the [Frontend Mentor Mood Tracking App](https://www.frontendmentor.io/challenges/mood-tracking-app-E2XeKhDF0B) challenge.

Users can log their daily feeling, track sleep hours, write a daily reflection, and visualise mood and sleep trends over time through interactive charts and statistics.

---

## Frontend Mentor

This UI is based on the **Mood Tracking App** challenge from [Frontend Mentor](https://www.frontendmentor.io).

| | |
| --- | --- |
| **Challenge** | [Mood Tracking App](https://www.frontendmentor.io/challenges/mood-tracking-app-E2XeKhDF0B) |
| **Skills** | HTML, CSS, JavaScript (implemented here with Next.js & TypeScript) |

### Challenge brief

Build a mood tracking app that matches the provided mobile and desktop designs. Users should be able to:

- Log their current mood using an emoji-based feeling selector
- Record the number of hours slept
- Write a daily reflection note
- View average mood and sleep statistics
- See mood and sleep trends visualised in a bar chart
- Use a layout that works well on different screen sizes
- See hover and focus states on all interactive elements

### Design credit

- Challenge and design assets: [Frontend Mentor](https://www.frontendmentor.io)
- Font in the design: **Reddit Sans** (self-hosted via `next/font/local`)

> Thanks for checking out this project! Frontend Mentor challenges help you improve your coding skills by building realistic projects.

---

## Highlights

- **Five-point mood scale** - Very Happy, Happy, Neutral, Sad, and Very Sad moods each rendered as custom SVG shape components.
- **Trend visualisation** - Interactive grouped bar chart (Recharts) comparing mood and sleep across the week, with custom tooltips and a legend.
- **Average stats panel** - Dedicated cards for average mood and average sleep with directional trend indicators.
- **Daily reflection** - A card for logging a free-text note alongside a decorative quote icon.
- **Auth screens** - Login and sign-up pages wrapped in a shared auth layout.
- **Responsive layout** - Single-column on mobile, multi-column grid on larger screens.

---

## Tech stack

| Category | Tools |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI | [React 19](https://react.dev), [Tailwind CSS 4](https://tailwindcss.com) |
| Charts | [Recharts 3](https://recharts.org) |
| Components | [Radix UI Themes](https://www.radix-ui.com/themes) primitives |
| Forms | [React Hook Form](https://react-hook-form.com), [Zod](https://zod.dev) |
| Language | TypeScript |
| Lint / format | [Biome](https://biomejs.dev) |

---

## Getting started

### Prerequisites

- Node.js 18+
- npm (or pnpm / yarn / bun)

### Install & run

```bash
git clone <your-repo-url>
cd mood-tracking-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Run the production server |
| `npm run lint` | Lint with Biome |
| `npm run format` | Format with Biome |
| `npm run check` | Lint + format (write) |

---

## Project structure

```
src/app/
  page.tsx              # Dashboard home
  login/                # Login page
  signup/               # Sign-up page
features/dashboard/
  feeling-status/       # Mood selector with SVG emoji shapes
  average-mood-and-sleep/  # Average stats cards
  mood-and-sleep-trends.tsx   # Trends section (wraps bar chart)
  sleep-amount.tsx      # Sleep hours card
  reflection-of-the-day.tsx   # Daily reflection card
shared/
  components/charts/    # Recharts bar chart
  components/icons/     # SVG icon components
  components/layout/    # Navbar
  components/shapes/    # Feeling SVG shapes (full & small emoji)
  layouts/              # Auth layout
  types.ts              # Shared TypeScript types
utils/
  cn.ts                 # Tailwind class merging helper
```