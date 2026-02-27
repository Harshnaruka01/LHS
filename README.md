# LHS Client Website

This repository contains the source code for the LHS client-facing website built with React and Vite. The project provides a modern, performant, and accessible single-page application showcasing client information, projects, and contact options.

## 🚀 Features

- **React 18+** with functional components and hooks
- **Vite** for fast development server and optimized builds
- **ESLint** configured for code quality
- Custom components: `About`, `Hero`, `Projects`, `Templates`, `Contact`, and more
- Responsive design with CSS modules and utility classes
- Scroll animations via `useScrollAnimation` hook

## 📁 Project Structure

```
public/            # Static assets
src/               # Application source code
  assets/          # Images and icons
  components/      # React components used across the site
  hooks/           # Custom React hooks
  Photos/          # Photo assets used on the site
  App.jsx          # Root component
  main.jsx         # Entry point
```

## ⚙️ Development Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start dev server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173` by default.

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Preview production build locally**
   ```bash
   npm run preview
   ```

## 🛠️ Testing & Linting

- Run linting:
  ```bash
  npm run lint
  ```

> ⚠️ This project currently does not include a testing framework. Add Jest, Cypress, or similar as needed.

## 📦 Deployment

Deploy the `dist/` folder produced by `npm run build` to any static hosting provider such as GitHub Pages, Netlify, Vercel, or Surge.

## 💡 Contributing

Feel free to open issues or pull requests to improve the site.

- Follow the coding style used throughout the codebase
- Update or add documentation when new features are added

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

_This README replaces the original Vite template details with project-specific information._
