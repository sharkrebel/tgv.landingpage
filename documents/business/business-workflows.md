# Business Workflows - Tam Giang Capital Landing Page

## 1. User Journey: Investor Acquisition Flow
The primary workflow for the landing page is to convert anonymous visitors into strategic partners/investors.

```mermaid
graph TD
    A[Visitor Lands on Hero Page] --> B{Initial Impression}
    B -->|High Engagement| C[Explore Ecosystem via Scroll/Menu]
    B -->|Bounces| D[Exit Site]
    
    C --> E[View Business Verticals]
    E --> F[Venture/Esport/Service/Manufacture]
    
    F --> G[Analyze Portfolio via Carousel]
    G --> H[Click 'Trở Thành Nhà Đầu Tư' / Join]
    
    H --> I[Land on Join Page]
    I --> J[Contact/Application Submission]
    J --> K[Lead Created in Backend/Registry]
```

---

## 2. Business Process: Ecosystem Referral Flow
A key function of the site is to route traffic to the operational sub-brands.

```mermaid
graph LR
    SubBrand[Potential Customer] --> Home[TGV Capital Home]
    Home --> Carousel[Project Carousel Section]
    Carousel --> Click[Project Link Click]
    Click --> External[External Domain: muabhyt.vn / accfco.com]
    External --> Transaction[Business Unit Conversion]
```

---

## 3. Operations: Content Management Workflow
(Future State)

1. **Information Update**: New project acquired by the group.
2. **Design Addition**: Marketing team provides brand assets and gradient themes.
3. **Implementation**: Developer adds a new entry to the `projects` object in `ProjectCarousel.tsx`.
4. **Verification**: Verify external link and responsive display.
5. **Deployment**: CI/CD push to live production site.

---

## 4. Stakeholder Communication Logic
- **Header Dynamics**: 
    - At top (Scroll=0): Implies "Ecosystem Overview" via transparency and hero focus.
    - Scrolled (>20px): Implies "Active Navigation" via solid background and clear UI visibility.
- **CTA Localization**: Use of Vietnamese for emotional resonance ("Kiến Tạo Giá Trị") combined with English professional terms ("Venture", "Capital").
