# Cindor Design System

Cindor is a portable design system for terminal-leaning product interfaces: warm grays, a burnt orange accent, phosphor green for live states, sharp hairlines, and dense dashboard layouts. The repo now supports two modes at once: a packageable CSS/font surface for other projects, and the existing local preview pages plus browser-based dashboard demo for reference.

## Current direction

This repository currently implements the `v3` terminal/amber direction defined in `styles\tokens.css`.

- **Aesthetic:** terminal, utilitarian, low-noise, Teenage Engineering / Linear-terminal energy
- **Type:** Mona Sans for UI copy, JetBrains Mono for metadata, counters, timestamps, shortcuts, versions, and other utility text
- **Color:** warm neutrals, burnt orange accent, phosphor green for success/live states
- **Corners:** mostly sharp; `4px` controls and `6px` cards
- **Motion:** fast `100ms` to `150ms` transitions using `cubic-bezier(0.2, 0, 0, 1)`
- **Target surface:** app dashboard shell with sidebar, top bar, tables, cards, and inbox-style lists

## Install in another project

Once this repository is available as a dependency in another app, import either the bundled stylesheet or the individual layers.

```bash
npm install ../design-system
```

### Full bundle

Import the full Cindor surface when you want fonts, tokens, and base element styling together.

```js
import 'cindor-design-system/cindor.css';
```

### Layered imports

Import individual layers when you want to control how much global styling you take on.

```js
import 'cindor-design-system/styles/fonts.css';
import 'cindor-design-system/styles/tokens.css';
import 'cindor-design-system/styles/base.css';
```

- `styles/fonts.css` registers the bundled Mona Sans and JetBrains Mono font faces
- `styles/tokens.css` defines the color, spacing, type, radius, shadow, and theme variables
- `styles/base.css` applies the semantic typography, link, selection, box-sizing, and grid utility styles

Set the theme with `data-theme` on the root element:

```html
<html data-theme="dark">
```

or at runtime:

```js
document.documentElement.setAttribute('data-theme', 'dark');
```

## Working locally

There is no build, lint, or test script configured in this repository.

- Open `ui_kits\app-dashboard\index.html` directly in a browser to view the interactive dashboard demo.
- Open files in `preview\` directly in a browser to inspect tokens and component specimens.
- The dashboard demo uses React 18, ReactDOM, and Babel from CDNs, so it expects network access when loaded.

## Repository structure

```text
cindor.css                 Canonical bundled CSS entrypoint for consumers
colors_and_type.css        Compatibility wrapper used by the local previews and demo
styles/
  fonts.css                Font-face declarations
  tokens.css               Theme and design token variables
  base.css                 Semantic base styles and utilities
fonts/                      Local font assets used by the system
preview/                    Standalone HTML specimens for colors, type, spacing, components, and brand
ui_kits/
  app-dashboard/            Browser-loaded React prototype
    Icon.jsx                Lucide-style icon paths exposed on window
    Primitives.jsx          Shared controls like Button, Badge, Input, Switch, Avatar, Kbd
    Sidebar.jsx             Left navigation shell
    TopBar.jsx              Breadcrumbs, theme toggle, top actions
    Views.jsx               Home, Inbox, Projects, and supporting view components
    index.html              Demo entry point
SKILL.md                    Agent skill guidance
README.md                   This file
```

## How the system is wired

### Shared tokens

The reusable CSS surface is split into three source files and two aggregate entrypoints:

- `styles\fonts.css` for font-face declarations
- `styles\tokens.css` for scales, theme variables, and semantic tokens
- `styles\base.css` for semantic type, base element rules, and utilities
- `cindor.css` as the canonical bundle for consumers
- `colors_and_type.css` as the local compatibility wrapper for the preview pages and dashboard demo

Both the preview pages and the dashboard demo consume the same CSS variable names, so token edits still propagate across the repo.

### Preview pages

The files in `preview\` are standalone HTML pages. Each one imports `..\colors_and_type.css` and adds only the local styles needed to showcase a specific part of the system. They are documentation artifacts, not generated docs.

### Dashboard UI kit

`ui_kits\app-dashboard\index.html` is a self-contained browser prototype. It:

1. loads `..\..\colors_and_type.css`
2. pulls React 18, ReactDOM, and Babel from CDNs
3. loads the JSX files as `text/babel` scripts
4. composes them in a single `App()` function

The JSX files are intentionally simple browser scripts, not modules. Shared pieces are attached to `window` rather than imported/exported through a bundler.

Theme state and the active nav item are stored in `localStorage` as `cindor.theme` and `cindor.nav`.

## Content

Copy stays terse and matter-of-fact.

- sentence case for normal UI text
- uppercase mono labels for utility headers and section chrome
- no emoji
- compact metadata joins like `3 items · build passing`
- mono treatment for timestamps, counters, version strings, and keyboard shortcuts

## Visual foundations

- **Neutrals:** warm gray scale from `--gray-50` through `--gray-950`
- **Accent:** burnt orange with `--amber-500` as the primary accent stop
- **Success/live:** phosphor green, used sparingly
- **Typography:** compact scale centered around `13px` body text and `14px` UI labels
- **Spacing:** 4px grid with most dense UI at `8px`, `12px`, `16px`, and `24px`
- **Radii:** `4px` controls, `6px` cards, pills only where clearly functional
- **Borders:** hairline-first system; borders do more work than shadows
- **Shadows:** very restrained and mostly structural
- **Motion:** no bounce, no scale-on-press, quick state changes only

## Iconography

The dashboard demo uses a hand-curated Lucide-style icon subset in `ui_kits\app-dashboard\Icon.jsx`.

- stroke width stays at `1.75`
- default icon sizes are mostly `14px` and `16px`
- icons remain outline-first
- Unicode utility glyphs like `⌘`, `→`, and `·` are acceptable when they fit the mono/system language

## Fonts

The current shared CSS uses:

- `Mona Sans` from `fonts\MonaSans-Variable.woff2`
- `JetBrains Mono` from `fonts\JetBrainsMono-Variable.woff2`

Geist font assets are still present in `fonts\`, but they are not part of the packaged Cindor CSS surface.

## Playwright MCP

This workspace includes Playwright MCP configuration in `.vscode\mcp.json` so VS Code can expose Playwright tools to Copilot at the workspace level.

After opening the repo in VS Code:

1. approve the Playwright MCP server when VS Code prompts for trust
2. use Copilot chat with Playwright tools against the static preview pages or the dashboard demo

## Known caveats

- The dashboard demo depends on CDN-hosted React tooling.
- The logo remains a placeholder mark.
- There is no automated build, lint, or test script in the repo yet.
