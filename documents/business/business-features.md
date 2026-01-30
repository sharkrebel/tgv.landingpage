# Feature Specifications - Tam Giang Capital Landing Page

## 1. Feature Map
| Feature | Importance | Complexity | Status |
|---------|------------|------------|--------|
| Interactive Hero | High | Medium | Implemented |
| Ecosystem Showcase | High | Medium | Implemented |
| Multi-Route Navigation | Medium | Low | Implemented |
| Venture Landing Page | Medium | Low | Implemented |
| Portfolio Carousel | High | Medium | Implemented |

---

## 2. Detailed Specifications

### 2.1 Interactive Hero Section
- **Description**: A full-width entry section featuring "Tam Giang Capital" branding.
- **Behavior**:
    - Interactive particle background using `react-tsparticles`.
    - Particles respond to mouse hover (grab/push).
    - Animated typography for the value proposition using `framer-motion`.
- **CTA**: Direct link to `/join`.

### 2.2 Portfolio Success Carousel
- **Description**: An auto-scrolling carousel showcasing sub-brands and projects.
- **Components**: Uses `embla-carousel`.
- **Items**:
    - **Tam Giang Service**: Social insurance/BHYT focus.
    - **AccFC Online**: Esports gaming focus.
    - **Tam Giang Food**: Sustainable agriculture focus.
- **Interactivity**: Overlays with project descriptions and external links (`_blank`).

### 2.3 Ecosystem Navigation Hub
- **Description**: A scroll-aware sticky header with transparent-to-opaque transition.
- **Routes**:
    - **Venture**: Financial and capital growth strategies.
    - **Esport**: Digital entertainment and platform services.
    - **Service**: Social and health insurance automation.
    - **Manufacture**: Sustainable food production and high-tech farming.
- **Mobile Menu**: Full-screen slide-down menu for handheld devices.

### 2.4 About Section (Strategic Vision)
- **Description**: A section detailing the company's "Cash Cow vs Growth" strategy.
- **Visuals**: Animated cards representing different vertical strengths.
- **Content**: Explicit mention of ESG (Environmental, Social, and Governance) commitment in the Manufacture vertical.

---

## 3. Future Feature Roadmap
1. **Interactive Timeline**: A historical view of the Group's growth from inception.
2. **Investor Dashboard**: A secure portal for partners to view portfolio performance metrics.
3. **Multi-Language Support**: Dedicated English/Vietnamese toggle for international stakeholders.
4. **CRM Integration**: Automated lead capture from the Join/Contact forms into a backend system.
