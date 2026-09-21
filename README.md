# Streamintia

Next.js App Router project. Phases 1–3 established the architecture, global header/footer and homepage. Phase 4 implements About, Become Streamer, Become Agent, Apply and Contact. The remaining page sections are placeholders. Blog routes and their components/data remain removed at the user's request.

## Development and verification

- `npm install` and `npm run dev` for development.
- `npm run build` for a production build (requires Google font access).
- `npm run lint` for ESLint and `npm run format:check` for formatting.
- `npm run format` applies Prettier consistently across the project.
- `npm run test:ui` runs Playwright against a production server on port 3101 using installed Chrome. Run a production build first.
- `npm run start -- --port 3100`, then `node scripts/verify-routes.mjs` checks route status, unique metadata, preview indexing, application defaults and assets. Set `VERIFY_ORIGIN` to test another port.

## Routes

`/`, `/about`, `/services`, `/become-streamer`, `/become-agent`, `/platforms`, `/platforms/[slug]`, `/how-it-works`, `/why-streamintia`, `/success-stories`, `/contact`, `/apply`, `/privacy-policy`, `/terms-and-conditions`.

There are 17 route patterns and 20 concrete pages including four example platform detail pages. Unknown platform slugs and removed blog URLs return 404.

## Global header and footer

The root layout includes one Header and one Footer. Both compose server-rendered content; client components are limited to desktop navigation, disclosures, mobile navigation and a small scroll-state wrapper.

- Header, HeaderFrame, BrandLogo, DesktopNavigation, NavigationDropdown, HeaderCTA and MobileMenu form the header system.
- Footer, FooterCTA, FooterColumn and SocialLinks form the footer system.
- `src/config/navigation.ts` supplies desktop/mobile navigation, footer columns and legal links. Guides, FAQ and Support routes have been removed. Partners links to the existing platform directory.
- `src/config/site.ts` centralizes logo references, brand name, contact and social values, copyright and CTA copy.
- Desktop navigation starts at 1280px. Smaller widths use a native modal dialog with focus containment, Escape dismissal, close button, focus restoration and body scroll locking. Resizing to desktop closes the modal.
- Desktop disclosures support Enter/Space, normal Tab navigation, Escape, focus-out and outside-pointer dismissal. Active links use `aria-current`; active groups have a brand indicator.
- The header remains sticky, shifting from 84px to 76px after scrolling (76px to 68px on mobile). No scroll hiding or scroll-jacking.
- Footer includes a reusable opportunities CTA, five desktop columns, three tablet columns and two mobile link columns below the brand block.
- Animations use short CSS transitions and a subtle menu stagger. Reduced-motion disables them. No GSAP dependency is needed.

## Brand and design system

Space Grotesk headings and Inter body use `next/font/google`. Global tokens live in `src/styles/tokens.css`; shell-specific tokens and styles live in `src/styles/layout.css`.

Palette: midnight `#08082D`, secondary `#0D0D3F`, surfaces `#11114A` / `#17175A`, cyan `#12D9F4`, blue `#4A8CFF`, purple `#8B4DFF`, magenta `#D400C8`, pink `#F000B8`, white and muted blue-gray. Header/footer use restrained translucent surfaces, subtle cyan/purple ambient accents and a readable cyan/blue CTA.

Typography, spacing, radii, shadows, gradients, containers, durations and easing are centralized. Tailwind v4 uses CSS-first `@theme` configuration. Shared page breakpoints are 320 / 768 / 1024 / 1440px; navigation adds a dedicated 1280px switch.

## Assets and contact information

Official assets are used directly from `public/images/brand/` with `next/image`. The dark variant is the supplied horizontal white wordmark. It uses contain sizing without cropping or changing the artwork or aspect ratio. Only the main header logo uses priority loading.

Reserved image folders remain available for future page content. No stock imagery was added.

Social URLs and contact details remain null until supplied. Social placeholders are explicitly unavailable and do not link to invented accounts. Set verified URLs in site config to enable links. WhatsApp expects a complete HTTPS URL. Social icons use Simple Icons, with a text monogram for LinkedIn.

## Content and SEO

`src/config/pages.ts` holds page outlines; services, platforms, testimonials and FAQ remain data-driven. `src/lib/content.ts` is the platform repository boundary for a later CMS.

Platform entries are pending examples, not confirmed partnerships. Testimonials remain empty until verified and consented. Forms are previews and do not submit or store information.

Copy `.env.example` to `.env.local` and set the verified public origin before launch. `SITE_INDEXABLE` defaults false: metadata is noindex, robots disallows crawling and the sitemap is empty. Enable only after content and legal approval. Pending platform pages remain excluded from indexing/sitemap. Metadata covers unique titles/descriptions, canonical paths, Open Graph and Twitter.

## Phase 3 homepage

The server-rendered homepage follows the requested order: hero, network stats, introduction, streamer/agent paths, services, process, platforms, agency approach, testimonials, partnership CTA and final application CTA, followed by the existing footer.

Reusable components live in `src/components/home/`: HeroSection/HeroVisual, StatsStrip, IntroSection, OpportunityCard, ServiceCard/ServicesGrid, ProcessSteps, WhyChooseSection, TestimonialCard/TestimonialsSection, PartnershipCTA and FinalCTA. SectionIntro, SectionGlow and HomeIcon support the shared visual language. ButtonLink now supports primary, secondary, text and external variants while preserving its existing default.

