export default function CoreConceptsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-foreground mb-4">Core Concepts</h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">
        This section explains the fundamental ideas behind <strong>Lumin</strong> and how they differ from traditional UI frameworks.
      </p>

      {/* Fine-Grained Reactivity */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-4">1. Fine-Grained Reactivity</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Lumin uses <strong>fine-grained reactivity</strong>, meaning updates are scoped to the smallest possible unit.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Instead of re-rendering components, <strong>only the exact DOM nodes that depend on state are updated</strong>.
        </p>
        <div className="mt-4 p-4 bg-primary/10 border-l-4 border-primary rounded">
          <p className="text-foreground font-semibold">💡 State drives DOM directly.</p>
        </div>
      </section>

      {/* Signals */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-4">2. Signals</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Signals are the core reactive primitive in Lumin.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Creating a signal</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`const count = signal(0)`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Reading a signal</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`count()`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Writing to a signal</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`count(5)`}</code>
              </pre>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="font-semibold text-foreground mb-3">How signals work</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Signals store a value</li>
              <li>• Track which computations read them</li>
              <li>• Notify only those dependents when updated</li>
              <li>• No component re-rendering occurs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dependency Tracking */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-4">3. Dependency Tracking</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Lumin tracks dependencies automatically.
        </p>
        <div className="bg-muted rounded-lg p-6 border border-border overflow-x-auto mb-6">
          <pre className="text-sm font-mono text-foreground">
            <code>{`effect(() => {
  console.log(count())
})`}</code>
          </pre>
        </div>
        <div className="p-4 bg-muted rounded-lg border border-border">
          <p className="font-semibold text-foreground mb-3">What happens here</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• The effect becomes dependent on count</li>
            <li>• When count changes, the effect re-runs</li>
            <li>• You never manually declare dependencies</li>
          </ul>
        </div>
      </section>

      {/* Effects */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-4">4. Effects</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Effects are reactive computations.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Basic example</h3>
            <div className="bg-muted rounded-lg p-4 border border-border overflow-x-auto">
              <pre className="text-sm font-mono text-foreground">
                <code>{`effect(() => {
  document.title = \`Count: \${count()}\`
})`}</code>
              </pre>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg border border-border">
            <p className="font-semibold text-foreground mb-3">Effect lifecycle</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Runs once initially</li>
              <li>• Re-runs when dependencies change</li>
              <li>• Supports cleanup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Cleanup example</h3>
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

      {/* Components */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-4">5. Components</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Components in Lumin are plain functions.
        </p>
        <div className="bg-muted rounded-lg p-6 border border-border overflow-x-auto mb-6">
          <pre className="text-sm font-mono text-foreground">
            <code>{`const App = component(() => {
  return <h1>Hello Lumin</h1>
})`}</code>
          </pre>
        </div>
        <div className="p-4 bg-muted rounded-lg border border-border">
          <p className="font-semibold text-foreground mb-3">Key characteristics</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Components run <strong>once</strong></li>
            <li>• No re-execution on state change</li>
            <li>• DOM nodes are created once</li>
            <li>• State changes never re-render components</li>
          </ul>
        </div>
      </section>

      {/* DOM Updates */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-4">6. DOM Updates</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          DOM updates happen at the binding level, not the component level.
        </p>
        <div className="bg-muted rounded-lg p-6 border border-border overflow-x-auto mb-6">
          <pre className="text-sm font-mono text-foreground">
            <code>{`<h2>Count: {() => count()}</h2>`}</code>
          </pre>
        </div>
        <p className="text-muted-foreground">Only this text node updates when count changes.</p>
      </section>

      {/* Scheduler */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-4">7. Scheduler</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Lumin batches updates using a microtask-based scheduler.
        </p>
        <div className="bg-muted rounded-lg p-6 border border-border overflow-x-auto mb-6">
          <pre className="text-sm font-mono text-foreground">
            <code>{`count(1)
count(2)
count(3)`}</code>
          </pre>
        </div>
        <p className="text-muted-foreground mb-4">The effect runs once, with the final value.</p>
        <div className="p-4 bg-muted rounded-lg border border-border">
          <p className="font-semibold text-foreground mb-3">Why this matters</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Avoids redundant work</li>
            <li>• Improves performance</li>
            <li>• Guarantees consistent updates</li>
          </ul>
        </div>
      </section>

      {/* No Virtual DOM */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-4">8. No Virtual DOM</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Lumin does not use a Virtual DOM.
        </p>
        <div className="p-4 bg-muted rounded-lg border border-border">
          <p className="font-semibold text-foreground mb-3">This means:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• No diffing</li>
            <li>• No reconciliation</li>
            <li>• No heuristics</li>
          </ul>
        </div>
        <p className="text-muted-foreground mt-4">DOM nodes are created once and updated directly.</p>
      </section>

      {/* Deterministic Execution */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-4">9. Deterministic Execution</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Lumin prioritizes determinism:
        </p>
        <div className="p-4 bg-muted rounded-lg border border-border">
          <ul className="space-y-2 text-muted-foreground">
            <li>• Same input → same output</li>
            <li>• No scheduling surprises</li>
            <li>• No hidden re-renders</li>
          </ul>
        </div>
        <p className="text-muted-foreground mt-4">This makes behavior easier to reason about and debug.</p>
      </section>

      {/* Mental Model Summary */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-4">10. Mental Model Summary</h2>
        <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg space-y-2 text-foreground font-semibold">
          <p>✓ Components define structure.</p>
          <p>✓ Signals define change.</p>
          <p>✓ Effects define reactions.</p>
          <p>✓ DOM updates are direct and precise.</p>
        </div>
      </section>
    </div>
  )
}
