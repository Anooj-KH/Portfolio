# Personal Portfolio - React + Vite

This is the source code for my personal portfolio website built with **React** and **Vite**. The website showcases my projects, skills, and experience, providing a quick overview of who I am and what I do.

**Live Demo**: https://yourportfolio.netlify.app 

**GitHub Repository**: https://github.com/Anooj-KH/Portfolio

## Features

- **Fast Refresh (HMR)**: Thanks to [Vite](https://vitejs.dev/), the development environment supports fast refresh, making the development process smooth and efficient.
- **React Components**: Built using React to create reusable components.
- **Minimal Setup**: The project is set up with Vite for fast and optimized builds, allowing for an efficient development workflow.
- **Styled Components**: Modern CSS with styled components for maintainable and scalable styling.
- **Responsive Design**: The portfolio is fully responsive and works seamlessly across devices.

## Tech Stack

- **React** - A popular JavaScript library for building user interfaces.
- **Vite** - A fast build tool and development server optimized for modern web projects.
- **Styled Components** - For styling React components using tagged template literals.
- **ESLint** - Linting for maintaining code quality.
- **Babel** or **SWC** (via Vite plugin) for Fast Refresh during development.

## Prerequisites

Before you can get started with the project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (or **yarn** if you prefer)

### Install Dependencies

1. Clone the repository:

   ```bash
   git clone https://github.com/Anooj-KH/Portfolio.git
   cd portfolio

2. Install project dependencies:   

   ```bash
   npm install

3. Start the development server:

   ```bash
   npm run dev

Your app will be running at http://localhost:3000.

## Scripts

-**npm run dev**: Start the development server with fast refresh enabled.
-**npm run build**: Create a production build of the application.
-**npm run preview**: Preview the production build locally.

## Deployment

You can deploy the portfolio on platforms like Netlify, Vercel, or GitHub Pages. After building the project -**(npm run build)**, deploy the contents of the -**dist** folder to the platform of your choice.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
