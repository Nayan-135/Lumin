export default function ComparisonPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-foreground mb-4">Why Lumin?</h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">
        This page explains <strong>what makes Lumin different</strong> from other popular JavaScript UI frameworks and <strong>where it fits best</strong>.
      </p>

      {/* High-Level Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">High-Level Comparison</h2>
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
                <td className="py-3">Virtual DOM</td>
                <td className="py-3">✅ Yes</td>
                <td className="py-3">✅ Yes</td>
                <td className="py-3">❌ No</td>
                <td className="py-3">❌ No</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3">Component re-rendering</td>
                <td className="py-3">✅ Yes</td>
                <td className="py-3">✅ Yes</td>
                <td className="py-3">❌ No</td>
                <td className="py-3">❌ No</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3">Fine-grained reactivity</td>
                <td className="py-3">❌ No</td>
                <td className="py-3">⚠️ Partial</td>
                <td className="py-3">✅ Yes</td>
                <td className="py-3">✅ Yes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3">DOM diffing</td>
                <td className="py-3">✅ Yes</td>
                <td className="py-3">✅ Yes</td>
                <td className="py-3">❌ No</td>
                <td className="py-3">❌ No</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3">Diff-less hydration</td>
                <td className="py-3">❌ No</td>
                <td className="py-3">❌ No</td>
                <td className="py-3">❌ No</td>
                <td className="py-3">✅ Yes</td>
              </tr>
              <tr>
                <td className="py-3">Built for learning</td>
                <td className="py-3">❌ No</td>
                <td className="py-3">❌ No</td>
                <td className="py-3">❌ No</td>
                <td className="py-3">✅ Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">Lumin's Core Philosophy</h2>
        <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-lg font-semibold text-foreground text-balance">
            Update only what depends on state — nothing more.
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed mt-6 mb-4">Lumin avoids:</p>
        <div className="p-4 bg-muted rounded-lg border border-border mb-6">
          <ul className="space-y-2 text-muted-foreground">
            <li>• Component re-execution</li>
            <li>• Virtual DOM reconciliation</li>
            <li>• Heuristic-based updates</li>
          </ul>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Instead, it relies on <strong>explicit dependency tracking</strong> via signals and effects.
        </p>
      </section>

      {/* What Makes Lumin Special */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">What Makes Lumin Special</h2>

        <div className="space-y-6">
          <div className="p-6 bg-muted rounded-lg border border-border">
            <h3 className="font-bold text-foreground mb-3">🔹 No Virtual DOM</h3>
            <p className="text-muted-foreground">Lumin does not create or compare virtual trees. DOM nodes are created once and updated directly.</p>
          </div>

          <div className="p-6 bg-muted rounded-lg border border-border">
            <h3 className="font-bold text-foreground mb-3">🔹 No Component Re-Rendering</h3>
            <p className="text-muted-foreground mb-3">Components run exactly <strong>one time</strong>.</p>
            <div className="ml-4">
              <p className="text-muted-foreground mb-2">State changes:</p>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• Do not re-execute components</li>
                <li>• Do not recreate DOM</li>
                <li>• Do not trigger reconciliation</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-muted rounded-lg border border-border">
            <h3 className="font-bold text-foreground mb-3">🔹 Fine-Grained Updates</h3>
            <p className="text-muted-foreground">Only DOM nodes that depend on changed state are updated.</p>
          </div>

          <div className="p-6 bg-muted rounded-lg border border-border">
            <h3 className="font-bold text-foreground mb-3">🔹 Deterministic Behavior</h3>
            <p className="text-muted-foreground mb-3">Lumin avoids:</p>
            <ul className="space-y-2 text-muted-foreground ml-4">
              <li>• Heuristics</li>
              <li>• Scheduling guesses</li>
              <li>• Priority-based re-renders</li>
            </ul>
            <p className="text-muted-foreground mt-3">This results in:</p>
            <ul className="space-y-2 text-muted-foreground ml-4">
              <li>• Predictable updates</li>
              <li>• Easier debugging</li>
              <li>• Clear mental model</li>
            </ul>
          </div>

          <div className="p-6 bg-muted rounded-lg border border-border">
            <h3 className="font-bold text-foreground mb-3">🔹 Diff-less Hydration</h3>
            <p className="text-muted-foreground mb-3">During hydration:</p>
            <ul className="space-y-2 text-muted-foreground ml-4">
              <li>• DOM is not replaced</li>
              <li>• DOM is not diffed</li>
              <li>• Reactivity is attached directly</li>
            </ul>
            <p className="text-muted-foreground mt-3">This allows instant interactivity after SSR.</p>
          </div>

          <div className="p-6 bg-muted rounded-lg border border-border">
            <h3 className="font-bold text-foreground mb-3">🔹 Learning-Driven Design</h3>
            <p className="text-muted-foreground mb-3">Lumin is built to:</p>
            <ul className="space-y-2 text-muted-foreground ml-4">
              <li>• Understand reactivity systems</li>
              <li>• Learn scheduler internals</li>
              <li>• Explore SSR and hydration</li>
              <li>• Study framework architecture</li>
            </ul>
            <p className="text-muted-foreground mt-3">It favors clarity over abstraction.</p>
          </div>
        </div>
      </section>

      {/* When to Use Lumin */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">When to Use Lumin</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">Lumin is a great choice when:</p>
        <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-lg">
          <ul className="space-y-3 text-foreground">
            <li>✓ You want to learn framework internals</li>
            <li>✓ You care about minimal runtime overhead</li>
            <li>✓ You prefer deterministic updates</li>
            <li>✓ You're building experimental or research projects</li>
            <li>✓ You want a strong portfolio or interview project</li>
          </ul>
        </div>
      </section>

      {/* When NOT to Use Lumin */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">When NOT to Use Lumin</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">Lumin may not be ideal for:</p>
        <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-lg">
          <ul className="space-y-3 text-foreground">
            <li>✗ Large enterprise applications</li>
            <li>✗ Ecosystems requiring massive plugin support</li>
            <li>✗ Legacy browser environments</li>
            <li>✗ Teams needing long-term framework stability guarantees</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
