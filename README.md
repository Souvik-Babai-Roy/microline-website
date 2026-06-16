# Microline Website

Microline (www.microlineindia.in) — production React + TypeScript website built with Vite. This repository contains the complete front-end application and a serverless contact API used by the live site.

Live website: https://www.microlineindia.in

IMPORTANT: Proprietary code and distribution restrictions

This repository contains proprietary source code for a professional, client-facing website. Do NOT copy, fork, distribute, mirror, or otherwise share or use this repository's contents without explicit, written permission from the repository owner. The code, assets, and configuration are intended for internal development and deployment only.

## Tech stack

- React 18 + TypeScript
- Vite for dev server and build
- Tailwind / PostCSS (project includes PostCSS tooling)
- DatoCMS for content (graphql-request)
- Axios for API calls
- Serverless function in `functions/contactApi`

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn

## Quick start

1. Install dependencies

```bash
npm install
# or
yarn
```

2. Create environment variables

Copy the example file and fill in secrets:

```bash
cp .env.example .env
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Build for production

```bash
npm run build
```

5. Preview the production build locally

```bash
npm run preview
```

## Available scripts

- `dev` — Run the Vite development server
- `build` — Type-check and build the production bundle
- `preview` — Preview production build locally
- `lint` — Run ESLint and auto-fix
- `format` — Run Prettier to format files
- `security-check` — Run `npm audit`

## Environment variables

This project uses Vite env vars (prefixed with `VITE_`). Example variables used in the codebase:

- `VITE_DATO_API_TOKEN` — DatoCMS read-only API token used by `src/lib/datocms.ts`
- `VITE_DATO_ENVIRONMENT` — DatoCMS environment (e.g. `main`)
- `VITE_API_BASE_URL` — Base URL for contact API used by `src/services/api.ts`
- `VITE_TURNSTILE_SITE_KEY` — Cloudflare Turnstile site key used on the contact page

Create a `.env` file in the project root (copy from `.env.example`) and keep secrets out of source control.

See [.env.example](.env.example) for a starter template.

## Project structure (important files)

- `src/` — Frontend source code
  - `src/pages/` — Route pages (Home, Products, Contact, etc.)
  - `src/components/` — Reusable UI components
  - `src/lib/datocms.ts` — DatoCMS GraphQL client
  - `src/services/api.ts` — Axios instance and API helpers
- `functions/contactApi` — Serverless contact API handler
- `public/` — Static assets

## Deployment & hosting (overview)

- Production site is served at https://www.microlineindia.in. Deploy the static build (`dist/`) to your CDN or static host and expose the serverless function endpoint used by the contact form.
- Typical steps:
  1. Build: `npm run build`
  2. Deploy `dist/` to your host (Vercel, Netlify, S3 + CloudFront, etc.)
  3. Deploy `functions/contactApi` to your platform's functions provider or configure an API endpoint that matches `VITE_API_BASE_URL`.

## Access control & contribution

This repository is not open for public contributions. If you are a contractor or collaborator, obtain explicit access and instructions from the repository owner. Any proposed changes must be submitted through the owner-managed review process.

If you are delivering updates for deployment, provide only compiled artifacts and deployment instructions unless the owner authorizes source-level sharing.

## Deployment notes

- Static site: build with `npm run build`, then deploy the contents of `dist/` to your static host (Netlify, Vercel, Surge, etc.).
- Functions: if you deploy to a platform that supports serverless functions, deploy `functions/contactApi` accordingly. The project contains a Catalyst config at `functions/contactApi/catalyst-config.json`.

## Security

- Never commit your `.env` with secrets. Use `.env.example` for variable names and placeholders.
- Rotate API tokens if you suspect they were exposed.

## Contacts

- Repository owner / site administrator: [Contact internally]
- For urgent security or production incidents, contact the site administrator directly and do not post sensitive information in public channels.

## Contributing

Open a PR for changes. Run `npm run lint` and `npm run format` before submitting.

## License

This project does not include a license file. Add one if you plan to publish or share this repository.

---

If you'd like, I can also create a short deployment checklist or add CI scripts next.
