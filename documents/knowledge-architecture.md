# Tam Giang Capital - System Architecture

## Overview

The application follows **Next.js 16 App Router** architecture with a component-based design pattern, leveraging React 19 Server and Client Components for optimal performance.

## Architectural Layers

```
┌─────────────────────────────────────────────────────────────┐
│                     PRESENTATION LAYER                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │   Header    │  │   Footer    │  │   Page Components   │  │
│  │  (client)   │  │  (server)   │  │  (Hero, About...)   │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                     COMPOSITION LAYER                        │
│  ┌─────────────────────────────────────────────────────────┐│
│  │              App Router Pages (layout.tsx)               ││
│  │         Nested layouts with shared Header/Footer         ││
│  └─────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────┤
│                      UTILITY LAYER                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │  lib/utils  │  │   Tailwind  │  │   Font Loading      │  │
│  │   cn()      │  │   Config    │  │   (Inter, Playfair) │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Component Architecture

### Client vs Server Components

| Component | Type | Reason |
|-----------|------|--------|
| `layout.tsx` | Server | Static metadata, font loading |
| `page.tsx` | Server | Composition only, no interactivity |
| `Header.tsx` | Client | Scroll detection, mobile menu state |
| `Footer.tsx` | Server | Static content, no interactivity |
| `Hero.tsx` | Client | Particles, Framer Motion animations |
| `AboutSection.tsx` | Client | Scroll-triggered animations |
| `ProjectCarousel.tsx` | Client | Embla carousel + autoplay |
| `VideoSection.tsx` | Client | Video player (assumed) |
| `Counter.tsx` | Client | Animation/state logic |

### Component Hierarchy

```
RootLayout
├── Header (client, fixed positioning)
├── Main Content
│   └── [Page Component]
│       └── Home Page
│           ├── Hero (particles + motion)
│           ├── AboutSection (motion, whileInView)
│           ├── ProjectCarousel (embla)
│           └── VideoSection
└── Footer (server component)
```

## Data Flow

### Static Data Pattern

Most data is hardcoded within components:

1. **Navigation Items**: Defined in `Header.tsx` as `navItems[]`
2. **Project Data**: Defined in `ProjectCarousel.tsx` as `projects[]`
3. **Company Info**: Hardcoded in `Footer.tsx`

### Props Flow

```
layout.tsx (fonts, metadata)
    ↓
page.tsx (composition)
    ↓
[Section Components] ← embedded static data
```

## Design Patterns

### 1. Composition Pattern
Pages compose section components without passing data props.

### 2. CSS Variable Theming
Global CSS defines theme variables:
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

### 3. Utility-First Styling
`cn()` utility merges clsx + tailwind-merge for conditional classes:
```typescript
cn('base-class', isActive && 'active-class')
```

### 4. Scroll-Aware Components
Header uses `useEffect` + `useState` for scroll detection:
```typescript
const [isScrolled, setIsScrolled] = useState(false);
useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 20);
  // ...
}, []);
```

## External Dependencies

### Animation Stack
- **Framer Motion**: Page transitions, scroll-triggered animations
- **TSParticles**: Interactive particle background in Hero

### Carousel
- **Embla Carousel**: Touch-friendly, performant carousel
- **Autoplay Plugin**: 5-second auto-advance

### Fonts
- **Inter**: Primary sans-serif (via next/font)
- **Playfair Display**: Serif accent font

## Build & Deploy

### Build Pipeline
```
TypeScript → Next.js Compiler → Static/SSR Output
                    ↓
            PostCSS + Tailwind → Optimized CSS
```

### Output Modes
- Static pages where possible
- Server-rendered pages for dynamic routes (if any)
