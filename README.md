# Graffiti Burger — Website

A single-page, frontend-only React site for Graffiti Burger: glassy scroll
navbar, full-bleed graffiti hero, story section, menu highlights, and a
mixed-shape "album wall" photo gallery at the bottom.

Built with React + Vite. No backend, no external APIs — everything runs
client-side.

## Run it locally

You'll need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Build for production / hosting

```bash
npm run build
```

This outputs a static `dist/` folder you can upload to any static host
(Netlify, Vercel, GitHub Pages, Cloudflare Pages, your own server, etc.) —
just point the host at the `dist` folder after building.

## Project structure

```
src/
  assets/              logo, hero background, and gallery photos
  components/
    Navbar.jsx / .css   transparent navbar that turns into a floating
                         glass pill once you scroll
    Hero.jsx   / .css   full-screen graffiti mural hero
    Story.jsx  / .css   brand story section
    Menu.jsx   / .css   menu highlight cards
    Gallery.jsx/ .css   mixed-shape "album wall" photo grid
    Footer.jsx / .css   location / hours / CTA footer
  App.jsx              page layout, assembles the sections above
  index.css            design tokens (colors, fonts) + resets
```

## Customizing

- **Text & prices**: edit the arrays/JSX directly in `Menu.jsx`,
  `Story.jsx`, and `Footer.jsx` (address, phone, hours).
- **Images**: swap files in `src/assets/` and `src/assets/gallery/`,
  keeping the same import names, or update the `import` paths.
- **Colors/fonts**: all defined as CSS variables at the top of
  `src/index.css` under `:root`.
