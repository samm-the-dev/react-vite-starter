# React + Vite Starter

A minimal, opinionated React starter with Tailwind CSS, TypeScript, and dark mode.

This is a [GitHub template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository). Use it to scaffold new projects with a clean commit history.

## Quick Start

```bash
# Create a new project from this template
gh repo create my-new-app --template samm-the-dev/react-vite-starter --clone --public
cd my-new-app

# Connect shared toolbox (submodule for AI context, hooks, skills, shared lib)
git submodule add https://github.com/samm-the-dev/toolbox .toolbox

# Install dependencies
npm install

# Start dev server
npm run dev
```

## What's Included

| Feature          | Implementation                              |
| ---------------- | ------------------------------------------- |
| **React 19**     | Latest with hooks                           |
| **Vite**         | Fast dev server, optimized builds           |
| **TypeScript**   | Strict mode, path aliases (`@/`)            |
| **Tailwind CSS** | v4 with CSS variable theming                |
| **Dark mode**    | `useTheme` hook + class strategy            |
| **React Router** | v7 with layout routes                       |
| **Testing**      | Vitest + Testing Library                    |
| **Linting**      | ESLint + jsx-a11y                           |
| **Formatting**   | Prettier + Tailwind class sorting           |
| **Git hooks**    | Husky + lint-staged (auto-format on commit) |

## Project Structure

```
src/
├── components/     # Reusable UI components
│   └── Layout.tsx  # App shell with header/footer
├── hooks/          # Custom React hooks
│   ├── useTheme.ts
│   └── useModalState.ts
├── lib/            # Utilities
│   └── utils.ts    # cn() for Tailwind class merging
├── pages/          # Route components
│   ├── HomePage.tsx
│   └── CreditsPage.tsx
├── test/           # Test setup
├── App.tsx         # Route definitions
├── main.tsx        # Entry point
└── index.css       # Tailwind + CSS variables
```

### Config Templates

The `config/` directory contains copy-once configuration templates for project setup:

| Directory           | Description                               | Usage                        |
| ------------------- | ----------------------------------------- | ---------------------------- |
| `github-workflows/` | CI and GitHub Pages deploy workflows      | Copy to `.github/workflows/` |
| `github-rulesets/`  | Branch protection + Copilot auto-review   | Apply via `gh api`           |
| `a11y-audit/`       | Playwright + axe-core accessibility audit | Copy to `scripts/`           |

These are reference configs -- copy what you need during init, then customize per-project. See each directory's README for details.

## Customization Checklist

After creating a project from this template:

- [ ] Update `name` in `package.json`
- [ ] Update `<title>` in `index.html`
- [ ] Update `GITHUB_URL` in `src/components/Layout.tsx`
- [ ] Update app name in `Layout.tsx` header
- [ ] Customize colors in `src/index.css` (CSS variables)
- [ ] Update license info in `CreditsPage.tsx`
- [ ] Update `base` in `vite.config.ts` if deploying to GitHub Pages
- [ ] Copy config templates as needed (see `config/` above)
- [ ] Delete the `config/` directory once you've copied what you need

## Scripts

```bash
npm run dev          # Start dev server (port 5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format all files with Prettier
npm run format:check # Check formatting without writing
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once
```

## Theming

Colors are defined as CSS variables in `src/index.css`. The template uses HSL values
for easy customization:

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Blue */
}
.dark {
  --primary: 217.2 91.2% 59.8%; /* Lighter blue for dark mode */
}
```

Tailwind maps these to utility classes: `bg-primary`, `text-primary-foreground`, etc.

## Hooks

### `useTheme`

Toggle light/dark mode with localStorage persistence:

```tsx
const { theme, toggleTheme } = useTheme();
```

### `useModalState<T>`

Generic modal state that holds the displayed item:

```tsx
const modal = useModalState<User>();

// Open with data
modal.open(user);

// Render
{
  modal.item && <UserModal user={modal.item} onClose={modal.close} />;
}
```

## Component Library: shadcn/ui

This template is pre-configured for [shadcn/ui](https://ui.shadcn.com/). The required utility dependencies (`clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react`) are already installed, and the `cn()` helper is at `src/lib/utils.ts`.

### Setup

```bash
npx shadcn@latest init    # Creates components.json, accepts defaults
npx shadcn@latest add button dialog card  # Add components as needed
```

Components are installed to `src/components/ui/` and use CSS variable theming from `src/index.css`, so they automatically adapt to your project's color scheme.

## Deployment

### GitHub Pages

1. Update `base` in `vite.config.ts`:

   ```ts
   base: command === 'build' ? '/your-repo-name/' : '/',
   ```

2. Build and deploy:
   ```bash
   npm run build
   # Deploy dist/ folder
   ```

### Other Platforms

Build output goes to `dist/`. Deploy as static files to Vercel, Netlify, etc.

## Testing

Tests use Vitest with React Testing Library. The template includes example tests for all hooks and pages.

```bash
npm run test      # Watch mode (during development)
npm run test:run  # Single run (CI/pre-commit)
```

### Writing Tests

- **Hooks**: Use `renderHook` from `@testing-library/react`
- **Components**: Use `render` and query with `screen.getBy*`
- **Utilities**: Direct function testing

See existing tests in `src/hooks/*.test.ts` and `src/pages/*.test.tsx` for patterns.

## License

MIT
