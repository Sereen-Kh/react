# Tanz der Kulturen - React Landing Page

## Brand Guidelines Implementation

This project implements the Tanz der Kulturen brand guidelines with:

### Typography
- **Headlines**: Tussilago font family (per brand guidelines)
- **Paragraphs**: Roboto font family (per brand guidelines)
- **Font Loading**: Roboto via Google Fonts, Tussilago via local files

### Font Setup Instructions

#### 1. Tussilago Font Files Required

Place the following Tussilago font files in `public/fonts/`:

```
public/fonts/
├── Tussilago-Regular.woff2
├── Tussilago-Regular.woff
├── Tussilago-Bold.woff2
└── Tussilago-Bold.woff
```

#### 2. Font Weight Mapping
- **Regular (400)**: Used for normal headlines
- **Bold (700)**: Used for bold headlines

#### 3. Fallback Strategy
- If Tussilago files are not available, Georgia will be used as fallback
- Roboto loads from Google Fonts with Arial as fallback

### Color Scheme
Currently using Tailwind's amber palette. Update colors in `tailwind.config.cjs` if brand guidelines specify different colors.

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production  
npm run build
```

### Browser Support
- Font loading optimized with `font-display: swap`
- WOFF2 format for modern browsers, WOFF fallback for older browsers
- Preconnect directives for Google Fonts performance

### Accessibility
- Semantic HTML structure
- ARIA attributes for navigation
- Color contrast optimized for readability+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
