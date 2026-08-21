# Awais Ibrahim recruiter portfolio

A responsive React/Vite portfolio website for recruiters. The public site contains professional contact details only; referee contact details remain in the CV.

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Vite will display a local URL, normally `http://localhost:5173`.

## Build for publishing

```powershell
npm.cmd run build
```

The deployable site is created in `dist/`.

## Publish with GitHub Pages

1. Create a new public GitHub repository, for example `awais-ibrahim.github.io`.
2. Upload the full project to the repository root.
3. In the repository, open **Settings → Pages**.
4. Configure GitHub Actions to build the Vite site, or deploy the generated `dist/` folder with a static host.
5. GitHub will display the public URL, normally `https://awais-ibrahim.github.io/`.

## Publish with Netlify

1. Sign in to Netlify.
2. Choose **Add new site → Deploy manually**.
3. Select the Git repository or drag the generated `dist/` folder into the upload area.
4. Netlify will give you a public HTTPS URL that can be added to your CV and LinkedIn profile.

## Before publishing

- Check the live text against the final CV.
- Do not publish referee phone numbers or email addresses without their permission.
- Add a custom domain only after the initial public site has been checked.
