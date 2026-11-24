# Vorqara Technologies Website

The official Vorqara Technologies marketing website, built with Next.js App Router, React, TypeScript and Tailwind CSS. The production domain is `https://vorqara.com` and deployment is managed through Vercel with this GitHub repository as the source.

## Local development

Requirements: Node.js 20.9 or newer and npm.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production validation

```bash
npm run lint
npm run build
```

Deployments should be made through the connected Vercel project after the changes have been reviewed and validated.

## Contact form configuration

The contact form sends enquiries using Resend. Add rate limiting or bot protection at the edge (for example, Vercel Firewall rules) before promoting the form broadly; the application route includes validation and a honeypot but does not implement a distributed rate limiter. Configure these environment variables in Vercel Project Settings → Environment Variables and in a local `.env.local` file for development:

- `RESEND_API_KEY` — Resend API key.
- `CONTACT_FROM_EMAIL` — verified sender address/domain configured in Resend.
- `CONTACT_TO_EMAIL` — mailbox that should receive website enquiries.

Never commit `.env.local`, API keys or credentials. If these values are not configured, the contact form returns a clear temporary-unavailable response and directs the visitor to `info@vorqara.com`.

## Website routes

- `/` — Company homepage.
- `/ecosystem` — Vorqara One platform vision.
- `/products` — Product portfolio and status.
- `/endpoint` — Vorqara Endpoint product and beta scope.
- `/solutions` — Intended customer audiences and use cases.
- `/about` — Company overview and principles.
- `/partners` — Partnership enquiries.
- `/security` — Security and trust principles.
- `/resources` — Resource hub landing page.
- `/contact` — Contact form.
- `/privacy`, `/terms`, `/cookies` — Website legal notices.

## Product-status accuracy

Vorqara Endpoint is the first product and is in development, with January 2027 as the target beta period in the current product specification. Agent registration, authentication and heartbeat foundations are marked complete in that specification. Health, trust, security, compliance and risk engines, AI-assisted explanations, dashboard and essential remote actions are described as beta scope or development priorities; they must not be represented as generally available without implementation evidence.

Vorqara Identity, Vorqara Privilege, Vorqara Detect, Vorqara Cloud, Vorqara Code and Vorqara AI are presented as planned product directions. Their scope and timing remain subject to validation.

## Brand assets

The existing official Vorqara logo and supplied brand assets are retained under `public/brand`. Do not redraw, recolour or stretch the logo without explicit brand approval.

## Before production release

1. Run lint and production build locally or in CI.
2. Verify the contact form with the production Resend sender, API key and recipient.
3. Confirm beta dates and capability statuses against the latest product build.
4. Have the Privacy Notice and Terms reviewed against the actual legal entity, governing law, processing activities, retention periods and applicable requirements.
5. Test mobile navigation, keyboard access, all routes, metadata, sitemap and 404 behaviour.
6. Review Vercel deployment logs and production smoke tests after deployment.
