# APOGEE 2025 verification — 2026-10-01

The original festival presentation is restored without an added archive banner or sample registration/quiz flow. Register controls in the landing navbar and mechanical menu open a native modal labelled “Registration is closed for this edition”. The dialog supports Escape, a Close button, backdrop dismissal, native focus trapping, scroll locking, and returning focus to its trigger. The direct `/registration` route opens the same dialog over the original artwork. Quantaculus retains its original background and typography with the edition marked as ended; old result links redirect there.

WebGL-capable mobile and desktop devices retain the original city and camera animations. Without a canvas, the original clouds, logo, countdown, social artwork, mechanical menu, and native-font navigation remain available, without device-mode copy. Reduced motion skips the city introduction instead of replacing the home design. All original custom font binaries match `scripts/font-verification.json`. The city model whitelist still includes ContactUsBoard and train, and the local Draco decoder remains in the output.

Sponsor/media content no longer waits for every logo to download. Secondary logos load as they enter the scroll area. Hidden canvases stop rendering, hidden 3D speaker clips pause, camera-vector objects are reused, and proximity checks run at most ten times per second. Scroll/drag/WebGL listeners and menu GSAP animations clean up on unmount. Native links prefetch their route on focus or pointer intent; city boards begin loading content during the camera transition. The artificial one-second delay before the original 5.5-second city introduction is removed. Hashed `/assets/*` files use immutable caching and HTML revalidates.

| Production artifact | Before (`4af6250`) | After |
| --- | ---: | ---: |
| Static output bytes | 25,574,264 | 24,886,804 |
| Application JavaScript bytes | 2,268,711 | 1,723,301 |
| Application JavaScript gzip bytes | 701,974 | 554,505 |
| Entry JavaScript gzip bytes | 76,201 | 76,509 |
| Output files | 215 | 211 |

The JavaScript gzip total is 21.0% smaller. The entry increases by 308 gzip bytes to provide immediate closed-registration feedback and shared navigation. Both measurements use the committed lockfiles and gzip at the default level. Local Draco scripts are excluded from application-chunk totals. These are artifact metrics, not browser timings.

Verified:

- Locked `npm ci` and `npm run check` succeed; all three tests pass.
- `npm audit --json` reports zero advisories, including development dependencies.
- Production output contains 211 files, every asset is below 25 MiB, and the largest file is 3,535,140 bytes.
- Verified the emitted output has no simulated registration/quiz strings and retains city models plus the local Draco JavaScript/WASM assets.
- `git diff --check` passes.
- Original decorative font hashes match the previously verified original binaries.

The legacy ESLint configuration reports 615 errors and 12 warnings, largely generated Three JSX properties, prop validation, and historical unused helpers. It is not reported as passing. The parent agent owns final browser, interaction, mobile, and deployed-header verification. No push or deployment is included in this change.

Machine-readable evidence is in `scripts/closed-edition-verification.json`.
