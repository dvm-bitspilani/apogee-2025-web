# APOGEE 2025 portfolio restoration

Approved goal: preserve the original city, scroll/camera navigation, steampunk artwork, registration layouts, speakers, sponsors, media and developer pages as a static historical portfolio. Deploy through Wrangler to Cloudflare Pages; no backend reconstruction.

Registration uses a sample visitor and local historical event/category fixtures, editable example details and a local success dialog. Quantaculus provides a short sample quiz, answers and score using memory only. No OAuth, credentials, remote submissions, payments, auth cookies or browser storage. A concise archive/demo notice explains the behavior.

Keep the React 18/R3F 8 architecture, audit compatible dependencies and the source, split routes and hidden overlays, preserve and compress raster/vector artwork, provide WebGL/reduced-motion fallback and immediate navigation, cap GPU pixel ratio, and remove production debug tooling. Build, fixture tests and static-output checks validate the deployable artifact. Parent agent performs final browser and Cloudflare deployment verification.
