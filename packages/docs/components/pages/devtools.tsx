export default function DevToolsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-foreground mb-4">DevTools</h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">
        Lumin includes built-in <strong>DevTools hooks</strong> to help inspect and understand the framework's runtime behavior.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">
        These tools are designed primarily for <strong>learning, debugging, and introspection</strong>, not production monitoring.
      </p>

      {/* What Are DevTools */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">What Are Lumin DevTools?</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Lumin DevTools allow you to inspect:
        </p>
        <div className="p-4 bg-muted rounded-lg border border-border mb-6">
          <ul className="space-y-2 text-muted-foreground">
            <li>• Reactive signals</li>
            <li>• Active effects</li>
            <li>• Registered components</li>
            <li>• Overall runtime state</li>
          </ul>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          They expose internal framework data in a <strong>safe and explicit way</strong>.
        </p>
      </section>

      {/* Enabling DevTools */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">Enabling DevTools</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          DevTools are disabled by default.
        </p>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Enable in development</h3>
          <div className="bg-muted rounded-lg p-6 border border-border overflow-x-auto mb-6">
            <pre className="text-sm font-mono text-foreground">
              <code>{`import { DevTools } from "@nayan-ghate/lumin/devtools"

DevTools.enable()

// Expose to browser console
window.LuminDevTools = DevTools`}</code>
            </pre>
          </div>
          <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <p className="text-amber-700 font-semibold">⚠️ DevTools should only be enabled in development environments.</p>
          </div>
        </div>
      </section>

      {/* Inspecting Runtime State */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">Inspecting Runtime State</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Once enabled, open the browser developer console and run:
        </p>
        <div className="bg-muted rounded-lg p-6 border border-border overflow-x-auto mb-6">
          <pre className="text-sm font-mono text-foreground">
            <code>LuminDevTools.inspect()</code>
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Example Output</h3>
          <div className="bg-muted rounded-lg p-6 border border-border overflow-x-auto mb-6">
            <pre className="text-sm font-mono text-foreground">
              <code>{`{
  signals: 2,
  effects: 4,
  components: ["App", "Counter"]
}`}</code>
            </pre>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">What the Output Means</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-muted-foreground">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 font-semibold text-foreground">Field</th>
                  <th className="pb-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 font-mono">signals</td>
                  <td className="py-3">Number of active signals</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 font-mono">effects</td>
                  <td className="py-3">Number of active reactive effects</td>
                </tr>
                <tr>
                  <td className="py-3 font-mono">components</td>
                  <td className="py-3">Registered component names</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground mt-4">This helps visualize what is currently active in the app.</p>
        </div>
      </section>

      {/* Why DevTools Matter */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">Why DevTools Matter</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          DevTools help you:
        </p>
        <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg">
          <ul className="space-y-2 text-foreground">
            <li>✓ Understand dependency tracking</li>
            <li>✓ Debug unexpected updates</li>
            <li>✓ Verify cleanup behavior</li>
            <li>✓ Learn framework internals</li>
          </ul>
        </div>
        <p className="text-muted-foreground leading-relaxed mt-6">
          They are especially useful when studying how fine-grained reactivity works.
        </p>
      </section>

      {/* How DevTools Are Designed */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">How DevTools Are Designed</h2>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="text-muted-foreground"><strong className="text-foreground">✓ Do not mutate runtime behavior</strong> - They only read internal state</p>
          </div>
          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="text-muted-foreground"><strong className="text-foreground">✓ Explicitly enabled</strong> - No hidden globals</p>
          </div>
          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="text-muted-foreground">This keeps production builds clean and predictable.</p>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">Limitations</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Current DevTools capabilities:
        </p>
        <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-lg">
          <ul className="space-y-2 text-foreground">
            <li>• No graphical UI (console-based)</li>
            <li>• No time-travel debugging</li>
            <li>• No performance timeline</li>
          </ul>
        </div>
        <p className="text-muted-foreground leading-relaxed mt-6">
          These are planned for future versions.
        </p>
      </section>

      {/* Future Improvements */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">Future Improvements</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Planned DevTools enhancements include:
        </p>
        <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg">
          <ul className="space-y-2 text-foreground">
            <li>✨ Browser DevTools extension</li>
            <li>✨ Visual dependency graphs</li>
            <li>✨ Effect execution timeline</li>
            <li>✨ Signal update tracing</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
