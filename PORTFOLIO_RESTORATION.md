# APOGEE 2025 portfolio restoration

## Baseline and measured output

Original `main`: `bb896ef28963af8646b1fb0483086616da612ad2` (`Update README.md`). The baseline locked install/build completed before implementation. Its dependency audit reported 30 advisories: 1 critical, 16 high, 10 moderate and 3 low.

| Artifact measurement | Original | Restored |
| --- | ---: | ---: |
| Complete static output | 148,571,771 bytes | 24,220,708 bytes |
| JavaScript across application chunks | 2,838,170 bytes | 2,268,711 bytes |
| Application JavaScript compressed with gzip | 872,321 bytes | 697,402 bytes |
| Restored entry JavaScript | — | 226,166 bytes / 76,080 bytes gzip |

The deployable output is **83.7% smaller**, with 213 files and a largest file of 3,535,140 bytes. The restored JavaScript totals exclude the separately served local Draco decoder scripts. Entry size is reported separately because the original single eager application bundle and restored deferred routes are different loading strategies. These are artifact measurements, not browser performance scores.

## Preserved behavior and repaired demos

The original 3D city, steampunk visual language, camera transitions, landing navigation, historical event cards, about page, speakers, contact cards, sponsors, media partners and developer layouts remain available. An archive navigation bar also provides direct links, including repaired `/events` and `/about` routes. Unreleased/unknown routes retain the original coming-soon artwork with archive context.

Registration now uses `visitor@example.com`, editable sample details and local category/event/college options. The form retains its original validation/layout and displays a demo completion dialog. No account, email, payment, redirect token or real registration is created. Quantaculus retains the original panel design with five clearly identified sample questions, previous/next controls, five-minute timer, local scoring and a replay action. Results and answers live only in module/component memory; reloading clears them.

Removed historical API calls, OAuth providers and buttons, analytics initialization, token cookies/storage, real submission redirects, anti-inspection keyboard/context-menu handlers, forced homepage reloads and an unused counter API example. React escapes the local fixture strings; the demo introduces no raw HTML sink.

## Loading, artwork and typography

Routes, hidden city overlays and the desktop speaker scene load separately. Registration/developer pages no longer wait for all their artwork or portraits before showing content. WebGL/reduced-motion fallbacks expose the archived designs directly, and canvas pixel ratio is capped at 1.25. Fixed delayed scene callbacks, pointer timers, scroll listener cleanup, cursor cleanup and a Redux comparison typo affecting navigation.

Converted 137 raster images from 81,211,864 to 6,295,408 bytes using WebP with appropriate resolution limits. Recompressed embedded raster layers in 20 SVGs from 77,645,096 to 12,601,612 bytes while retaining their vectors/coordinate systems. Speaker movies are local MP4s with local posters; HTML playback is user-controlled, and desktop 3D clips activate only near the camera. Abandoned model/environment iterations are excluded from `dist` while remaining in source history.

All **seven original custom font binaries are unchanged byte-for-byte**: Birmingham, OldNewspaperTypes, TheClub, Redzein, Chalk, SteamPunk and Alegreya SC. Original family aliases remain in CSS. Playfair Display is locally served with its original family name, normal/italic styles, 400–900 variable weight axis and Latin/Latin Extended/Cyrillic/Vietnamese subsets. Artifika, Inter and Josefin Sans are local Fontsource faces replacing Google Fonts requests. Fonts use `font-display: swap`; the OTF format hint for TheClub is corrected. Exact hashes and face coverage are in `scripts/font-verification.json`. Legacy requests for synthesized weights on single-face decorative fonts retain their original behavior.

## Pages and security configuration

Pinned Wrangler `4.145.0`, Vite `7.3.6`, React-compatible R3F/Drei updates and the committed npm lockfile provide repeatable builds. `wrangler.jsonc` targets classic Pages project `dvm-portfolio-apogee-2025` and output `dist`. The deploy script selects Cloudflare account `e6ad8a6f22a88b57a02e176325692373` through the supported environment variable. Project creation, authentication, deployment and DNS are separate orchestration tasks; this restoration commit does not publish anything.

Pages provides native SPA fallback with no root `404.html`. The inherited catch-all `_redirects` rule was removed after current Wrangler rejected it as an infinite-loop rewrite. Local HTTP checks verify deep links return the application. Build preparation verifies file count/25 MiB limits and copies local Draco JS/WASM decoder assets; `useGLTF.setDecoderPath('/draco/')` selects them before the city’s preload imports execute. No decoding CDN is required.

`_headers` sets nosniff, a restrictive referrer policy, framing/permission controls, and CSP. Connections are restricted to same-origin and blob texture URLs; scripts are same-origin, with the scoped `wasm-unsafe-eval` permission for decoder compilation. Blob workers/textures are permitted. `style-src 'unsafe-inline'` is necessary for the existing JSX styles, GSAP transitions and react-select styling; JavaScript `unsafe-inline` and `unsafe-eval` are not allowed. Historical YouTube frames use the privacy-enhanced origin and are loaded only after interaction. Hashed `/assets/*` files receive immutable caching.

A validation-only GitHub workflow runs the locked install, tests/build and dependency audit. No deployment workflow existed in the upstream checkout.

## Verification and limits

Verified on 2026-10-01:

- `npm ci`: succeeded using the committed lock; zero dependency advisories.
- `npm run check`: all 3 local demo tests passed; production build succeeded and artifact limits passed.
- `npm audit --json`: zero critical/high/moderate/low advisories, including development dependencies.
- `git diff --check`: passed.
- Wrangler Pages preview: HTTP 200 for homepage, registration, quiz/result, events, developers, local Draco JS/WASM, original city GLB, converted contact image and original OTF font. Evidence: `scripts/http-smoke-verification.txt`.
- Reviewed source for remaining backend/API/auth-storage/unsafe HTML paths; the published application uses local demos and optional explicit historical external links.

The legacy ESLint configuration still reports hundreds of existing/generated-code style issues, chiefly React prop validation, unused historical helpers and Three JSX properties unknown to the DOM-oriented rule. It is not presented as passing. Vite reports large deferred Three/registration chunks; they no longer force every page to load the whole application. Deprecated-library warnings are distinct from the clean advisory audit.

Final browser checks for intended design, loaded fonts and main interactions are handled by the parent agent. Mobile UX/performance benchmarking was explicitly skipped at the user’s request. This report does not claim browser timings, universal absence of vulnerabilities, publication or custom-domain activation. Historical links and optional videos may change independently of this archive.
