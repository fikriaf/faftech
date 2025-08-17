# faftech-react

[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)](https://vitejs.dev/)
[![Express](https://img.shields.io/badge/Express-4.x-green.svg)](https://expressjs.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-purple.svg)](https://getbootstrap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black.svg)](https://vercel.com/)

**Full-Stack Web Portfolio** built with **Vite** + **React** + **Express** + **TypeScript** + **Bootstrap** + **CSS**, forming the frontend layer of the broader [faftech](https://github.com/fikriaf/faftech) system. Developed by **Fikri Armia Fahmi**, a passionate developer focused on AI, backend, and frontend development.

## Key Features
- Built with Vite for ultra-fast bundling and hot reloads
- Fully typed with TypeScript on both frontend and backend
- Modular file structure with pages and components clearly separated
- Supports integration with Express backend (TypeScript-based)
- Includes client-side routing with graceful 404 fallback

## Tech Stack
- **Frontend**: Vite + React + TypeScript
- **Backend**: Express + TypeScript (not shown in this folder tree)
- **Routing**: React Router
- **Styling**: Bootstrap + CSS

## Project Structure
```
faftech-react/
├── node_modules/
├── public/                        # Static public files
├── src/
│   ├── assets/                    # Images, icons, fonts
│   ├── components/                # Shared UI components
│   ├── pages/                     # Route-based pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── home/
│   │   ├── project/
│   │   └── NotFound.tsx          # 404 Page fallback
│   ├── services/                  # Reusable utilities & logic
│   ├── App.css
│   ├── App.tsx                    # Root component
│   ├── index.css
│   ├── index.tsx                  # App entry point
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json                   # Deployment config (Vercel)
└── vite.config.ts                # Vite configuration
```

## Routing
Page routing is defined in `App.tsx` and dynamically maps routes to each subfolder in `src/pages/`. A `NotFound.tsx` component handles undefined routes gracefully.

## Deployment
- Frontend: **Vercel**
- Backend: **Railway**

## License
This project is licensed under the **MIT License** — free for personal and commercial use.

## Contact
**Fikri Armia Fahmi**  
- Email: fikriarmia27@gmail.com  
- LinkedIn: [Fikri Armia Fahmi](https://linkedin.com/in/fikri‑armia‑fahmi‑b373b3288)
- Instagram: [@fikriaf27](https://instagram.com/fikriaf27)
