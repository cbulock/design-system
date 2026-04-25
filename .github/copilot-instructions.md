# Copilot instructions

## Commands

- The repository has a `package.json` for distributing raw CSS and font assets, but there is still no build, test, or lint script configured.
- Validate visual changes by opening the static entry points directly:
  - `ui_kits\app-dashboard\index.html` for the interactive dashboard demo
  - `preview\*.html` for standalone token and component specimen pages
- A workspace Playwright MCP server is configured in `.vscode\mcp.json`.

## Architecture

- The split source files in `styles\fonts.css`, `styles\tokens.css`, and `styles\base.css` are the source of truth for the reusable system. `emberline.css` is the canonical packaged bundle, and `colors_and_type.css` is the compatibility wrapper used by the local preview pages and dashboard demo.
- The `preview\` pages are standalone HTML specimens. Each page imports `..\colors_and_type.css` and then adds only the local styles needed to show one slice of the system. `_base.html` is a shared snippet for card-style preview pages, but the previews are still independent static files rather than a generated docs site.
- `ui_kits\app-dashboard\index.html` is a self-contained prototype app. It links the shared CSS, loads React 18, ReactDOM, and Babel from CDNs, then loads `Icon.jsx`, `Primitives.jsx`, `Sidebar.jsx`, `TopBar.jsx`, and `Views.jsx` as `text/babel` scripts.
- The JSX files are not ES modules. They attach components to `window` (`window.Icon`, `window.Button`, `window.Sidebar`, etc.), and `index.html` wires them together inside a single `App()` function.
- Theme state is driven by `data-theme` on `document.documentElement`, with `emberline.theme` and `emberline.nav` persisted in `localStorage` by the dashboard demo.

## Key conventions

- Prefer changing shared tokens in `styles\tokens.css` and shared base rules in `styles\base.css` before editing page-local styles. Both the preview pages and the dashboard kit consume the same CSS variable names, so token changes propagate across the repo.
- For reusable assets, treat `styles\fonts.css`, `styles\tokens.css`, and `styles\base.css` as the source files, and keep `emberline.css` and `colors_and_type.css` aligned as aggregate entrypoints.
- Keep the prototype authoring style in `ui_kits\app-dashboard\`: inline style objects, no imports/exports, no bundler assumptions, and globals exposed through `window`.
- Use mono styling intentionally. Metadata, counters, versions, timestamps, shortcut hints, and many uppercase labels are consistently rendered with `var(--font-mono)` in both the preview pages and the JSX demo.
- Preserve the existing interaction language: terse copy, sentence case for normal UI text, and no emoji-driven UI chrome.
- Add dashboard icons in `ui_kits\app-dashboard\Icon.jsx` as Lucide-style path data, keeping the default stroke width at `1.75`.
- Keep sizing and motion aligned with the existing system: a 4px spacing grid, tight radii (mostly `4px` and `6px`), and fast `100ms` to `150ms` transitions using `cubic-bezier(0.2, 0, 0, 1)`.
