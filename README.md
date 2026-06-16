# Microline Website

**Microline** — https://www.microlineindia.in

A production-ready **React + TypeScript** website built with **Vite**. This repository contains the complete frontend application and a serverless contact API powering the live website.

🌐 **Live Website:** https://www.microlineindia.in

---

# ⚠️ Proprietary Software Notice

This repository contains proprietary source code, assets, and configuration files developed for a professional, client-facing website.

**Unauthorized copying, forking, distribution, mirroring, modification, reverse engineering, or commercial use of any part of this repository is strictly prohibited without prior written permission from the repository owner.**

The contents of this repository are intended exclusively for:

* Internal development
* Maintenance
* Testing
* Deployment

All rights are reserved.

---

# Table of Contents

* [Technology Stack](#technology-stack)
* [Prerequisites](#prerequisites)
* [Quick Start](#quick-start)
* [Available Scripts](#available-scripts)
* [Environment Variables](#environment-variables)
* [Project Structure](#project-structure)
* [Architecture Overview](#architecture-overview)
* [Deployment](#deployment)
* [Deployment Notes](#deployment-notes)
* [Access Control & Contribution Policy](#access-control--contribution-policy)
* [Security Guidelines](#security-guidelines)
* [Maintenance Workflow](#maintenance-workflow)
* [Support & Contacts](#support--contacts)
* [License & Usage Restrictions](#license--usage-restrictions)

---

# Technology Stack

## Frontend

* **React 18**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **PostCSS**

## Content Management

* **DatoCMS**
* `graphql-request`

## API Layer

* **Axios**
* Serverless Contact API

## Security

* Cloudflare Turnstile

---

# Prerequisites

Before running the project, ensure the following are installed:

| Requirement | Version               |
| ----------- | --------------------- |
| Node.js     | 18+ (LTS recommended) |
| npm         | Latest                |
| Yarn        | Optional              |

Verify installation:

```bash
node -v
npm -v
```

---

# Quick Start

## 1. Install Dependencies

Using npm:

```bash
npm install
```

Using Yarn:

```bash
yarn
```

---

## 2. Configure Environment Variables

Create a local environment file:

```bash
cp .env.example .env
```

Populate the file with the required secrets and configuration values.

> **Important:** Never commit `.env` files containing real credentials.

---

## 3. Start Development Server

Using npm:

```bash
npm run dev
```

Using Yarn:

```bash
yarn dev
```

---

## 4. Build Production Bundle

```bash
npm run build
```

---

## 5. Preview Production Build

```bash
npm run preview
```

---

# Available Scripts

| Script           | Description                                              |
| ---------------- | -------------------------------------------------------- |
| `dev`            | Start the Vite development server                        |
| `build`          | Run TypeScript type-check and generate production bundle |
| `preview`        | Preview the production build locally                     |
| `lint`           | Run ESLint with auto-fix                                 |
| `format`         | Format files using Prettier                              |
| `security-check` | Execute `npm audit`                                      |

---

# Environment Variables

This project uses **Vite environment variables**, which must begin with the `VITE_` prefix.

Create a `.env` file by copying:

```bash
cp .env.example .env
```

## Supported Variables

| Variable                  | Description                       |
| ------------------------- | --------------------------------- |
| `VITE_DATO_API_TOKEN`     | DatoCMS read-only API token       |
| `VITE_DATO_ENVIRONMENT`   | DatoCMS environment (e.g. `main`) |
| `VITE_API_BASE_URL`       | Base URL of the Contact API       |
| `VITE_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key     |

### Security Recommendations

* Never commit `.env`.
* Store secrets in your hosting platform.
* Rotate API keys immediately if exposure is suspected.
* Use `.env.example` only as a template.

See:

```text
.env.example
```

for sample values and placeholders.

---

# Project Structure

```text
microline-website/
│
├── src/
│   ├── pages/                 # Route pages
│   │   ├── Home
│   │   ├── Products
│   │   ├── Contact
│   │   └── ...
│   │
│   ├── components/            # Reusable UI components
│   │
│   ├── lib/
│   │   └── datocms.ts         # DatoCMS GraphQL client
│   │
│   ├── services/
│   │   └── api.ts             # Axios instance and API helpers
│   │
│   └── ...
│
├── functions/
│   └── contactApi/
│       ├── catalyst-config.json
│       └── ...
│
├── public/                    # Static assets
├── .env.example
├── vite.config.ts
├── package.json
└── ...
```

---

# Architecture Overview

```text
Browser
   │
   ▼
React + TypeScript UI
   │
   ├── Axios API Services
   │
   ▼
Serverless Contact API
   │
   ▼
Backend Services

Content Pages
   │
   ▼
DatoCMS GraphQL API
```

---

# Deployment

The production website is available at:

**https://www.microlineindia.in**

## Step 1 — Build

```bash
npm run build
```

This generates the optimized production bundle inside:

```text
dist/
```

---

## Step 2 — Deploy Static Assets

Deploy the contents of:

```text
dist/
```

to a static hosting platform such as:

* Vercel
* Netlify
* AWS S3 + CloudFront
* Azure Static Web Apps
* Cloudflare Pages
* Firebase Hosting

---

## Step 3 — Deploy Serverless Functions

Deploy:

```text
functions/contactApi
```

to your functions provider.

Examples:

* Netlify Functions
* Vercel Functions
* AWS Lambda
* Zoho Catalyst
* Azure Functions

Ensure:

```env
VITE_API_BASE_URL
```

points to the deployed API endpoint.

---

# Deployment Notes

### Static Site

Build and deploy:

```bash
npm run build
```

Upload the entire:

```text
dist/
```

directory.

---

### Serverless Contact API

Deploy:

```text
functions/contactApi
```

to your platform's serverless environment.

The repository contains:

```text
functions/contactApi/catalyst-config.json
```

which is specific to **Zoho Catalyst** and may require modification for other platforms.

---

### Environment Variables

Environment variables should be configured:

* Locally via `.env`
* In CI/CD pipelines
* Within hosting platform settings

---

# Access Control & Contribution Policy

## Public Contributions

This repository is **not open-source** and does not accept public contributions.

---

## Internal Contributors

Authorized collaborators must:

1. Obtain access from the repository owner.
2. Follow the owner-managed review process.
3. Submit changes through pull requests.
4. Wait for approval before merging.

---

## Contractors

Contractors should provide:

* Compiled artifacts
* Deployment instructions

Source-level distribution requires explicit authorization.

---

# Security Guidelines

## Secrets

Never commit:

* `.env`
* API keys
* Access tokens
* Credentials

---

## Token Exposure

Immediately rotate:

* DatoCMS API tokens
* Cloudflare keys
* Serverless secrets

if exposure is suspected.

---

## Repository Confidentiality

Keep all:

* Source code
* Assets
* Configuration files
* Deployment settings

private and accessible only to authorized personnel.

---

# Maintenance Workflow

Before submitting updates:

## Format Code

```bash
npm run format
```

---

## Run Linting

```bash
npm run lint
```

---

## Security Audit

```bash
npm run security-check
```

---

## Verify Production Build

```bash
npm run build
```

---

## Submit Pull Request

Wait for review and approval from the repository owner.

---

# Support & Contacts

### Repository Owner / Site Administrator

**Internal contact only — not published in the public README.**

---

### Security or Production Incidents

For urgent issues:

* Contact the site administrator directly.
* Do not disclose credentials or sensitive information through public channels.
* Avoid posting incident details publicly.

---

# License & Usage Restrictions

This repository does not currently include a public license file.

Until a license is explicitly provided:

## All Rights Reserved

The source code, assets, and configuration files remain proprietary and are protected by applicable copyright laws.

No part of this repository may be:

* Copied
* Forked
* Reproduced
* Distributed
* Modified
* Republished
* Used commercially

without prior written permission from the repository owner.

---

<div align="center">

### Microline Website

Production React + TypeScript application powered by Vite.

**Maintained for Microline India**

*Internal Use Only*

</div>
