export default function RoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-foreground mb-4">Roadmap</h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">
        This document outlines the planned evolution of <strong>Lumin</strong>. The roadmap focuses on <strong>learning value</strong>, <strong>clarity</strong>, and <strong>progressive improvements</strong>, rather than feature bloat.
      </p>

      {/* Completed */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">✅ Completed</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The following features are fully implemented:
        </p>
        <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-lg">
          <ul className="space-y-2 text-foreground">
            <li>• Fine-grained reactivity (signals & effects)</li>
            <li>• Dependency tracking system</li>
            <li>• Microtask-based scheduler</li>
            <li>• DOM renderer</li>
            <li>• Component system (no re-renders)</li>
            <li>• Automatic effect cleanup</li>
            <li>• Built-in DevTools (runtime inspection)</li>
            <li>• Server-Side Rendering (SSR)</li>
            <li>• Diff-less hydration</li>
            <li>• npm package published</li>
            <li>• Core documentation</li>
          </ul>
        </div>
      </section>

      {/* In Progress */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">🚧 In Progress / Short Term</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Features planned for the near future:
        </p>
        <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-lg">
          <ul className="space-y-2 text-foreground">
            <li>• <code className="bg-muted px-2 py-1 rounded text-foreground text-sm">create-lumin-app</code> CLI (project scaffolding)</li>
            <li>• Improved documentation examples</li>
            <li>• Better error messages & warnings</li>
            <li>• DevTools stability improvements</li>
          </ul>
        </div>
      </section>

      {/* Mid-Term Goals */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">🔮 Mid-Term Goals</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Features planned after stabilization:
        </p>
        <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <ul className="space-y-2 text-foreground">
            <li>• TypeScript support</li>
            <li>• DevTools graphical UI</li>
            <li>• Signal dependency visualization</li>
            <li>• Hydration performance optimizations</li>
            <li>• Scheduler priority levels</li>
          </ul>
        </div>
      </section>

      {/* Long-Term Vision */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">🌍 Long-Term Vision</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Longer-term explorations and experiments:
        </p>
        <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-lg">
          <ul className="space-y-2 text-foreground">
            <li>• Streaming SSR</li>
            <li>• Partial hydration</li>
            <li>• Concurrent rendering experiments</li>
            <li>• Custom render targets (non-DOM)</li>
            <li>• Advanced scheduling strategies</li>
          </ul>
        </div>
      </section>

      {/* Learning Goals */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">🎓 Learning Goals</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Lumin is also a learning platform. Future work will continue to focus on:
        </p>
        <div className="p-6 bg-muted rounded-lg border border-border">
          <ul className="space-y-2 text-muted-foreground">
            <li>• Understanding framework trade-offs</li>
            <li>• Exploring alternative rendering models</li>
            <li>• Studying performance characteristics</li>
            <li>• Teaching reactive system design</li>
          </ul>
        </div>
      </section>

      {/* Out of Scope */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-6">❌ Out of Scope</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The following are intentionally <strong>not goals</strong>:
        </p>
        <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-lg">
          <ul className="space-y-2 text-foreground">
            <li>• Large plugin ecosystem</li>
            <li>• Enterprise-scale framework adoption</li>
            <li>• Backward compatibility guarantees</li>
            <li>• Legacy browser support</li>
          </ul>
        </div>
      </section>

      {/* Closing Notes */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">🏁 Closing Notes</h2>
        <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Lumin is not driven by popularity or trends.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            It exists to:
          </p>
          <ul className="space-y-2 text-foreground mb-6 ml-4">
            <li>• Explore ideas</li>
            <li>• Learn deeply</li>
            <li>• Build correct mental models</li>
          </ul>
          <p className="text-center text-lg font-semibold text-foreground">
            Progress over polish. <br />
            Clarity over complexity.
          </p>
        </div>
      </section>
    </div>
  )
}
