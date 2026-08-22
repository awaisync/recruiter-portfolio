# Awais Ibrahim Portfolio - Handover

This file is the working reference for future changes to the portfolio. Keep it updated when deployment, domain, providers, or contact details change.

## Live site and repository

- Live site: `https://awaisibrahim.com`
- `www` alias: `https://www.awaisibrahim.com`
- GitHub repository: `https://github.com/awaisync/recruiter-portfolio`
- Vercel project: `awais-team2/awais-ibrahim`
- Production branch: `main`
- Vercel deploys production automatically after every successful push to `main`.

## Domain and DNS

- Registrar and DNS provider: SpaceShip
- Domain: `awaisibrahim.com`
- Registration expiry shown in SpaceShip: 21 August 2027
- Auto-renew: enabled. The domain is paid annually; Vercel hosting remains on the free Hobby plan while it is available under Vercel's terms.

Current SpaceShip records required by Vercel:

| Host | Type | Value |
| --- | --- | --- |
| `@` | A | `216.198.79.1` |
| `@` | A | `64.29.17.1` |
| `www` | CNAME | `39aac51da56434f0.vercel-dns-017.com` |

Use the SpaceShip nameservers unless deliberately moving DNS to another provider. Do not add conflicting apex A records.

## Day-to-day update workflow

1. Work in `src/App.jsx` and `src/styles.css`; images and static files live under `public/`.
2. Run `npm.cmd run build` from this folder. It must pass before publishing.
3. Check the diff: `git status --short` and `git diff`.
4. Commit the intended files on `main`.
5. Push with `git push origin main`.
6. Vercel will build and deploy automatically. Confirm the production deployment is Ready, then refresh the live site.

Useful checks:

```powershell
npm.cmd run build
npx.cmd vercel ls awais-ibrahim
```

For a major visual experiment, create a feature branch first. The original light/white portfolio is safely retained at `backup/white-theme` on GitHub.

## Current site decisions

- Design: dark, neon blue/violet, responsive portfolio.
- Top-left header label: “Developed by Awais.”
- Hero has the Hospicare M2000 image as the *outer* background. The profile card itself uses a plain dark glass background.
- The Master of Science period is `2024 - 2026`.
- The visible public contact section contains email, phone, and LinkedIn only; no street address.
- Motion respects the visitor's `prefers-reduced-motion` setting. If Windows/browser animation effects are disabled, animations intentionally do not run.

## Contact form and privacy

- Form delivery provider: FormSubmit AJAX endpoint.
- Incoming messages go to: `dark.winter2055@gmail.com`.
- Public contact email displayed on the site: `awaisibrahim11@gmail.com`.
- The first real FormSubmit submission may require activating the recipient email through FormSubmit's confirmation email. Do not treat delivery as fully active until that confirmation is completed.
- Privacy page: `/privacy.html`.
- The contact form requires privacy-policy consent before submission.
- If the form provider, recipient, tracking, analytics, cookies, or retention practice changes, update `public/privacy.html` before deploying.

## Important files

- `src/App.jsx` - site content, sections, contact submission.
- `src/styles.css` - layout, responsiveness, animation, theme.
- `public/privacy.html` - privacy notice.
- `public/brands/` - University of Antwerp, Abbott, Grifols marks.
- `public/work/` - authorised work images used by the site.
- `FUTURE_EU_ORG_DOMAIN.md` - deferred free `eu.org` domain idea; do not start it unless requested.

## Safety notes

- Keep real work claims and metrics accurate; do not add invented outcomes.
- Obtain permission before uploading confidential employer, laboratory, patient, or client materials.
- Keep image files compressed and use descriptive alt text.
- Never commit API keys, passwords, or service tokens. This portfolio is public.
