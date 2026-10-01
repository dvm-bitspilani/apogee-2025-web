# APOGEE 2025 — Revved-Up Rhapsody

The original DVM festival frontend, with its steampunk city, camera transitions, artwork, speakers, events, sponsors and historical information. Registration buttons display a small closed-registration dialog. Quantaculus retains its original artwork with the edition marked as ended.

Requires Node 22.12 or later. Install and verify with the committed lockfile:

```sh
npm ci
npm run check
npm audit
```

`npm run dev` starts Vite. `npm run preview:pages` serves the production output with Cloudflare Pages headers. The `/about`, `/events`, `/contact`, `/speakers`, `/sponsors`, `/media`, and `/developers` routes provide direct access to the original pages. Unknown pages retain the original coming-soon design.

The original local fonts and local Draco decoders are retained. Route and overlay imports are deferred; speaker clips load near the camera, pause when the page is hidden, and remain user-controlled on the mobile page. Sponsor/media logos load as they enter the scroll area. Hashed assets have immutable caching, while HTML revalidates.

Cloudflare Pages project: `dvm-portfolio-apogee-2025`; output directory: `dist`; canonical URL: `https://apogee2025.bits-apogee.org/`. Deployment remains an explicit action. Build preparation verifies asset limits and retains every model used by the city, including `ContactUsBoard.glb` and `train.glb`.

See [RESTORATION_VERIFICATION.md](RESTORATION_VERIFICATION.md) for current verification and artifact measurements.
