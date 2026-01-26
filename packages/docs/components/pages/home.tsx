'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Target, Sparkles } from 'lucide-react'

export default function HomePage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="lg:pl-64">
        <div className="space-y-8 py-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
              Lumin
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance font-light">
              A fine-grained reactive JavaScript framework
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              Build fast, reactive applications without a Virtual DOM. Direct DOM updates powered by fine-grained reactivity.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={() => onNavigate?.('/getting-started')}
              className="gap-2"
            >
              Get Started <ArrowRight size={18} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate?.('/core-concepts')}
            >
              Learn Concepts
            </Button>
          </div>
        </div>
      </div>

      {/* What is Lumin */}
      <section className="lg:pl-64 space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-4">What is Lumin?</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Lumin</strong> is a lightweight, learning-driven JavaScript UI framework built from scratch to understand how modern frameworks work internally. Instead of re-rendering components or diffing Virtual DOM trees, Lumin uses <strong className="text-foreground">fine-grained reactivity</strong> to update <strong className="text-foreground">only the exact DOM nodes that depend on state</strong>.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="lg:pl-64 space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg border border-border bg-card">
            <div className="flex gap-3 mb-3">
              <Zap className="text-primary" size={20} />
              <h3 className="text-lg font-semibold text-foreground">No Virtual DOM</h3>
            </div>
            <p className="text-muted-foreground text-sm">Direct DOM updates without reconciliation overhead</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <div className="flex gap-3 mb-3">
              <Target className="text-primary" size={20} />
              <h3 className="text-lg font-semibold text-foreground">Fine-grained Reactivity</h3>
            </div>
            <p className="text-muted-foreground text-sm">Signals & effects for precise, efficient updates</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <div className="flex gap-3 mb-3">
              <Sparkles className="text-primary" size={20} />
              <h3 className="text-lg font-semibold text-foreground">Deterministic Updates</h3>
            </div>
            <p className="text-muted-foreground text-sm">Predictable behavior, easy to debug and test</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <div className="flex gap-3 mb-3">
              <ArrowRight className="text-primary" size={20} />
              <h3 className="text-lg font-semibold text-foreground">Learning-Focused</h3>
            </div>
            <p className="text-muted-foreground text-sm">Understand framework internals and design patterns</p>
          </div>
        </div>
      </section>

      {/* Quick Example */}
      <section className="lg:pl-64 space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Quick Example</h2>
        <div className="bg-secondary/20 rounded-lg p-6 border border-border overflow-x-auto">
          <pre className="text-sm font-mono text-foreground leading-relaxed">
            <code>{`import { signal, component, render } from "@nayan-ghate/lumin"

const Counter = component(() => {
  const count = signal(0)

  return (
    <button onClick={() => count(count() + 1)}>
      Count: {() => count()}
    </button>
  )
})

render(Counter, "#app")`}</code>
          </pre>
        </div>
      </section>

      {/* Mental Model */}
      <section className="lg:pl-64 space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Mental Model</h2>
        <div className="space-y-4">
          <p className="text-base md:text-lg text-muted-foreground"><strong className="text-foreground">Components</strong> define structure</p>
          <p className="text-base md:text-lg text-muted-foreground"><strong className="text-foreground">Signals</strong> define change</p>
          <p className="text-base md:text-lg text-muted-foreground"><strong className="text-foreground">Effects</strong> define reactions</p>
          <p className="text-base md:text-lg text-muted-foreground"><strong className="text-foreground">DOM updates</strong> are direct and precise</p>
        </div>
        <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="font-semibold text-foreground mb-4">No overhead—only what you need:</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex gap-2"><span className="text-primary">✓</span> No component re-renders</li>
            <li className="flex gap-2"><span className="text-primary">✓</span> No virtual diffing</li>
            <li className="flex gap-2"><span className="text-primary">✓</span> No reconciliation</li>
          </ul>
        </div>
      </section>

      {/* How Lumin Thinks Differently */}
      <section className="lg:pl-64 space-y-6">
        <h2 className="text-3xl font-bold text-foreground">How Lumin Thinks Differently</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Traditional Frameworks</h3>
            <div className="bg-secondary/20 rounded-lg p-4 border border-border">
              <p className="font-mono text-xs md:text-sm text-muted-foreground text-balance leading-relaxed">
                State → Re-render → Diff → Patch DOM
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Lumin</h3>
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <p className="font-mono text-xs md:text-sm text-foreground text-balance font-semibold leading-relaxed">
                State → Update dependent DOM
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-muted/30 rounded-lg border border-border">
          <p className="font-semibold text-foreground mb-3 text-sm">This approach provides:</p>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex gap-2"><span className="text-primary">→</span> Less computational work</li>
            <li className="flex gap-2"><span className="text-primary">→</span> Easier debugging & testing</li>
            <li className="flex gap-2"><span className="text-primary">→</span> More predictable behavior</li>
          </ul>
        </div>
      </section>

      {/* Best Used For */}
      <section className="lg:pl-64 space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Best Used For</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-3 text-sm">Ideal For</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex gap-2"><span className="text-primary">✓</span> Learning framework internals</li>
              <li className="flex gap-2"><span className="text-primary">✓</span> Understanding reactivity</li>
              <li className="flex gap-2"><span className="text-primary">✓</span> Portfolio projects</li>
              <li className="flex gap-2"><span className="text-primary">✓</span> Experimental apps</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-3 text-sm">Production Ready</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex gap-2"><span className="text-primary">→</span> Still under development</li>
              <li className="flex gap-2"><span className="text-primary">→</span> Not for enterprise apps</li>
              <li className="flex gap-2"><span className="text-primary">→</span> Limited ecosystem</li>
              <li className="flex gap-2"><span className="text-primary">→</span> Evolving API</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="lg:pl-64">
        <div className="p-8 bg-primary/5 rounded-lg border border-primary/20 text-center">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Lumin is not trying to replace existing frameworks.
          </p>
          <p className="text-xl font-semibold text-foreground text-balance mb-6">
            It exists to explore a different mental model and help developers truly understand how UI frameworks work.
          </p>
          <p className="text-lg font-bold text-primary">✨ Build less. Understand more.</p>
        </div>
      </section>
    </div>
  )
}
