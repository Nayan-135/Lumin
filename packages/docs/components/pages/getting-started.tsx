'use client'

export default function GettingStartedPage() {
  return (
    <div className="space-y-16">
      <div className="lg:pl-64">
        <h1 className="text-4xl font-bold text-foreground mb-4">Getting Started</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          This guide will help you create your <strong>first Lumin application</strong> and understand the basic workflow.
        </p>

        {/* Prerequisites */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Prerequisites</h2>
          <p className="text-muted-foreground">Before you begin, make sure you have:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2"><span className="text-primary">•</span> <span><strong className="text-foreground">Node.js</strong> v18 or later</span></li>
            <li className="flex gap-2"><span className="text-primary">•</span> <span><strong className="text-foreground">A modern browser</strong></span></li>
            <li className="flex gap-2"><span className="text-primary">•</span> <span><strong className="text-foreground">Basic knowledge</strong> of JavaScript and JSX</span></li>
          </ul>
        </section>

        {/* Installation */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Installation</h2>
          <p className="text-muted-foreground">Install Lumin from npm:</p>
          <div className="bg-secondary/20 rounded-lg p-4 border border-border overflow-x-auto">
            <pre className="text-sm font-mono text-foreground leading-relaxed">
              <code>npm install @nayan-ghate/lumin</code>
            </pre>
          </div>
        </section>

        {/* Project Setup */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Project Setup</h2>
          <p className="text-muted-foreground">Create a basic HTML file:</p>
          <div className="bg-secondary/20 rounded-lg p-4 border border-border overflow-x-auto">
            <pre className="text-sm font-mono text-foreground">
              <code>{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Lumin App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="./main.jsx"></script>
  </body>
</html>`}</code>
            </pre>
          </div>
        </section>

        {/* Your First App */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Your First Lumin App</h2>
          <p className="text-muted-foreground">Create <code className="bg-secondary/20 px-2 py-1 rounded text-foreground text-sm">main.jsx</code>:</p>
          <div className="bg-secondary/20 rounded-lg p-4 border border-border overflow-x-auto">
            <pre className="text-sm font-mono text-foreground">
              <code>{`import { signal, component, render } from "@nayan-ghate/lumin"

const App = component(() => {
  const count = signal(0)

  return (
    <div>
      <h1>Hello Lumin</h1>
      <button onClick={() => count(count() + 1)}>
        Count: {() => count()}
      </button>
    </div>
  )
})

render(App, "#app")`}</code>
            </pre>
          </div>
        </section>

        {/* Run the App */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Run the App</h2>
          <p className="text-muted-foreground">Use any local server (recommended):</p>
          <div className="bg-secondary/20 rounded-lg p-4 border border-border overflow-x-auto">
            <pre className="text-sm font-mono text-foreground leading-relaxed">
              <code>npx serve .</code>
            </pre>
          </div>
          <p className="text-muted-foreground">Open your browser and visit:</p>
          <div className="bg-secondary/20 rounded-lg p-4 border border-border">
            <p className="font-mono text-foreground text-sm">http://localhost:3000</p>
          </div>
          <p className="text-lg text-foreground font-semibold">You should see a working Lumin counter app ✨</p>
        </section>

        {/* How This Works */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">How This Works</h2>
          <p className="text-muted-foreground">When the app runs:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2"><span className="text-primary">→</span> <span>The component function executes <strong className="text-foreground">once</strong></span></li>
            <li className="flex gap-2"><span className="text-primary">→</span> <span>DOM nodes are created <strong className="text-foreground">once</strong></span></li>
            <li className="flex gap-2"><span className="text-primary">→</span> <span>Signals track where they are used</span></li>
            <li className="flex gap-2"><span className="text-primary">→</span> <span>Updates go directly to affected DOM nodes</span></li>
            <li className="flex gap-2"><span className="text-primary">→</span> <span><strong className="text-foreground">No component re-rendering</strong></span></li>
          </ul>
        </section>

        {/* Key Differences */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Key Differences from React</h2>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/10 border-b border-border">
                <tr>
                  <th className="px-4 py-3 font-semibold text-foreground">React</th>
                  <th className="px-4 py-3 font-semibold text-foreground">Lumin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 text-muted-foreground">Components re-render</td>
                  <td className="px-4 py-3 text-muted-foreground">Components run once</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-muted-foreground">Virtual DOM diffing</td>
                  <td className="px-4 py-3 text-muted-foreground">Direct DOM updates</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-muted-foreground">State triggers render</td>
                  <td className="px-4 py-3 text-muted-foreground">State triggers effects</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Next Steps */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Next Steps</h2>
          <p className="text-muted-foreground">Now that you have a working app, explore:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2"><span className="text-primary">→</span> <span>Core Concepts</span></li>
            <li className="flex gap-2"><span className="text-primary">→</span> <span>API Reference</span></li>
            <li className="flex gap-2"><span className="text-primary">→</span> <span>Why Lumin?</span></li>
          </ul>
        </section>

        {/* Troubleshooting */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Troubleshooting</h2>
          <div className="space-y-4">
            <div className="p-4 border border-border rounded-lg bg-card">
              <h3 className="font-semibold text-foreground mb-2 text-sm">JSX not working?</h3>
              <p className="text-muted-foreground text-sm">Make sure you are using a build tool like Vite or Babel with JSX support.</p>
            </div>
            <div className="p-4 border border-border rounded-lg bg-card">
              <h3 className="font-semibold text-foreground mb-2 text-sm">Nothing renders?</h3>
              <p className="text-muted-foreground text-sm">Check the selector passed to render and ensure the script is loaded as <code className="bg-secondary/20 px-2 py-1 rounded text-foreground font-mono text-xs">type="module"</code>.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
