# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

This is Akash Mahant's personal portfolio website — a single-page React app showcasing his background in finance, accounting, and data analytics. It is deployed at akashmahant.io. The site is static; all content lives inline in component files as JavaScript constants (e.g. `projects` array in `src/components/Projects.jsx`).

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start Vite dev server with HMR (port 5173)
npm run build        # Production build to dist/
npm run preview      # Preview production build locally
npm run lint         # Run ESLint (.eslint.config.js flat config)
```

## Architecture

- **Framework**: React 19 + Vite 8 (no TypeScript — `.jsx` only).
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`. Styles live in `src/index.css` (`@theme` block for design tokens, `@layer utilities` for text/section helpers) plus per-component inline className strings.
- **Path alias**: `@` resolves to `./src` (configured in `vite.config.js`). Used in imports like `import { Carousel } from "@/components/ui/carousel"`.

### File structure

```
index.html                  # Entry HTML — links Google Fonts (Cormorant Garamond, DM Sans)
public/                     # Static assets: resume PDF, SVG logos, hero image, graduation video
src/main.jsx                # React entry point (createRoot + StrictMode)
src/App.jsx                 # Root layout — mounts sections top-to-bottom, manages scroll state for Nav
src/index.css               # Tailwind @theme tokens, base layer, utility classes
src/components/             # Page sections (one component per section)
  Nav.jsx                   # Fixed top nav with mobile hamburger toggle
  Hero.jsx                  # Landing hero with gradient orbs and CTA buttons
  About.jsx                 # Bio + skills grid
  ToolsCarousel.jsx         # Auto-scrolling tool logos via Embla carousel
  Projects.jsx              # Featured projects (data: inline `projects` array)
  Experience.jsx            # Work history (data: inline `experiences` array)
  Education.jsx             # Degree, coursework, certifications
  Contact.jsx               # Email/phone CTA block
  Footer.jsx                # Social links with inline SVGs
src/components/ui/          # Reusable primitives
  Card.jsx                  # ProjectCard, ExperienceCard, InfoCard (named exports)
  carousel.jsx              # Carousel wrapper components (Carousel, CarouselContent, CarouselItem) + useCarousel hook
  Button.jsx                # BlackPill, WhitePill, WarmStone link/button variants
```

### Component patterns

- **Data-first sections**: `Projects`, `Experience`, and `ToolsCarousel` define their data as top-level constants (`const projects = [...]`) then map over them. This is the pattern for adding/updating content — edit the constant, not individual JSX.
- **Section layout convention**: Each section component renders a `<section id="...">` with `py-section` (120px vertical padding), and contains an inner `mx-auto max-w-[860px]` or `max-w-container` wrapper for content.
- **Typography scale**: Use the Tailwind utility classes defined in `src/index.css` (`text-display`, `text-body-lg`, `text-caption`, etc.) rather than raw `text-*` sizes. These encode font-family, weight, line-height, and letter-spacing together.
- **Color tokens**: Custom colors are defined as CSS variables in the `@theme` block (e.g. `--color-mint`, `--color-peach`). Use them via Tailwind's arbitrary value syntax: `text-[var(--color-mint)]`. The `tailwind.config.js` extends these with short aliases like `mint`, `peach`, `lavender`, `sky`, `rose` for use as `bg-mint`, `border-lavender`, etc.
- **Card styling**: Use the shadow and radius tokens — `shadow-card`, `shadow-warm-lg`, `rounded-card`. Avoid raw box-shadow values; they're not in the design system.

### External dependencies worth knowing

| Package | Purpose |
|---------|---------|
| `embla-carousel-react` + `embla-carousel-auto-scroll` | Carousel implementation (ToolsCarousel) |
| `lucide-react` | Icon library (imported but not yet used in current components — available for future use) |
| `@radix-ui/react-slot` | Slot/compound component primitive (imported but unused currently) |

## Design system highlights

- **Fonts**: Display = Cormorant Garamond 300; Body = DM Sans 400/500; Mono = Geist Mono.
- **Color palette**: Warm stone/neutrals (`ink`, `muted`, `border`) with atmospheric accent gradients (mint, peach, lavender, sky, rose). Dark mode is not implemented — `darkMode: "class"` is in tailwind.config but unused.
- **Spacing scale**: Custom `section` (120px) and `section-sm` (80px) utilities are defined for vertical rhythm between sections.
