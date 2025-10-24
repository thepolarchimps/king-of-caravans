# King of Caravans · Next.js Site

This project packages the Webflow design into a reusable Next.js app for the King of Caravans collective. It keeps the custom `printf` typography, IcoMoon iconography, and the alternating release showcase pattern while adding routing for home, releases, and connect pages.

## Getting started

```bash
npm install
npm run dev
```

- The site runs on `http://localhost:3000` by default.
- Assets from the Webflow export live under `public/images` and `public/fonts`.
- Adobe Typekit serves the `printf` family through the kit `wmp7jky`.

## Key folders

- `app/` – App Router pages (`/`, `/releases`, `/connect`) and global styling.
- `components/ReleaseShowcase.jsx` – Alternating record showcase rebuilt for Next.js, shared by the home and releases routes.
- `styles/release-showcase.css` – Presentation layer for the showcase, including hover motion and platform link styling.
- `data/releases.json` – Structured release metadata that drives the showcase.
- `schemas/release.schema.json` – JSON schema to validate future data sources.
- Metadata (Open Graph, Twitter, structured data) lives in `app/layout.jsx` so you can tweak share images or schema information in a single place.

## Page overview

- **Home** – Hero banner with artwork background, quick intro, and scrolling release roster.
- **Releases** – Dedicated page for the full catalog using the same showcase component.
- **Connect** – Lightweight hub for streaming and contact links using the IcoMoon glyphs.

## Customisation tips

- Add or edit releases in `data/releases.json`; the component infers platform labels/icons and alternates layout automatically.
- Extend `schemas/release.schema.json` if you introduce new metadata (credits, genres, events, etc.).
- Update the connect links array in `app/connect/page.jsx` to reflect the latest socials or mailing list destinations.
- If you relocate fonts, adjust the `@font-face` declarations in `app/globals.css`.

## Production build

```bash
npm run build
npm start
```

Next.js will output an optimised production bundle in `.next/`.

## Next steps

1. Wire this repo into your deployment platform of choice (Vercel, Netlify, Render, etc.).
2. Connect the release data to your CMS or headless backend when ready.
3. Expand the design system with event listings, video embeds, or tour schedules as new content becomes available.
