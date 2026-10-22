# MS Performance Training website

Static multi-page website built with React and Vite. Each page is emitted as a
standalone HTML file, so the existing page URLs continue to work on static hosts
such as GitHub Pages. Shared navigation and footer components live in
`src/components`.

## Install Node.js and npm

1. Download the **LTS Windows Installer (.msi)** from the [official Node.js
   website](https://nodejs.org/en/download).
2. Run the installer with the default options. npm is included with Node.js.
3. Close and reopen VS Code, then open a new PowerShell terminal in the project
   folder.
4. Confirm both tools are available:

   ```powershell
   node --version
   npm.cmd --version
   ```

This project requires Node.js 20.19 or newer. In PowerShell, use `npm.cmd`
instead of `npm` if PowerShell blocks the npm script due to its execution policy.

## Local development

From the project folder, install the project's npm packages, then start the
local development server:

```powershell
npm.cmd ci
npm.cmd run dev
```

Open the local URL printed by Vite. The development server reloads pages when
you save changes. You only need to run `npm.cmd ci` again if the dependencies
change or you have removed `node_modules`.

To start the local site from PowerShell outside VS Code and open it in your
default browser:

```powershell
cd 'C:\Users\LocalAdmin\Documents\mspt-website-'
npm.cmd run dev -- --open
```

Keep that PowerShell window open while using the site. Press **Ctrl+C** in the
window to stop the local server. The local address is only available from your
computer while the server is running; it does not publish the website to the
internet.

## Build and preview

```powershell
npm.cmd run build
npm.cmd run preview
```

The production site is generated in `dist/`. Preview the build locally before
publishing it. The custom-domain `CNAME` file is copied from `public/` into the
build output.

## Project structure

```text
public/                 Files copied unchanged to the build (including CNAME)
src/
  assets/               Stylesheets, photos, and brand artwork
  components/            Shared React components
  *.html                 One HTML entry point per public page
  main.jsx               Shared React and stylesheet entry point
vite.config.js           Vite multi-page build configuration
```

Page content and SEO metadata stay in each page's HTML file. Edit the reusable
site navigation in `src/components/Header.jsx`, the footer in
`src/components/Footer.jsx`, and shared brand artwork in
`src/components/Brand.jsx`.

## Publishing

Build the site and publish the contents of `dist/` with the hosting provider.
For GitHub Pages, configure the repository's Pages source to **GitHub Actions**
or publish `dist/` from your deployment workflow. Keep the existing custom
domain configured in `public/CNAME`.

Before publishing, verify that photos and client results are approved, contact
details are correct, and the draft legal pages reflect the actual coaching
policies and data practices.

## Unverified draft (We would need to test this first): publishing the website online

The steps below are a **draft and have not been tested against this repository's
GitHub settings or domain account**. Check GitHub's current Pages instructions
before using them. A local Vite server is for development; to let people visit
the site at any time, publish the built files to a public hosting service. One
possible free static-hosting option is GitHub Pages.

### Publish with GitHub Pages

1. Push the project, including `package.json`, `package-lock.json`, and the
   `.github` folder, to a GitHub repository.
2. In the repository, open **Settings → Pages**. Set the build and deployment
   source to **GitHub Actions**.
3. Add a deployment workflow at `.github/workflows/deploy.yml`. For example:

   ```yaml
   name: Deploy website

   on:
     push:
       branches:
         - main
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: pages
     cancel-in-progress: true

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Check out source
           uses: actions/checkout@v4
         - name: Set up Node.js
           uses: actions/setup-node@v4
           with:
             node-version-file: .nvmrc
             cache: npm
         - name: Install dependencies
           run: npm ci
         - name: Build website
           run: npm run build
         - name: Upload site
           uses: actions/upload-pages-artifact@v3
           with:
             path: dist

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

   This example runs when changes are pushed to `main`; change that branch if
   the repository uses a different deployment branch. The repository already
   has a CI workflow that checks formatting and builds the site. This example
   is a separate deployment workflow.
4. Push the workflow to GitHub and check the repository's **Actions** tab. When
   the deployment succeeds, GitHub Pages should show the public site URL under
   **Settings → Pages**.
5. Test that URL and the site's pages before connecting a custom domain. The
   existing `public/CNAME` file names `msperformance.com.au`; only use that
   domain if you control it. Add the custom domain in **Settings → Pages**, then
   follow GitHub's current DNS instructions at your domain provider. DNS changes
   can take time to take effect.

After setup, pushing changes to the deployment branch triggers a new build and
publication. The hosting service serves the published files, so your computer
does not need to stay on or keep the development server running.

## Future considerations: legal, privacy, and business

This is a general planning checklist, **not legal, tax, financial, or
professional advice**. Requirements depend on how the business operates, which
services it offers, and where its clients are located. Before launch, confirm
applicable obligations with qualified Australian legal, privacy, and accounting
professionals.

- **Copyright and licences:** Confirm you own or have permission to use every
  photo, logo, illustration, font, video, and other asset. Check the licence
  terms for stock content, open-source packages, and third-party services, and
  keep a record of permissions and attribution requirements. Do not assume that
  content found online is free to reuse.
- **Client permission and truthful claims:** Get clear, documented permission
  before publishing identifiable client photos, names, testimonials, or
  performance data. Take extra care with minors and obtain appropriate parent
  or guardian permission. Make sure claims about results, qualifications, and
  affiliations are accurate, substantiated, and not misleading.
- **Business names and trademarks:** Check that the business name, domain, logo,
  and branding do not infringe another party's rights. Use other organisations'
  names, logos, and endorsements only with authorisation where required.
- **Privacy and personal information:** Decide what information enquiries and
  booking tools collect, why it is needed, who can access it, where it is stored,
  and when it is deleted. Update the privacy policy to reflect actual practices
  and third-party providers. Assess which Australian privacy requirements apply
  to the business; avoid requesting sensitive health details through ordinary
  email or insecure forms.
- **Cookies, analytics, and marketing:** Disclose relevant analytics, tracking,
  embedded content, and marketing tools. Check applicable requirements before
  adding cookies, mailing lists, or targeted advertising, and provide suitable
  consent and unsubscribe options where required.
- **Payments and consumer terms:** Before accepting payments, clearly explain
  prices, inclusions, recurring charges, cancellations, refunds, missed
  sessions, and how clients can contact the business. Review the terms against
  Australian Consumer Law and other applicable rules. Confirm GST and invoicing
  obligations with an accountant. Use a reputable payment provider; do not
  collect or store card details yourself unless the necessary security and
  compliance arrangements are in place.
- **Health, safety, and insurance:** Keep exercise and health disclaimers
  accurate and do not present coaching as medical diagnosis or treatment.
  Establish appropriate screening, referral, emergency, child-safety, and
  incident processes for the services actually offered, and confirm relevant
  insurance cover.
- **Accessibility and security:** Aim for an accessible site, protect admin and
  hosting accounts with strong unique passwords and multi-factor
  authentication, keep dependencies updated, and use HTTPS. Do not commit
  passwords, API keys, client records, or other confidential information to the
  repository.
- **Ongoing checks:** Revisit policies, permissions, prices, contact details,
  licences, and third-party service terms when the business or website changes.
