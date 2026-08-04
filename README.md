# Rishikesh Prewed Studio

Luxury photography and pre-wedding films portfolio website built with React, Vite, and Tailwind CSS.

## Features

- Responsive portfolio, galleries, packages, locations, blog, FAQ, about, and contact pages
- Video and image-led hero sections
- Portfolio category pages with gallery lightbox
- WhatsApp booking links and contact CTAs
- Google review call-to-action
- Cloudinary-ready image and video helpers
- Responsive desktop and mobile navigation

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS 4
- Framer Motion
- Lucide React and React Icons
- Cloudinary media delivery

## Requirements

- Node.js 18 or newer
- npm

## Local Setup

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Environment Variables

Create a `.env.local` file in the project root using `.env.example`:

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

Only use an unsigned Cloudinary upload preset in frontend code. Never expose a Cloudinary API secret in a `VITE_` variable or commit it to Git.

Many existing media URLs are configured in `src/utils/constants.js` and the files in `src/data/`. Keep the same Cloudinary cloud name when possible so existing URLs continue working.

## Available Commands

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## Project Structure

```text
src/
├── components/   Reusable page and layout components
├── data/         Navigation and page content
├── hooks/        Reusable React hooks
├── pages/        Route-level pages
├── routes/       Application routes
├── services/     API and Cloudinary helpers
├── styles/       Global variables, typography, and animations
└── utils/        Shared constants and helper functions
```

## Deployment

The project is ready for Vercel deployment:

1. Import the Git repository into Vercel.
2. Use the default Vite build settings.
3. Add the same environment variables from `.env.local` in Vercel Project Settings.
4. Deploy and test the production URL on desktop and mobile.

## Important Handoff Notes

- Keep the existing Cloudinary account and cloud name if transferring ownership; changing accounts can change media URLs.
- Transfer the Vercel project instead of creating a separate deployment when possible.
- Do not commit `.env`, `.env.local`, API secrets, or private credentials.
- `src/services/api.js` currently uses demo lead-submission behavior. Connect it to a real backend or form service before using the site for production lead collection.
- Review the WhatsApp number, email address, social links, Google Business link, and company details in `src/utils/constants.js` before handoff.
