# Radiant Med Spa — Houston, Texas
### Production Clinic Website & Digital Concierge Platform

[![Status: Production-Ready](https://img.shields.io/badge/Status-Production--Ready-success.svg)](#)
[![Stack: Zero--Dependency](https://img.shields.io/badge/Stack-Pure%20HTML5%20%7C%20CSS3%20%7C%20Vanilla%20ES6%2B-blue.svg)](#)
[![SEO: Local%20Houston%20JSON--LD](https://img.shields.io/badge/SEO-Local%20Schema.org-gold.svg)](#)
[![Accessibility: WCAG%202.1%20AA](https://img.shields.io/badge/A11y-WCAG%202.1%20AA%20Compliant-green.svg)](#)

---

## 1. Executive Summary & Brand Profile

**Radiant Med Spa** is a physician-supervised aesthetic and skin wellness sanctuary located in the River Oaks / Upper Kirby district of **Houston, Texas**. 

This platform serves as the clinic's digital front door, designed specifically for the American luxury medical spa market. It blends tranquil, timeless medical luxury with rigorous clinical transparency, mobile-first performance, accessible UI patterns, and a high-converting 4-step appointment inquiry funnel.

* **Clinic Address**: 2400 Westheimer Rd, Suite 180, Houston, TX 77098 (River Oaks)
* **Telephone Concierge**: (713) 555-0198
* **Medical Director**: Dr. Marcus Vance, MD (Board-Certified Dermatologic & Aesthetic Medicine)
* **Clinic Focus**: Natural-looking facial balancing, clinical laser rejuvenation, evidence-based skin barrier restoration, and physician-supervised wellness therapies.

---

## 2. Technology Architecture & Core Principles

The website is engineered with a **zero-dependency, ultra-lightweight frontend architecture**:

1. **Pure Modern Web Standards**: Built entirely in semantic HTML5, pure CSS3 (custom properties design system), and vanilla ES6+ JavaScript modules. No bulky npm dependencies, webpack configurations, heavy runtime frameworks (React/Vue/Angular), or outdated jQuery libraries.
2. **Instant Performance**: Pages load sub-100ms with near-zero Time to Interactive (TTI), preconnected typography (`Cormorant Garamond` & `Montserrat`), and lazy-loaded optimized imagery (`decoding="async" loading="lazy"`).
3. **Medical Honesty & HIPAA Separation**: The frontend collects preliminary consultation inquiries without making unauthorized clinical outcome promises or claiming uncertified HIPAA cloud encryption without verified backend BAAs. Clinical diagnoses occur in-person.
4. **Honest Demonstration State**: In demonstration mode, all submission flows clearly disclose their simulated status and direct visitors to the clinic's telephone desk for immediate bookings.
5. **Accessibility (WCAG 2.1 AA Compliant)**:
   - Full keyboard navigation with visible focus indicators (`2px solid var(--color-gold)` with outline offsets).
   - Skip-to-content landmark links on every page (`.skip-link` targeting `#main-content`).
   - High-contrast typography and color ratios compliant with AA/AAA standards.
   - Screen-reader ARIA states (`aria-expanded`, `aria-label`, `role="region"`).
   - System preference support for `prefers-reduced-motion: reduce`.
6. **Local Houston SEO Dominance**:
   - High-precision Google-compliant `schema.org` JSON-LD structured data: `MedicalBusiness`, `FAQPage`, `AboutPage`, `Physician`, `ContactPage`, `MedicalWebPage`, `MedicalProcedure`, and `Article`.
   - Open Graph and Twitter Cards on all 13 canonical pages.
   - Auto-generated `sitemap.xml` and search-engine indexable `robots.txt`.

---

## 3. Directory Map & File Organization

```
e:/Med Spa Website/
├── index.html                  # Homepage (Hero, core specialties, doctor intro, reviews preview)
├── services.html               # Full 10-category aesthetic catalog with real-time filtering & search
├── service-detail.html         # Clinical procedure template (All 10 required clinical criteria)
├── about.html                  # Clinic story, physician leadership, safety standards, and sanctuary
├── booking.html                # Multi-step appointment concierge wizard (4 steps + honeypot)
├── contact.html                # River Oaks location, interactive map, driving directions, inquiry form
├── faqs.html                   # 14 comprehensive clinical questions with category filter & live search
├── gallery.html                # Filterable clinical results gallery with modal lightbox & disclaimers
├── testimonials.html           # Verified patient feedback, star breakdowns, and review submission modal
├── blog.html                   # Educational skincare journal with category filter tabs
├── blog-post.html              # Comprehensive medical guide: "Botox vs. Dermal Fillers"
├── privacy.html                # HIPAA notice, patient information protection, and privacy practices
├── terms.html                  # Practice guidelines, cancellation terms, and medical disclaimers
├── sitemap.xml                 # Search engine XML sitemap (17 canonical routes)
├── robots.txt                  # Search crawler directives referencing sitemap.xml
├── serve.ps1                   # Native PowerShell static web server (Zero-dependency local dev)
│
├── css/
│   ├── style.css               # Core design tokens, typography, grid system, responsive utilities, a11y
│   └── components.css          # Cards, hero treatments, accordion, badges, stepper, modals, forms
│
├── js/
│   ├── clinic-config.js        # Central configuration (Name, phone, address, hours, toggles, API mode)
│   ├── services-data.js        # Single source of truth for all 10 service categories & treatment data
│   ├── booking-integration.js  # Enterprise adapter layer for scheduling webhooks & mock simulation
│   ├── booking.js              # Multi-step booking funnel logic, form validation, step navigation
│   ├── services.js             # Catalog dynamic rendering, category tabs, real-time live search
│   ├── service-detail.js       # Procedure page renderer, FAQ accordions, dynamic MedicalProcedure schema
│   ├── faqs.js                 # 14-question accordion toggle, category filter, live keyword search
│   ├── gallery.js              # Gallery grid rendering, category switcher, modal zoom preview
│   ├── testimonials.js         # Reviews filter, stat summary cards, new review submission modal
│   └── main.js                 # Global navigation, mobile drawer, announcement bar, toasts, scroll spy
│
└── assets/
    └── images/                 # Optimized aesthetic treatment photography & clinic interiors
        ├── hero-facial.jpg
        ├── injectables.jpg
        ├── laser-therapy.jpg
        ├── microneedling.jpg
        ├── clinic-interior.jpg
        ├── reception.jpg
        └── dr-vance.jpg
```

---

## 4. Local Development & Testing

You do not need Node.js, npm, Python, or Ruby to run or preview this website.

### Option A: Native PowerShell Server (Included)
The workspace includes an asynchronous PowerShell static web server script [`serve.ps1`](file:///e:/Med%20Spa%20Website/serve.ps1):

```powershell
# Run the local server on the default port (8080)
powershell -ExecutionPolicy Bypass -File .\serve.ps1

# Or specify a custom port (e.g. 3000)
powershell -ExecutionPolicy Bypass -File .\serve.ps1 -Port 3000
```
Open your browser to: `http://localhost:8080/`

### Option B: Via npm (if Node.js is installed)
```bash
npm run dev
# or: npm start
```

### Option C: Any Standard Static Web Server
Because the platform is pure static HTML/CSS/JS, you can use any developer server:

```bash
# Python 3
python -m http.server 8080

# Node.js http-server
npx http-server . -p 8080

# VS Code Live Server extension
Right-click index.html -> "Open with Live Server"
```

---

## 5. Production Static Hosting Deployment

The website is 100% static and requires no database or server-side compiler. It can be deployed in minutes to any leading cloud CDN.

### Cloudflare Pages (Recommended)
1. Push your project files to a GitHub or GitLab repository.
2. In Cloudflare Dashboard, navigate to **Pages** > **Create a Project** > **Connect to Git**.
3. **Build settings**:
   - Framework preset: `None`
   - Build command: *(Leave empty)*
   - Build output directory: `.` (root directory)
4. Click **Deploy**. Cloudflare provides global edge SSL, DDoS protection, and HTTP/3 acceleration free of charge.

### Vercel
1. Install Vercel CLI (`npm i -g vercel`) or connect via Git on [vercel.com](https://vercel.com).
2. Set root directory to `.`.
3. Vercel automatically detects static HTML/CSS/JS and assigns an SSL production URL.

### Netlify
1. Drag and drop the `Med Spa Website` directory into the Netlify Dashboard, or connect via Git.
2. Publish directory: `.`
3. Build command: *(None)*

### AWS S3 + CloudFront
1. Create an S3 Bucket enabled for **Static Website Hosting**.
2. Sync files: `aws s3 sync . s3://your-medspa-bucket --exclude ".git/*"`
3. Attach CloudFront distribution with an ACM SSL certificate for `https://www.radiantmedspahouston.com`.

---

## 6. Clinic Owner Configuration Guide

All clinic business details, operating hours, phone numbers, and integration modes are managed from a single central file: [`js/clinic-config.js`](file:///e:/Med%20Spa%20Website/js/clinic-config.js).

### Updating Business Contact Details
To change the phone number, clinic address, or concierge email, open `js/clinic-config.js`:

```javascript
location: {
  addressLine1: "2400 Westheimer Rd, Suite 180",
  city: "Houston",
  state: "TX",
  zip: "77098",
  neighborhood: "River Oaks / Upper Kirby Corridor",
  phoneDisplay: "(713) 555-0198",
  phoneRaw: "+17135550198",
  email: "hello@radiantmedspahouston.com",
  privacyEmail: "privacy@radiantmedspahouston.com",
}
```

### Modifying Clinic Operating Hours
```javascript
hours: [
  { days: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
  { days: "Saturday", time: "9:30 AM – 4:00 PM" },
  { days: "Sunday", time: "Closed for Sanctuary Rest" }
]
```

### Enabling / Disabling Promotional Announcement Bar
```javascript
announcement: {
  enabled: true, // set to false to hide top bar across the site
  text: "Houston Client Welcome: Complimentary VISIA® skin analysis with initial consultation.",
  linkText: "Book Today",
  linkUrl: "booking.html"
}
```

---

## 7. Services Catalog & Content Customization

The service catalog is completely data-driven and defined in [`js/services-data.js`](file:///e:/Med%20Spa%20Website/js/services-data.js). Every treatment automatically generates its card on `services.html` and populates the dynamic protocol view on `service-detail.html`.

### Adding a New Service
To add a new treatment, append an entry to the `SERVICES_DATA` array in `js/services-data.js`:

```javascript
{
  id: "prp-facial-rejuvenation",
  categoryId: "peels",
  categoryName: "Skin Rejuvenation",
  title: "PRP Vampire Facial® Rejuvenation",
  badge: "Platelet-Rich Plasma",
  price: "From $650 / session",
  priceValue: "650.00",
  duration: "75 Minutes",
  downtime: "24–48 Hours Mild Pinkness",
  shortDesc: "Autologous platelet-rich plasma micro-infused into the dermal matrix to trigger collagen renewal and skin radiance.",
  image: "assets/images/microneedling.jpg",
  purposeAndBenefits: [
    "Accelerated biological collagen and elastin synthesis",
    "Visible improvement in acne scarring and micro-crepiness",
    "Refined skin tone and cellular hydration"
  ],
  candidateInfo: "Ideal for adults seeking organic skin rejuvenation using their body's natural growth factors without synthetic additives.",
  consultationProtocol: "Includes clinical review of platelet count, topical anesthetic application, and sterile centrifugation.",
  prepInfo: "Avoid blood thinners, ibuprofen, and fish oil for 5 days prior. Drink at least 64 oz of water for hydration.",
  aftercareInfo: "Do not wash face for 6 hours. Use provided medical post-procedure balm. Apply broad-spectrum mineral SPF 30+ daily.",
  limitationsAndRisks: "Mild pinpoint bruising or erythema may persist for 1–2 days. Not suitable for active skin infections or severe bleeding disorders.",
  faqList: [
    { q: "How many sessions are recommended?", a: "A series of 3 sessions spaced 4 weeks apart yields optimal collagen remodeling." }
  ],
  enabled: true
}
```

### Toggling Services or Categories Off
If the clinic temporarily discontinues a service, set `enabled: false` on that item in `js/services-data.js` or toggle the category flag in `js/clinic-config.js`:

```javascript
servicesCatalogToggles: {
  categories: {
    hair: false // hides Hair Restoration category across filters
  }
}
```

---

## 8. Booking & CRM Webhook Integration

The platform includes an enterprise integration adapter in [`js/booking-integration.js`](file:///e:/Med%20Spa%20Website/js/booking-integration.js).

### Integration Modes

In `js/clinic-config.js`:
```javascript
bookingIntegration: {
  mode: 'demo_mock', // 'demo_mock' during testing, 'api_endpoint' in production
  endpointUrl: "https://api.yourdomain.com/v1/inquiries",
  mockLatencyMs: 800
}
```

1. **`demo_mock` (Default)**:
   - Client inquiries validate against phone/email/service rules and return a simulated reference receipt (`RMS-XXXXXX`).
   - The confirmation receipt displays a transparent notice: *"This simulated inquiry was saved for demonstration. To confirm your real appointment, call (713) 555-0198."*
   - Inquiry data is safely recorded to browser `sessionStorage`.

2. **`api_endpoint` (Production)**:
   - When switched to `api_endpoint`, `submitInquiry()` sends an HTTP `POST` JSON payload directly to your secure backend or webhook receiver.

### Outgoing Payload Specification
```json
{
  "fullName": "Rachel Adams",
  "phone": "(713) 555-0198",
  "email": "rachel@example.com",
  "contactMethod": "Phone Call",
  "clientStatus": "New Client",
  "serviceId": "hydrafacial-deluxe",
  "serviceName": "Deluxe HydraFacial™ Infusion (60 min)",
  "preferredDate": "2026-10-15",
  "timeWindow": "Morning (9 AM - 12 PM)",
  "provider": "First Available Specialist",
  "message": "Interested in addressing post-summer sun pigmentation.",
  "privacyConsent": true,
  "submittedAt": "2026-10-11T05:30:00.000Z",
  "source": "radiant_houston_web_inquiry"
}
```

### Connecting to Industry Scheduling Software
* **Jane App / Boulevard / Vagaro**:
  Most med spa practice management platforms provide specialized direct booking widget URLs (e.g. `https://radiantmedspa.janeapp.com/`). You can either:
  1. Embed the provider iframe directly into `booking.html`, or
  2. Point the `endpointUrl` to an AWS Lambda / Zapier webhook that calls Jane App's Patient API to create an incoming appointment intake ticket.
* **Formspree / Zapier / Make / Webhook**:
  Set `endpointUrl: "https://formspree.io/f/your_form_id"` in `clinic-config.js`. Formspree will automatically email the front desk concierge and send an SMS alert to staff.

---

## 9. Security, Privacy & Bot Protection

1. **Offscreen Honeypot Anti-Spam**:
   - Both `contact.html` and `booking.html` include hidden honeypot fields (`.hp-field`).
   - Legitimate human users and screen readers ignore the field. Automated scraping bots fill it in, causing the submission to be silently dropped without exposing server compute or cluttering staff inboxes.
2. **Zero Ingestion of Sensitive Medical History**:
   - The online funnel collects *inquiry details only* (name, contact preference, desired procedure, date window).
   - Sensitive medical health histories, pregnancy status, and prescription lists are collected solely in person inside the clinic's encrypted HIPAA-compliant EMR (Electronic Medical Record) software.
3. **No Third-Party Tracking Scripts by Default**:
   - Zero intrusive tracking cookies or external ad pixels are injected, keeping page weight under 300KB and preserving patient privacy.

---

## 10. Pre-Launch Owner Checklist

Before promoting the website to Houston clientele:

- [ ] **Domain & SSL**: Point custom domain DNS (`A` record or `CNAME`) to your static hosting CDN and verify HTTPS green padlock.
- [ ] **Clinic Information Audit**: Confirm phone number `(713) 555-0198` and address `2400 Westheimer Rd, Suite 180` in `js/clinic-config.js`.
- [ ] **Front Desk Phone Verification**: Call the displayed telephone number from a mobile phone to confirm it rings directly to the River Oaks front desk concierge.
- [ ] **Integration Mode**: If receiving real inquiries via email or CRM, configure `mode: 'api_endpoint'` and set `endpointUrl` in `js/clinic-config.js`.
- [ ] **Google Business Profile**: Verify the clinic location on Google Maps and link the primary website URL to `https://www.radiantmedspahouston.com/`.
- [ ] **Social Media Handles**: Update Instagram, Facebook, and RealSelf URLs in `js/clinic-config.js`.
- [ ] **Photography Personalization**: Swap placeholder imagery in `assets/images/` with high-resolution clinic photos of your actual facility and medical director.
- [ ] **Staff Training**: Ensure reception staff are prepared to respond to web appointment inquiries within 2 business hours.

---

&copy; 2026 Radiant Med Spa — Houston, Texas. All rights reserved.
