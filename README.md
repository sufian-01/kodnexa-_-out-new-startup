# Kodnexus Portfolio Website

A frontend-only portfolio website built with React, Vite, and Tailwind CSS. It includes a fully local, rule-based chatbot and is ready for straightforward Vercel deployment.

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- Rule-Based Chatbot

## Getting Started

```bash
npm install
npm run dev
```

For the contact form, add these environment variables locally and in Vercel:

```bash
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=onboarding@resend.dev
CONTACT_TO_EMAIL=info@kodnexus.com
```

Use `onboarding@resend.dev` only for testing. For production, verify `kodnexus.com` in Resend first, then use an address such as `info@kodnexus.com`.

To create a production build:

```bash
npm run build
```

## Deployment

Deploy directly to Vercel as a Vite project. Vercel will run `npm run build` and serve the generated `dist` directory.
