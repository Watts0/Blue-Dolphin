# The Blue Dolphin Seafood Bar & Grill — Design Brainstorm

## Three Stylistic Approaches

### 1. Coastal Elegance
Classic upscale seafood restaurant aesthetic — deep navy, crisp white, and warm gold accents. Anchored in nautical heritage with a refined, modern twist. Probability: 0.07

### 2. Bold Waterfront Tavern
Rustic, energetic sports-bar-meets-seafood-shack. Dark wood textures, chalkboard-style typography, and a lively, high-contrast palette. Probability: 0.04

### 3. Modern Maryland Brasserie
Sleek, contemporary American dining — clean lines, editorial typography, and a sophisticated navy-and-gold palette that nods to Maryland's Chesapeake Bay heritage. Probability: 0.09

---

## Chosen Approach: Modern Maryland Brasserie

**Design Movement:** Contemporary American Brasserie — editorial, refined, and rooted in place.

**Core Principles:**
1. Navy blue as the dominant anchor color, white as the canvas, and amber/gold as the energizing accent.
2. Asymmetric section layouts that alternate between full-bleed imagery and structured text panels.
3. Generous whitespace with strong typographic hierarchy — headlines command attention, body text breathes.
4. Warm, inviting photography-forward design that puts food and atmosphere center stage.

**Color Philosophy:**
- **Navy** `#0A1F44` — authority, depth, and the Chesapeake Bay at dusk.
- **White** `#FFFFFF` — cleanliness, freshness, and the linen tablecloth.
- **Amber Gold** `#F5A623` — warmth, energy, and the glow of happy hour.
- **Light Navy Tint** `#EEF2F8` — soft background for alternating sections.

**Layout Paradigm:**
Offset-grid layout — hero spans full viewport with a diagonal text overlay. Sections alternate between left-heavy and right-heavy compositions. Navigation is a sticky top bar that transitions from transparent to solid navy on scroll.

**Signature Elements:**
1. A thin gold horizontal rule used as a section divider and decorative accent.
2. Wave-inspired SVG dividers between major sections (navy to white transitions).
3. Bold serif display font for section headings paired with a clean sans-serif for body copy.

**Interaction Philosophy:**
Subtle and purposeful — hover states on nav links use a gold underline slide-in. Cards lift with a soft shadow on hover. CTAs pulse gently to draw attention without being garish.

**Animation:**
- Hero text fades up on load (300ms, ease-out).
- Section content animates into view on scroll (Intersection Observer, staggered 80ms per element).
- Nav background transitions smoothly from transparent to navy/90 backdrop-blur on scroll (200ms).
- Button press: scale(0.97) at 160ms ease-out.

**Typography System:**
- Display / Headings: **Playfair Display** (serif, bold) — classic, authoritative, restaurant-quality.
- Body / UI: **Source Sans 3** (sans-serif, regular/medium) — clean, readable, modern.
- Accent labels: Source Sans 3 uppercase tracked — used for category labels and nav items.

**Brand Essence:**
Crofton's premier seafood destination — where Baltimore culinary talent meets neighborhood warmth. Adjectives: *welcoming*, *vibrant*, *crafted*.

**Brand Voice:**
Headlines are confident and inviting. CTAs are direct and warm. Microcopy is friendly, never corporate.
- Example headline: "Where Every Meal Feels Like a Celebration"
- Example CTA: "Reserve Your Table Tonight"
- Banned phrases: "Welcome to our website", "Get started today"

**Wordmark & Logo:**
A stylized dolphin silhouette leaping through a wave arc, rendered in white on navy or gold on navy. Clean, bold, memorable.

**Signature Brand Color:** Amber Gold `#F5A623`

---

## Style Decisions
- Use Playfair Display for all H1/H2 headings; Source Sans 3 for body and nav.
- Gold accent used sparingly: dividers, CTA buttons, hover states, and key highlights only.
- All section transitions use the wave SVG divider in the destination section's background color.
- Hero section: full-viewport with a dark overlay gradient and white text.
- Sticky nav: transparent over hero, transitions to `#0A1F44` with backdrop blur on scroll.
