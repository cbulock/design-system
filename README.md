# Quiet Design System

A personal design system for modern, refined interfaces — inspired by the quiet craft of Linear, Vercel, and Rauno Freiberg's work. Built for one person's use across personal projects.

## Sources

This system was created from scratch — no existing codebase, Figma, or brand to port from. Direction was defined by the user:

- **Aesthetic:** refined & quiet, Linear/Vercel/Rauno-adjacent, muted palette, tiny details
- **Type:** geometric sans only (Geist chosen)
- **Color:** cool grays + electric cobalt accent, light and dark both polished
- **Corners:** soft (12–16px)
- **Motion:** quick & crisp, 150ms ease-out
- **Target surface:** app dashboard (sidebar + content)

## Content Fundamentals

Copy in Quiet is written the way the UI looks: low-key, direct, respectful of the reader. No exclamation points. No marketing voice. No emoji.

- **Voice:** second person for instructions ("Delete this project?"), first-person plural for system statements that matter ("We saved your changes"). System can also be voiceless: "Changes saved."
- **Casing:** sentence case everywhere — buttons, headings, menu items, section labels. The only uppercase is the tracked eyebrow label (`.eyebrow`).
- **Tone:** matter-of-fact. Assume the reader is smart and busy. Short sentences. No filler.
- **Examples:**
  - ✅ "Changes saved" — not "Your changes have been saved successfully!"
  - ✅ "Delete project?" — not "Are you sure you want to delete this project?"
  - ✅ "7 items · updated 2h ago" — prefer mono numerics with middle dots over English
  - ✅ "Skip" / "Continue" / "Archive" — one word when one word works
- **Numbers:** always in Geist Mono (`var(--font-mono)`) — counters, versions, timestamps, stats. Uses the `zero` and `ss02` stylistic sets by default (see CSS).
- **Time:** relative when recent ("2h ago", "Yesterday"), absolute when older. Never "a little while ago."
- **Punctuation:** `·` middle dot for metadata joins; `→` for outbound links and CTAs; `—` em-dash for asides. No ellipses except in truncation.
- **Emoji:** none. Icons only (Lucide).

## Visual Foundations

**Colors.** A 13-stop cool gray scale (hue ≈ 240, very low chroma) carries almost all the weight. The accent is a saturated cobalt — `#3b6df6` at the primary stop — used for single elements per view (a CTA, an active nav item, a link) never as a wash. Semantic colors (emerald success, amber warning, red danger) appear only in state badges and messages. Both light and dark themes share identical token names via `data-theme` on `<body>`.

**Type.** Geist variable for everything; Geist Mono for numerics, code, version strings, and timestamps. The display uses negative letter-spacing (`-0.02em` at headings, `-0.04em` at display) — Geist needs it to sit right. Stylistic sets `ss01`, `ss03`, `cv11` are on by default. Body is 14px, lead is 17px, never smaller than 11px.

**Spacing.** 4px base grid. Most dense UI lives on `space-2 / space-3 / space-4` (8/12/16); card padding is `space-4` (16px); page padding is `space-6` (24px).

**Backgrounds.** Flat. No gradients (except the occasional brand avatar). No illustrations. No grain. Surfaces are differentiated by a single step in the gray scale — `--bg` vs. `--bg-subtle` vs. `--bg-muted` — and by hairline borders (`1px solid var(--border)`).

**Animation.** 150ms, `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out). Used on: hover color transitions, switch knob travel, sidebar collapse, menu open/close. Fast enough to feel instant, long enough to soften. No bounces. No parallax. No scroll-jacking.

**Hover states.** Surfaces lift by moving from `--bg` to `--bg-muted` (never by changing shadow). Buttons shift one step in their own palette (`--accent` → `--accent-hover`). Borders strengthen from `--border` → `--border-strong`.

**Press states.** No shrink transform. One more step of color (`--accent-press`). That's it.

**Borders.** Hairline (`1px`) everywhere structural. Two weights — `--border` (default) and `--border-strong` (emphasized / hover) — plus `--border-muted` for intra-card dividers that should be nearly invisible.

**Shadows.** Layered, low-opacity (`rgba(9,9,11, 0.04–0.16)`). Five elevations: `xs` (hairline lift), `sm` (resting card), `md` (hover), `lg` (popover), `xl` (modal). Dark theme shadows are pure black with higher opacity; in dark, shadows mostly communicate *depth*, not light.

**Inner highlight.** Primary buttons carry an `inset 0 1px 0 rgba(255,255,255,0.15)` to catch the light at their top edge — a small Linear/Rauno-ism that makes them feel lit from within.

**Transparency / blur.** Reserved for overlays (`--surface-overlay`: 85% with `backdrop-filter: blur(12px)` when you need it). Not used decoratively.

**Imagery.** No stock photography. When images appear, they should be warm, grainless, and either full-bleed or bounded by the same 12px radius as cards. Prefer monochrome or single-accent. No drop shadows on imagery.

**Corner radii.** `lg` (12px) is the default for cards and inputs. `sm` (6px) for menu items and tooltips. `full` (pill) only on avatars, status dots, progress bars, and the switch knob. Buttons use `md`/`lg`/`sm` by size.

**Cards.** `1px solid var(--border)` + `--shadow-sm` + `--radius-lg` + `var(--surface)`. On hover: border goes to `--border-strong`, shadow to `--shadow-md`. Nothing else.

**Layout rules.** Single fixed left sidebar (240px expanded, 56px collapsed). Top bar is 52px, always. Page content has 24px padding. Grids use 12px–16px gutters. Never wider than 1400px for reading content.

## Iconography

Quiet uses **Lucide** — a single, coherent outline icon set with 1.75 stroke weight, matching Geist's optical feel.

- **Distribution.** A hand-curated subset is baked into `ui_kits/app-dashboard/Icon.jsx` for offline use. For broader needs, load Lucide from CDN: `https://unpkg.com/lucide@latest` or use the SVG sprite.
- **Sizing.** 14px in dense inline contexts (table rows, chips), 16px as default (buttons, nav), 18–20px for headers and empty states. Color is `var(--fg-muted)` at rest, `var(--fg)` on hover, `var(--accent)` when active.
- **Stroke.** Always 1.75. Do not mix stroke weights.
- **Fills.** Avoid filled icons unless the icon is conveying a status (solid dot for "unread," filled checkmark for "verified"). Outline by default.
- **Unicode chars.** Allowed sparingly for glyphs Lucide doesn't cover: `⌘`, `⌥`, `⇧`, `⌫`, `→`, `·`. Always in `var(--font-mono)`.
- **Emoji.** Never.
- **SVG vs PNG.** Always SVG. Icons are currency; they must be crisp at any size.
- **Logo.** The `q` glyph + wordmark in `preview/brand-logo.html` is a placeholder. Replace with a real mark when identity is finalized.

## Index

```
colors_and_type.css         Core tokens, themes, semantic type
fonts/                      Geist + Geist Mono variable woff2
preview/                    Design System tab cards (type, color, spacing, components, brand)
ui_kits/
  app-dashboard/            Sidebar app shell with home / inbox / projects views
    Icon.jsx, Primitives.jsx, Sidebar.jsx, TopBar.jsx, Views.jsx
    index.html              Interactive demo — click nav, toggle light/dark
SKILL.md                    Agent-invocable skill file
README.md                   This file
```

## Known caveats

- **Fonts.** Geist is pulled from the official npm package under OFL-1.1. The variable font supports 100–900.
- **Logo.** Placeholder `q` glyph only. Swap in a real mark when ready.
- **Imagery.** No real imagery included — the system assumes you bring your own.
