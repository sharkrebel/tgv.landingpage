# Tam Giang Capital Landing Page - Project Overview

## Purpose

A modern, high-performance landing page for **Tam Giang Capital (TGV Capital)** - a multi-industry investment ecosystem in Vietnam. The website showcases the company's investment portfolio across four key sectors: Digital Services, Esports, Venture Capital, and High-Tech Agriculture.

## Goals

1. **Brand Presentation**: Establish TGV Capital as a premier investment group with a professional, modern web presence
2. **Lead Generation**: Convert visitors into potential investors through compelling CTAs
3. **Portfolio Showcase**: Display the ecosystem's projects with interactive carousel and animations
4. **Multi-Industry Navigation**: Provide clear pathways to each business vertical (Service, Esport, Venture, Manufacture)

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js (App Router) | 16.1.6 |
| Runtime | React | 19.2.3 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Animation | Framer Motion | 12.29.2 |
| Carousel | Embla Carousel | 8.6.0 |
| Particles | TSParticles Slim | 2.12.0 |
| Icons | Lucide React | 0.563.0 |
| Build | PostCSS + ESLint | Latest |

## Key Features

- **Hero Section**: Full-screen hero with interactive particle effects and animated typography
- **About Section**: Company vision/mission with animated business vertical cards
- **Project Carousel**: Auto-playing showcase of portfolio companies (BHXH services, Esports, Agriculture)
- **Video Section**: Embedded promotional content
- **Responsive Navigation**: Scroll-aware header with mobile hamburger menu
- **Multi-Page Structure**: Dedicated pages for each business vertical

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

The development server runs at `http://localhost:3000` with hot module replacement enabled.

## Project Structure Summary

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout with Header/Footer
│   ├── page.tsx          # Home page composition
│   ├── globals.css       # Tailwind + CSS variables
│   └── [routes]/         # 8 sub-pages (about, esport, etc.)
├── components/
│   ├── home/            # Hero, AboutSection, ProjectCarousel, VideoSection
│   ├── layout/          # Header, Footer
│   └── ui/              # Reusable UI (Counter)
└── lib/
    └── utils.ts          # cn() utility for Tailwind class merging
```
