# Tam Giang Capital - Source Base Documentation

## Directory Structure

```
tgv-landingpage/
├── .git/                      # Git repository
├── .gitignore                 # Git ignore rules
├── README.md                  # Project readme
├── package.json               # Dependencies and scripts
├── package-lock.json          # Lockfile
├── tsconfig.json              # TypeScript configuration
├── next.config.ts             # Next.js configuration
├── postcss.config.mjs         # PostCSS plugins
├── eslint.config.mjs          # ESLint configuration
│
├── public/                    # Static assets (served at /)
│   ├── logo.png               # Site logo
│   ├── file.svg, globe.svg    # Utility icons
│   ├── next.svg, vercel.svg   # Framework logos
│   ├── window.svg             # UI icons
│   └── images/                # Project images
│       ├── background-1.jpg   # Hero background
│       ├── og-image-static.png
│       ├── banner-4Z.webp
│       ├── Tam-Giang-Food-scaled.jpg
│       └── ...
│
└── src/                       # Source code
    ├── app/                   # Next.js App Router
    │   ├── globals.css        # Global styles + Tailwind
    │   ├── icon.png           # App favicon
    │   ├── opengraph-image.png # OG image
    │   ├── layout.tsx         # Root layout
    │   ├── page.tsx           # Home page
    │   ├── about/page.tsx     # About page
    │   ├── contact/page.tsx   # Contact page
    │   ├── esport/page.tsx    # Esport vertical
    │   ├── join/page.tsx      # Investor signup
    │   ├── manufacture/page.tsx
    │   ├── service/page.tsx
    │   ├── services/page.tsx
    │   └── venture/page.tsx
    │
    ├── components/            # React components
    │   ├── home/              # Home page sections
    │   │   ├── Hero.tsx       # Particle hero section
    │   │   ├── AboutSection.tsx
    │   │   ├── ProjectCarousel.tsx
    │   │   └── VideoSection.tsx
    │   ├── layout/            # Layout components
    │   │   ├── Header.tsx     # Navigation header
    │   │   └── Footer.tsx     # Site footer
    │   └── ui/                # Reusable UI
    │       └── Counter.tsx    # Animated counter
    │
    └── lib/                   # Utilities
        └── utils.ts           # cn() class utility
```

## Entry Points

### Application Entry
- **`src/app/layout.tsx`**: Root layout, wraps all pages with Header/Footer
- **`src/app/page.tsx`**: Home page, composes Hero + AboutSection + Carousel + Video

### Configuration Entry
- **`package.json`**: Scripts and dependencies
- **`next.config.ts`**: Next.js build configuration
- **`tsconfig.json`**: TypeScript compiler options

## Key Files

### Core Application

| File | Purpose | Key Exports |
|------|---------|-------------|
| `layout.tsx` | Root layout with fonts, metadata | `RootLayout`, `metadata` |
| `page.tsx` | Home page composition | `Home` (default) |
| `globals.css` | Tailwind import + CSS variables | - |

### Components

| File | Purpose | Key Exports |
|------|---------|-------------|
| `Hero.tsx` | Full-screen hero with particles | `Hero` |
| `AboutSection.tsx` | Company vision, business cards | `AboutSection` |
| `ProjectCarousel.tsx` | Portfolio showcase carousel | `ProjectCarousel` |
| `VideoSection.tsx` | Video embed section | `VideoSection` |
| `Header.tsx` | Sticky navigation, mobile menu | `Header` |
| `Footer.tsx` | Site footer with links | `Footer` |
| `Counter.tsx` | Animated number counter | `Counter` |

### Utilities

| File | Purpose | Key Exports |
|------|---------|-------------|
| `lib/utils.ts` | Tailwind class merging | `cn()` |

## Module Breakdown

### Page Modules (src/app/*)

Each page follows the same pattern:
```typescript
// src/app/[route]/page.tsx
export default function PageName() {
  return (
    <div>
      {/* Page-specific content */}
    </div>
  );
}
```

### Component Modules

**Home Components** (`src/components/home/`):
- Self-contained sections with embedded static data
- Use `'use client'` directive for interactivity
- Import Framer Motion for animations

**Layout Components** (`src/components/layout/`):
- Shared across all pages via root layout
- Header: Client component (scroll state)
- Footer: Server component (static)

**UI Components** (`src/components/ui/`):
- Reusable, atomic UI elements
- Follow component props pattern

## Import Aliases

Configured in `tsconfig.json`:
```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

Usage:
```typescript
import { Header } from '@/components/layout/Header';
import { cn } from '@/lib/utils';
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Build Output

Production build generates:
```
.next/
├── static/          # Static assets (CSS, JS chunks)
├── server/          # Server-side rendering
└── cache/           # Build cache
```
