export default function SSRPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-foreground mb-4">Server-Side Rendering & Hydration</h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">
        This document explains how <strong>Lumin</strong> handles server-side rendering and how it differs from traditional UI frameworks.
      </p>

      {/* What is SSR */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">What is Server-Side Rendering?</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Server-Side Rendering (SSR) means generating HTML on the server instead of in the browser.
        </p>
        <div className="p-4 bg-muted rounded-lg border border-border">
          <p className="font-semibold text-foreground mb-3">Benefits of SSR:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Faster first paint</li>
            <li>• Improved SEO</li>
            <li>• Content visible without JavaScript</li>
          </ul>
        </div>
      </section>

      {/* SSR in Traditional Frameworks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">SSR in Traditional Frameworks</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Most frameworks follow this flow:
        </p>
        <div className="bg-muted rounded-lg p-6 border border-border text-center mb-6">
          <p className="font-mono text-foreground">Server HTML ↓ Hydrate ↓ Interactive UI</p>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          This requires:
        </p>
        <div className="p-4 bg-muted rounded-lg border border-border">
          <ul className="space-y-2 text-muted-foreground">
            <li>• Virtual DOM</li>
            <li>• Reconciliation</li>
            <li>• Heuristic diffing</li>
          </ul>
        </div>
      </section>

      {/* Lumin's SSR Approach */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">Lumin's SSR Approach</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Lumin takes a different approach:
        </p>
        <div className="bg-primary/10 rounded-lg p-6 border border-primary/20 text-center mb-6">
          <p className="font-mono text-foreground">Server HTML ↓ Attach reactivity ↓ Interactive UI</p>
        </div>
        <div className="p-4 bg-muted rounded-lg border border-border">
          <p className="font-semibold text-foreground mb-3">There is:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>❌ No Virtual DOM</li>
            <li>❌ No DOM diffing</li>
            <li>❌ No DOM replacement</li>
          </ul>
        </div>
      </section>

      {/* Rendering to HTML */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">Rendering to HTML</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Lumin renders components to HTML strings using a dedicated SSR renderer.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Example</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`import { renderToString } from "@nayan-ghate/lumin/ssr"

const html = renderToString(App)
console.log(html)`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Output</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`<div>
  <h1>Lumin SSR</h1>
  <h2>Count: 5</h2>
</div>`}</code>
              </pre>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="font-semibold text-foreground mb-3">Key SSR Characteristics</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Runs in Node.js</li>
              <li>• No access to document or window</li>
              <li>• Signals are evaluated once</li>
              <li>• Event handlers are ignored (expected behavior)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hydration */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">Hydration in Lumin</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Hydration makes server-rendered HTML interactive on the client.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Diff-less Hydration</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lumin performs diff-less hydration, meaning:
            </p>
            <div className="p-4 bg-muted rounded-lg border border-border">
              <ul className="space-y-2 text-muted-foreground">
                <li>• Existing DOM is reused</li>
                <li>• No DOM replacement</li>
                <li>• No reconciliation</li>
                <li>• No diffing</li>
              </ul>
            </div>
            <p className="text-muted-foreground mt-4">
              Reactivity is attached directly to existing DOM nodes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Hydration Example</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`import { hydrateApp } from "@nayan-ghate/lumin"

hydrateApp(App, "#app")`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Why Diff-less Hydration Matters */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">Why Diff-less Hydration Matters</h2>
        <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="font-semibold text-foreground mb-3">Diff-less hydration provides:</p>
          <ul className="space-y-2 text-foreground">
            <li>✓ Faster startup</li>
            <li>✓ Zero DOM churn</li>
            <li>✓ Predictable behavior</li>
            <li>✓ Minimal runtime overhead</li>
          </ul>
        </div>
      </section>

      {/* Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">Comparison with Other Frameworks</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-muted-foreground text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 font-semibold text-foreground">Feature</th>
                <th className="pb-3 font-semibold text-foreground">React</th>
                <th className="pb-3 font-semibold text-foreground">Vue</th>
                <th className="pb-3 font-semibold text-foreground">Solid</th>
                <th className="pb-3 font-semibold text-foreground">Lumin</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3">SSR</td>
                <td className="py-3">✅</td>
                <td className="py-3">✅</td>
                <td className="py-3">✅</td>
                <td className="py-3">✅</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3">Hydration</td>
                <td className="py-3">Diff-based</td>
                <td className="py-3">Diff-based</td>
                <td className="py-3">Partial</td>
                <td className="py-3"><strong className="text-foreground">Diff-less</strong></td>
              </tr>
              <tr>
                <td className="py-3">DOM Replacement</td>
                <td className="py-3">Yes</td>
                <td className="py-3">Yes</td>
                <td className="py-3">Partial</td>
                <td className="py-3"><strong className="text-foreground">No</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Limitations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">Limitations</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Current limitations of Lumin SSR:
        </p>
        <div className="p-4 bg-muted rounded-lg border border-border">
          <ul className="space-y-2 text-muted-foreground">
            <li>• No event handlers during SSR</li>
            <li>• No streaming SSR (planned)</li>
            <li>• No partial hydration (planned)</li>
          </ul>
        </div>
      </section>

      {/* Future Improvements */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">Future Improvements</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Planned enhancements include:
        </p>
        <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <ul className="space-y-2 text-foreground">
            <li>• Streaming SSR</li>
            <li>• Partial hydration</li>
            <li>• Better SSR debugging tools</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
