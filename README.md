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
