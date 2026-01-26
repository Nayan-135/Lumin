🌟 Lumin

A lightweight, fine-grained reactive JavaScript UI framework with no Virtual DOM, SSR, and diff-less hydration.

Lumin is a learning-driven framework built from scratch to deeply understand how modern UI frameworks work internally — from reactivity to scheduling, rendering, SSR, hydration, and DevTools.

✨ Features

⚡ Fine-grained reactivity (signals & effects)
🚫 No Virtual DOM
🧠 Deterministic updates
🧵 Microtask-based batching scheduler
🧩 Function-based components
🧼 Automatic cleanup & lifecycle handling
🧪 DevTools introspection
🌍 Server-Side Rendering (SSR)
💧 Diff-less hydration
🧱 JSX support (compile-time)

📦 Project Structure
Lumin/
├─ packages/
│  ├─ core/        # signals, effects
│  ├─ scheduler/   # batching system
│  ├─ renderer/    # DOM renderer, components, hydrate
│  ├─ ssr/         # renderToString
│  ├─ devtools/    # debugging hooks
│  └─ lumin/       # public framework API
│
├─ examples/
│  ├─ app.jsx
│  ├─ app.js
│  ├─ jsx.html
│  ├─ ssr.js
│  └─ hydrate.html
│
├─ docs/
├─ test-core.js
├─ .babelrc
└─ package.json

🚀 Quick Start (Client Rendering)

import { signal } from "./packages/core/index.js"
import { component } from "./packages/renderer/index.js"
import { render } from "./packages/lumin/index.js"

const Counter = component(() => {
  const count = signal(0)

  return (
    <button onClick={() => count(count() + 1)}>
      Count: {() => count()}
    </button>
  )
})

render(Counter, "#app")

🧠 Core Concepts

Signals
const count = signal(0)
count()     // read
count(10)   // write

Signals track dependencies automatically and notify only what depends on them.

Effects

effect(() => {
  console.log(count())
})

Runs once initially
Re-runs only when dependencies change
Supports cleanup

🧵 Scheduler (Batching)

Multiple updates in the same tick are batched:

count(1)
count(2)
count(3)
// effect runs once with value = 3

Implemented using microtasks, not timeouts.

🧩 Components

Components are plain functions:
const Hello = component(() => {
  return <h1>Hello Lumin</h1>
})

Components run once
No re-rendering
DOM updates happen directly via signals

🧼 Lifecycle & Cleanup

Effects and DOM bindings are automatically cleaned up on unmount:

effect(() => {
  const id = setInterval(...)
  return () => clearInterval(id)
})

Unmount safely:

unmount(node)

🧪 DevTools (Step 9)

Enable DevTools in development:
import { DevTools } from "./packages/devtools/index.js"

DevTools.enable()
window.LuminDevTools = DevTools

Inspect at runtime (browser console):

LuminDevTools.inspect()

Example output:

{
  signals: 2,
  effects: 4,
  components: ["App", "Counter"]
}

🌍 Server-Side Rendering (SSR)

Render components on Node.js:

import { renderToString } from "./packages/ssr/index.js"
const html = renderToString(App)
console.log(html)

Output:

<div>
  <h1>Lumin SSR</h1>
  <h2>Count: 5</h2>
</div>


✅ No DOM
✅ Same component logic
✅ Same signals

💧 Diff-less Hydration (Step 11)

Attach reactivity to existing SSR HTML without replacing DOM:

import { hydrateApp } from "./packages/lumin/index.js"
hydrateApp(App, "#app")

✔ No DOM diff
✔ No re-render
✔ Instant interactivity

🧪 Testing

Core reactivity test:
node test-core.js

❓ Why Lumin?
Feature	React	Lumin
Virtual DOM	Yes	❌ No
Re-rendering	Yes	❌ No
Fine-grained updates	Partial	✅ Yes
Deterministic	❌	✅
Learning value	Medium	🔥 High

Lumin is designed to understand frameworks, not hide them.

🛣 Roadmap

DevTools UI (browser extension)
SSR streaming
Hydration optimizations
Scheduler priorities
npm publishing
Documentation website

🎓 Learning Outcomes

Building Lumin demonstrates understanding of:
Reactive systems
Dependency tracking
Scheduling & batching
DOM rendering internals
SSR & hydration
Framework architecture design

📜 License

MIT License
Free to use, modify, and learn from.
