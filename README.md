# Taryn McCarty — Personal Website

React-based personal website built with Vite, deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build & Deploy

```bash
npm run build
```

The `dist/` folder is ready for GitHub Pages. Use the included GitHub Action or deploy manually.

## Updating Content

### Replace the headshot
Drop your photo as `public/headshot.jpg` — it will appear on the homepage.

### Edit page content
All pages are in `src/pages/`:
- `Home.jsx` — Home / About page
- `Resume.jsx` — Resume & Experience
- `Ventures.jsx` — Ventures / Portfolio
- `Press.jsx` — Press & Media
- `Contact.jsx` — Contact with form

### Enable the contact form
In `src/pages/Contact.jsx`, replace `REPLACE_THIS` in the Formspree URL with your Formspree form ID.

### Custom domain
The `public/CNAME` file is set to `tarynmccarty.com`. Update or remove it as needed.

## Tech Stack

- React 18
- React Router 6
- Framer Motion (page transitions)
- Vite (build tool)
- No UI framework — custom CSS
