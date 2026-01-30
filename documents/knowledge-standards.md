# Tam Giang Capital - Development Standards

## Code Style

### TypeScript

- **Strict Mode**: Enabled in `tsconfig.json`
- **Target**: ES2017
- **Module Resolution**: Bundler
- **JSX**: react-jsx (no React import needed)

### Component Patterns

```typescript
// ✅ Recommended: Named export function
export function ComponentName() {
  return <div>...</div>;
}

// ❌ Avoid: Default export with arrow function
export default () => <div>...</div>;
```

### File Structure

```typescript
// Order of imports
'use client'; // 1. Directive (if needed)

import React from 'react';           // 2. React
import { useCallback } from 'react'; // 3. React hooks
import Image from 'next/image';      // 4. Next.js
import Link from 'next/link';        // 5. Next.js routing
import { motion } from 'framer-motion'; // 6. External libs
import { cn } from '@/lib/utils';    // 7. Internal utilities
import { Header } from '@/components/...'; // 8. Components
```

## Naming Conventions

### Files & Folders

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Header.tsx`, `AboutSection.tsx` |
| Pages | lowercase | `page.tsx` |
| Routes | kebab-case folders | `src/app/about/` |
| Utilities | camelCase | `utils.ts` |
| CSS | lowercase | `globals.css` |

### Code

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `ProjectCarousel` |
| Functions | camelCase | `handleScroll` |
| Variables | camelCase | `isScrolled`, `navItems` |
| Constants | camelCase (arrays/objects) | `projects`, `navItems` |
| CSS Classes | Tailwind utilities | `className="flex items-center"` |
| CSS Variables | kebab-case | `--font-inter` |

### Props

```typescript
// ✅ Destructure props
export function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

// Type definitions
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}
```

## Styling Guidelines

### Tailwind CSS v4

```typescript
// ✅ Use cn() for conditional classes
className={cn(
  'base-class',
  isActive && 'active-class',
  variant === 'primary' && 'primary-class'
)}

// ✅ Use Tailwind utilities directly
className="flex items-center justify-between px-4 py-2"

// ❌ Avoid inline styles except for dynamic values
style={{ backgroundImage: `url(${image})` }} // OK for dynamic
```

### CSS Variables

Global theme in `globals.css`:
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

### Tailwind Theme (v4 syntax)

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
}
```

## Animation Guidelines

### Framer Motion

```typescript
// Scroll-triggered animations
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8 }}
>

// Hover animations
<motion.div whileHover={{ x: 10 }}>
```

### Transition Classes

```typescript
// Use Tailwind transitions
className="transition-all duration-300"
className="transition-colors hover:text-emerald-500"
className="transform hover:scale-105"
```

## Component Guidelines

### Client Components

Required `'use client'` when using:
- `useState`, `useEffect`, hooks
- Event handlers (`onClick`, etc.)
- Browser APIs (`window`, `document`)
- Animation libraries (Framer Motion)

### Server Components

Prefer server components for:
- Static content
- Metadata
- Data fetching (future)

## Commit Format

Use Conventional Commits:

```
<type>(<scope>): <description>

[optional body]
```

### Types

| Type | Purpose |
|------|---------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting, no code change |
| `refactor` | Code restructure |
| `perf` | Performance improvement |
| `test` | Testing |
| `chore` | Maintenance |

### Examples

```
feat(hero): add particle background effect
fix(header): correct scroll detection threshold
docs: update README with setup instructions
style(carousel): adjust card spacing
```

## Testing Standards

### Current State

No automated tests configured. Recommended additions:

```bash
# Install testing dependencies
npm install -D @testing-library/react @testing-library/jest-dom vitest
```

### Recommended Test Structure

```
src/
├── __tests__/           # Integration tests
├── components/
│   └── __tests__/       # Component unit tests
```

## PR Guidelines

1. **Single Responsibility**: One feature/fix per PR
2. **Description**: Explain what and why
3. **Screenshots**: Include for UI changes
4. **Testing**: Manual testing steps documented
5. **Review**: Self-review before requesting

## ESLint Configuration

Project uses `eslint-config-next` (v16.1.6):
- React best practices
- Next.js specific rules
- TypeScript type checking

Run linting:
```bash
npm run lint
```

## Performance Guidelines

1. **Images**: Use Next.js `Image` component with `fill` or explicit dimensions
2. **Fonts**: Load via `next/font` (already configured)
3. **Bundle**: Code split by route (automatic with App Router)
4. **Animations**: Use `will-change` sparingly, prefer CSS transforms
