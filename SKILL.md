---
name: quiet-design
description: Use this skill to generate well-branded interfaces and assets for Quiet — a refined, modern personal design system inspired by Linear/Vercel/Rauno (cool grays, cobalt accent, Geist). Contains tokens, type, fonts, Lucide icons, and an app-dashboard UI kit for production code or throwaway prototypes.
user-invocable: true
---

Read the `README.md` file within this skill and explore the other available files (`colors_and_type.css`, `preview/`, `ui_kits/`, `fonts/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out (the CSS file, fonts, icon components) and create static HTML files for the user to view. If working on production code, copy the tokens and read the rules in `README.md` to become an expert in designing with Quiet.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (surface, audience, tone, light/dark, density), and act as an expert designer who outputs HTML artifacts — or production code, depending on the need.

Core rules to internalize:
- Geist (variable) for all text; Geist Mono for numerics, code, timestamps, versions.
- Sentence case everywhere. No emoji. No exclamation points. Relative time when recent.
- Accent color (`#3b6df6`) used sparingly — one emphasis per view.
- 150ms ease-out motion (`cubic-bezier(0.16, 1, 0.3, 1)`). No bounces. No shrink on press.
- 12px default card radius; hairline borders; layered low-opacity shadows; flat backgrounds.
- Lucide icons at 1.75 stroke only. Sizes 14 / 16 / 18.
