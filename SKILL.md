---
name: cindor-design
description: Use this skill to generate well-branded interfaces and assets for Cindor — a terminal-leaning personal design system with warm grays, a burnt orange accent, Mona Sans, JetBrains Mono, and dense dashboard patterns. Contains tokens, type, fonts, Lucide-style icons, and an app-dashboard UI kit for production code or throwaway prototypes.
user-invocable: true
---

Read the `README.md` file within this skill and explore the other available files (`colors_and_type.css`, `preview/`, `ui_kits/`, `fonts/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out (the CSS file, fonts, icon components) and create static HTML files for the user to view. If working on production code, copy the tokens and read the rules in `README.md` to become an expert in designing with Cindor.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (surface, audience, tone, light/dark, density), and act as an expert designer who outputs HTML artifacts — or production code, depending on the need.

Core rules to internalize:
- Mona Sans for UI copy; JetBrains Mono for numerics, code, timestamps, versions, shortcuts.
- Sentence case everywhere. No emoji. No exclamation points. Relative time when recent.
- Burnt orange accent (`#c2410c`) used sparingly — one emphasis per view.
- 150ms ease-out motion (`cubic-bezier(0.16, 1, 0.3, 1)`). No bounces. No shrink on press.
- 4px controls, 6px cards, hairline borders, restrained shadows, flat backgrounds.
- Lucide icons at 1.75 stroke only. Sizes 14 / 16 / 18.
