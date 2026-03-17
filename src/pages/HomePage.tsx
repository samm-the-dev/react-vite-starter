export function HomePage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-4 text-3xl font-bold">Welcome</h1>
      <p className="text-muted-foreground mb-6">
        This is a starter template with React, Vite, Tailwind CSS, and TypeScript.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <FeatureCard
          title="React 19"
          description="Latest React with hooks and concurrent features"
        />
        <FeatureCard title="Vite" description="Lightning-fast dev server and optimized builds" />
        <FeatureCard title="Tailwind CSS" description="Utility-first CSS with dark mode support" />
        <FeatureCard title="TypeScript" description="Type-safe development with path aliases" />
      </div>

      <section className="mt-12">
        <h2 className="mb-3 text-xl font-semibold">Getting Started</h2>
        <ol className="text-muted-foreground list-inside list-decimal space-y-2">
          <li>
            Update <code className="bg-muted rounded px-1">package.json</code> with your app name
          </li>
          <li>
            Update the GitHub URL in <code className="bg-muted rounded px-1">Layout.tsx</code>
          </li>
          <li>
            Customize colors in <code className="bg-muted rounded px-1">index.css</code>
          </li>
          <li>Add your components and pages</li>
        </ol>
      </section>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div data-testid="feature-card" className="border-border bg-card rounded-lg border p-4">
      <h3 className="text-card-foreground font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-1 text-sm">{description}</p>
    </div>
  );
}
