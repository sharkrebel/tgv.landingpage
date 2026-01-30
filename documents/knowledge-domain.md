# Tam Giang Capital - Domain Knowledge

## Business Domain

### Company Overview

**Tam Giang Capital (TGV Capital)** is a Vietnamese investment holding company operating a multi-industry ecosystem with four primary business verticals:

| Vertical | Brand | Focus | Revenue Model |
|----------|-------|-------|---------------|
| Services | Tam Giang Service | BHXH/BHYT insurance services | Stable cash flow ("Cash Cow") |
| Esports | accfco.com | FC Online gaming services | High-growth digital |
| Venture | TGV Venture | Financial investments | Capital appreciation |
| Manufacture | Tam Giang Food | High-tech agriculture, ESG | Sustainable value |

### Core Value Proposition

- **Tagline**: "Kiến Tạo Giá Trị - Vững Bước Tương Lai" (Building Value - Securing the Future)
- **Investment Thesis**: Diversified ecosystem combining stable income streams with high-growth opportunities
- **Target Audience**: Angel investors for strategic partnership

## Data Models

### Navigation Item

```typescript
interface NavItem {
  name: string;   // Display name
  href: string;   // Route path
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Venture', href: '/venture' },
  { name: 'Esport', href: '/esport' },
  { name: 'Service', href: '/service' },
  { name: 'Manufacture', href: '/manufacture' },
  { name: 'Join', href: '/join' },
];
```

### Project/Portfolio Item

```typescript
interface Project {
  title: string;       // Project name
  description: string; // Brief overview
  image: string;       // Image path (/images/...)
  link: string;        // External URL
  color: string;       // Gradient classes (from-X to-Y)
}
```

### Current Portfolio Projects

| Project | Domain | URL |
|---------|--------|-----|
| Dịch vụ Bảo Hiểm Xã Hội | BHXH consulting | dichvubhxh.vn |
| Cổng Dịch Vụ BHXH | BHXH portal | congdichvubhxh.vn |
| Shop acc FC Online | Esports | accfco.com |
| Tam Giang Food | Agriculture | tamgiangfood.com |
| BHYT Online | Health insurance | muabhyt.vn |

## Page Structure

### Routes

| Route | Purpose |
|-------|---------|
| `/` | Home page with Hero, About, Carousel, Video |
| `/about` | Company information |
| `/contact` | Contact form/information |
| `/esport` | Esports vertical details |
| `/join` | Investor application |
| `/manufacture` | Manufacturing vertical |
| `/service` | Services vertical |
| `/services` | Services listing (alternate) |
| `/venture` | Venture capital vertical |

## API Contracts

### Current State: No Backend APIs

The current implementation is a **static marketing site** with no backend API integration. All data is hardcoded in components.

### Potential Future APIs

If backend integration is added:

```typescript
// GET /api/projects
interface ProjectsResponse {
  projects: Project[];
}

// POST /api/contact
interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// POST /api/investor-application
interface InvestorApplication {
  name: string;
  email: string;
  investmentAmount?: number;
  interests: string[];
}
```

## Business Rules

1. **CTA Priority**: Primary CTA directs to `/join` (investor signup)
2. **Language**: Primary content in Vietnamese, UI labels mixed Vietnamese/English
3. **External Links**: Portfolio project links open in new tabs (`target="_blank"`)
4. **Carousel Timing**: Auto-advance every 5 seconds, looping enabled
5. **Scroll Behavior**: Header becomes opaque (white) after 20px scroll

## SEO & Metadata

```typescript
// Current metadata (layout.tsx)
{
  title: 'Tam Giang Capital | Hệ Sinh Thái Đa Ngành',
  description: 'Pioneering strategic investment and sustainable development in Vietnam.',
  icons: { icon: '/icon.png' },
  openGraph: { images: ['/opengraph-image.png'] }
}
```

## Assets

### Images

| Path | Usage |
|------|-------|
| `/icon.png` | Favicon (533KB) |
| `/opengraph-image.png` | Social sharing (450KB) |
| `/logo.png` | Header logo (19KB) |
| `/images/background-1.jpg` | Hero background |
| `/images/*.png, *.jpg, *.webp` | Project carousel images |
