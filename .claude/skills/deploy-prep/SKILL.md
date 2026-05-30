---
name: deploy-prep
description: Build the portfolio for production and report exactly what to upload to shared hosting. Use when the user wants to prepare a deploy, ship the site, or publish changes.
disable-model-invocation: true
---

# Deploy prep

This project deploys by manually uploading the build output to shared hosting (no CI/CD).

Steps:

1. Run `npm run build`. If it fails, stop and report the error — do not proceed.
2. List the contents of `dist/` so the user can see what was produced (`dist/index.html`, `dist/assets/`, plus any static files).
3. Check that root-served static assets exist in the build. In particular, the Hero CV link points to `/CV_-_Adisa_Laras_Pertiwi__3_.pdf` — confirm that file is present in `dist/` (it must live in a `public/` directory in the source to be copied there). Warn if it is missing.
4. Report the upload checklist to the user:
   - Upload the **entire contents of `dist/`** (not the `dist` folder itself) to the shared host's web root (e.g. `public_html/`).
   - Overwrite the existing `index.html` and `assets/` directory.

Do not attempt to upload anything yourself — there are no deploy credentials in this repo. Just build, verify, and hand off the checklist.