`src/config/home.ts` supplies opportunities, process steps, benefits and clearly labelled testimonial slots. Stats are configurable in `site.stats`; null values display dashes until verified figures are supplied. `homeServices` in the existing service configuration supplies six curated summaries without replacing other pages' content. PlatformCard/Grid accept an opt-in featured presentation; other platform pages retain their existing presentation. TestimonialCard supports an approved quote, name, role and photo; empty data shows explicit client-content placeholders.

The homepage uses only the supplied public brand mark and wordmark. Its network composition is native CSS/SVG around the unmodified mark, not a stock image or a recreated logo. Platform logos and contributor photos are intentionally pending. No achievements, partnerships or testimonials are fabricated.

`src/styles/home.css` defines homepage spacing, typography, responsive layouts and decorative motifs around the existing palette. The 1280px content area uses fluid gutters. Mobile uses a stacked hero/opportunities, vertical process, adaptive services/platforms and stacked testimonials. Only small root-container integration rules are added: full-width homepage sections and suppression of the repeated footer CTA on the homepage. The footer columns and header are unchanged; other routes retain the original footer CTA.

`HomeMotion` is a client boundary receiving server-rendered children. It dynamically imports GSAP and ScrollTrigger, scopes all selectors and triggers to the homepage, and reverts them on navigation or motion-preference changes. Hero entrance precedes ambient drift. Stats, process, platforms, testimonials and selected section/CTA content reveal once on scroll. Ambient motion can be paused, stops offscreen/in a hidden tab, and is disabled for reduced motion. Static content is readable before JavaScript and when JavaScript is disabled. No numeric counter is fabricated.

The tests cover all ten requested widths (320, 375, 390, 414, 430, 768, 1024, 1280, 1440, 1920), content disclosure, CTA routing, animation cleanup, reduced motion, no-JavaScript content and navigation regressions. Screenshot outputs are written to ignored `test-results/`.

## Phase 4 inner pages and frontend forms

Completed routes: `/about`, `/become-streamer`, `/become-agent`, `/apply`, `/contact`. Each has unique metadata and a distinct content hierarchy within the existing visual system. About uses editorial storytelling and mission/vision panels; Streamer uses a creator visual and support journey; Agent uses a team/network composition; Apply is focused on role selection; Contact pairs contact channels with an enquiry form.

Reusable inner components: InnerPageShell, InnerPageHero, BrandVisual, FeatureGrid, EditorialRows, RequirementsSection, FAQPreview, PlatformPreview and ContactCard. They reuse existing SectionIntro, SectionGlow, ServicesGrid/ServiceCard, ProcessSteps, PlatformGrid/Card, Accordion, ButtonLink, Breadcrumbs and SocialLinks. FinalCTA now accepts title, description and CTA props without changing its default homepage output. ProcessSteps adapts to the supplied number of steps. ApplicationRoleSelector uses native radio inputs; form selection is distinct from the existing navigation-based OpportunityCard.

`src/config/inner-pages.ts` supplies benefits, requirements, mission/vision, processes, role choices and contact subjects. `src/config/opportunity-faq.ts` holds role-specific FAQ previews without replacing the general FAQ page. Platform and contact values still use existing configuration. No statistics, contact details, contracts or earning guarantees are invented.

`src/styles/inner.css` provides responsive inner-page compositions and form states on top of the reused homepage visual primitives. InnerPageHero supports breadcrumbs, actions, glow and optional image/abstract visual slots. Hero visuals use the supplied mark and CSS/SVG; there are no stock images or new brand assets. The existing footer CTA is suppressed only where a page already supplies FinalCTA; Apply retains the global footer CTA.

`InnerMotion` isolates GSAP/ScrollTrigger behavior: scoped hero entrance, selected section reveals, card stagger and process reveals. It cleans up on unmount and reverts on reduced-motion changes. Page components remain server components; only motion and form interaction run on the client. There is no new page-transition system.

ApplicationForm supports role selection, role-specific fields, URL-preselected role/platform, country, contact details, optional creator profile and message. ContactForm supports name, email, optional phone, subject and message, plus URL-preselected business/partnership enquiries. Both reuse Input/Select/Textarea, usePreviewForm, validation helpers and SuccessMessage. Errors are labelled and focus the first invalid field. Confirmations are explicitly preview-only, focus their heading and offer editing. No API, server action, request, database or persistent browser storage is used. Values remain only in temporary React state and reset on reload. Submit controls remain disabled until hydration to avoid unintended native submission without JavaScript.

Tests cover the five pages at 320, 375, 390, 414, 430, 768, 1024, 1280 and 1440px; role changes, hidden-field validation, query defaults, contact shortcuts, confirmations, focus behavior, no-JavaScript form safety and motion cleanup. Existing homepage/header/footer tests remain part of the regression suite.

## Packages and scope

Phase 2 added Prettier and Playwright as development dependencies, and Simple Icons for server-rendered social icons. Phase 3 added `gsap`; Phase 4 reuses it and adds no packages. No backend, CMS, database, authentication or payment integration was added.

Phase 4 stops at the five requested inner pages. The homepage and global header/footer design are preserved. Remaining routes await later instructions.
