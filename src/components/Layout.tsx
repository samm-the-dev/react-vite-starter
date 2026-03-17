import { Outlet, Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

// TODO: Update with your GitHub repo URL
const GITHUB_URL = 'https://github.com/YOUR_USERNAME/YOUR_REPO';

export function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <header className="border-border border-b">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="text-primary hover:text-primary-hover text-xl font-bold">
            My App
          </Link>

          <button
            onClick={toggleTheme}
            className="hover:bg-muted rounded-md p-2"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-border mt-auto border-t">
        <div className="text-muted-foreground container mx-auto flex items-center justify-center gap-4 px-4 py-6 text-sm">
          <Link to="/credits" className="hover:text-foreground underline">
            Credits & Licenses
          </Link>
          <span aria-hidden="true">&middot;</span>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground underline"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
