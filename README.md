# APOGEE 2025 — DVM portfolio archive

A restored frontend archive of **Revved-Up Rhapsody**, preserving DVM’s original 3D city, steampunk artwork, event pages, registration interface and Quantaculus design. The original site helped facilitate more than 650 registrations for BITS Pilani’s 2025 technical festival; this restoration provides local demonstrations of those interfaces.

Registration uses a sample visitor and local event/college options. Quantaculus offers five illustrative questions with local scoring. Neither creates accounts, sends personal details, processes payments or contacts the former backend. Demo state lives in memory and resets on reload. Historical event/sponsor/social links remain available as external references.

## Run and verify

Use Node 22.12 or newer:

```sh
npm ci
npm run dev
npm run check
npm audit
```

`npm run check` tests the local demo service and builds the static Pages artifact. `npm run preview:pages` serves the artifact with Wrangler and applies the Pages headers. The archive navigation provides direct access to every finished page. The city retains its original camera transitions; compatible desktop devices retain the 3D speaker experience.

## Cloudflare Pages

Project: `dvm-portfolio-apogee-2025`; output: `dist`; pinned Wrangler: `4.145.0`.

```sh
npm run deploy
```

The deploy script selects the intended Cloudflare account using `CLOUDFLARE_ACCOUNT_ID`. Authentication is provided by the existing Wrangler login or a token supplied outside this repository. Initial classic Pages project creation is performed separately; subsequent deployments use the normal command above. Pages handles SPA navigation natively because the artifact has no root `404.html`. No catch-all rewrite is needed.

The approved canonical origin is `https://apogee2025.bits-apogee.org`; DNS and custom-domain setup are external deployment tasks. [PORTFOLIO_RESTORATION.md](PORTFOLIO_RESTORATION.md) records the baseline, implementation, measured artifact reduction, verification and limitations.
