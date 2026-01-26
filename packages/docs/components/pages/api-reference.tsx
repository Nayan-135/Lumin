'use client';

export default function APIReferencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-foreground mb-4">API Reference</h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">
        This section documents the public API exposed by <strong>Lumin</strong>. All APIs are designed to be minimal, predictable, and composable.
      </p>

      {/* signal */}
      <section className="mb-16">
        <div className="bg-muted rounded-lg p-6 border border-border mb-6">
          <code className="text-lg font-mono text-foreground">signal(initialValue)</code>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Creates a fine-grained reactive value.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Syntax</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`const state = signal(initialValue)`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Reading a signal</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`state()`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Writing to a signal</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`state(newValue)`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Example</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`const count = signal(0)

console.log(count()) // 0
count(1)
console.log(count()) // 1`}</code>
              </pre>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="font-semibold text-foreground mb-3">Notes</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Signals automatically track dependencies</li>
              <li>• Updates notify only dependent effects or DOM bindings</li>
              <li>• No re-rendering occurs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* effect */}
      <section className="mb-16">
        <div className="bg-muted rounded-lg p-6 border border-border mb-6">
          <code className="text-lg font-mono text-foreground">effect(fn)</code>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Runs a function reactively when its dependencies change.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Syntax</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`effect(() => {
  // reactive logic
})`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Example</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`const count = signal(0)

effect(() => {
  console.log("Count:", count())
})`}</code>
              </pre>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="font-semibold text-foreground mb-3">Behavior</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Runs once initially</li>
              <li>• Re-runs when any accessed signal changes</li>
              <li>• Automatically tracks dependencies</li>
              <li>• Supports cleanup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Cleanup Example</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`effect(() => {
  const id = setInterval(() => {
    console.log(count())
  }, 1000)

  return () => clearInterval(id)
})`}</code>
              </pre>
            </div>
            <p className="text-muted-foreground mt-3">Cleanup runs automatically when the effect is disposed.</p>
          </div>
        </div>
      </section>

      {/* component */}
      <section className="mb-16">
        <div className="bg-muted rounded-lg p-6 border border-border mb-6">
          <code className="text-lg font-mono text-foreground">component(fn)</code>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Defines a Lumin component.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Syntax</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`const App = component(() => {
  return <div>Hello</div>
})`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Example</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`const Counter = component(() => {
  const count = signal(0)

  return (
    <button onClick={() => count(count() + 1)}>
      Count: {() => count()}
    </button>
  )
})`}</code>
              </pre>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="font-semibold text-foreground mb-3">Key Characteristics</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Components are plain functions</li>
              <li>• Each component runs only once</li>
              <li>• No re-rendering</li>
              <li>• DOM updates are driven by signals</li>
            </ul>
          </div>
        </div>
      </section>

      {/* render */}
      <section className="mb-16">
        <div className="bg-muted rounded-lg p-6 border border-border mb-6">
          <code className="text-lg font-mono text-foreground">render(App, target)</code>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Mounts a component into the DOM.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Syntax</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`render(App, target)`}</code>
              </pre>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="font-semibold text-foreground mb-3">Parameters</p>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">App</strong> — root component</li>
              <li><strong className="text-foreground">target</strong> — CSS selector or DOM element</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Example</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`render(App, "#app")`}</code>
              </pre>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="font-semibold text-foreground mb-3">Behavior</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Clears the target container</li>
              <li>• Mounts the component once</li>
              <li>• Returns an unmount handle</li>
            </ul>
          </div>
        </div>
      </section>

      {/* hydrateApp */}
      <section className="mb-16">
        <div className="bg-muted rounded-lg p-6 border border-border mb-6">
          <code className="text-lg font-mono text-foreground">hydrateApp(App, target)</code>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Hydrates server-rendered HTML without replacing DOM.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Syntax</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`hydrateApp(App, target)`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Example</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`hydrateApp(App, "#app")`}</code>
              </pre>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="font-semibold text-foreground mb-3">Behavior</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Attaches reactivity to existing DOM</li>
              <li>• No DOM diffing</li>
              <li>• No re-rendering</li>
              <li>• No node replacement</li>
              <li>• Used after Server-Side Rendering (SSR)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* renderToString */}
      <section className="mb-16">
        <div className="bg-muted rounded-lg p-6 border border-border mb-6">
          <code className="text-lg font-mono text-foreground">renderToString(App)</code>
          <span className="ml-3 text-sm text-muted-foreground">(SSR)</span>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Renders a component tree to an HTML string.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Import</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`import { renderToString } from "@nayan-ghate/lumin/ssr"`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Example</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`const html = renderToString(App)
console.log(html)`}</code>
              </pre>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="font-semibold text-foreground mb-3">Notes</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Runs in Node.js</li>
              <li>• No DOM APIs required</li>
              <li>• Signals are evaluated once</li>
              <li>• Event handlers are ignored (expected)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DevTools */}
      <section>
        <div className="bg-muted rounded-lg p-6 border border-border mb-6">
          <code className="text-lg font-mono text-foreground">DevTools</code>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Runtime inspection utilities for development.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Enable DevTools</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`import { DevTools } from "@nayan-ghate/lumin/devtools"

DevTools.enable()
window.LuminDevTools = DevTools`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Inspect Runtime</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`LuminDevTools.inspect()`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Example Output</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`{
  signals: 2,
  effects: 4,
  components: ["App", "Counter"]
}`}</code>
              </pre>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="font-semibold text-foreground mb-3">Purpose</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Inspect framework internals</li>
              <li>• Debug reactive graphs</li>
              <li>• Learn runtime behavior</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
