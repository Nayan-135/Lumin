# Lumin ⚡

**Lumin** is a fine-grained reactive UI framework that updates the DOM
directly using signals — without a Virtual DOM, without re-renders,
and without diffing.

> Components run once.  
> Only the exact DOM nodes that depend on state update.

---

## 🚀 What is Lumin?

Lumin is inspired by modern reactive systems (Solid, Svelte),
but built from scratch to focus on:

- Deterministic execution
- Minimal mental model
- Direct DOM updates
- Developer ergonomics

---

## ✨ Key Features

- ⚡ **Fine-grained reactivity** with signals
- 🧠 **No Virtual DOM**
- 🚫 **No component re-renders**
- 🧩 **Fragment support (`<>...</>`)**
- 🎨 **Style & className support**
- 🌙 **Dark / Light theme example**
- 🔍 **Built-in DevTools**
- 🛠 **CLI similar to create-react-app**
- 📦 **SSR-ready architecture**

---

## 📦 Packages in this Repository

This is a **monorepo** containing the full Lumin ecosystem.

1️⃣ `@nayan-ghate/lumin`
The core framework.

Includes:
- Signals & effects
- Renderer
- Scheduler
- DevTools
- SSR utilities

```bash
npm install @nayan-ghate/lumin


2️⃣ create-lumin-app

CLI to scaffold a new Lumin project.

npx create-lumin-app my-app
cd my-app
npm install
npm run dev

3️⃣ Documentation Website

Built with Next.js.

📚 Live docs:
👉 https://lumin-docs.vercel.app/

🧪 Example
import { signal, component } from "@nayan-ghate/lumin"

export default component(() => {
  const count = signal(0)

  return (
    <>
      <h1>Count: {() => count()}</h1>
      <button onClick={() => count(count() + 1)}>
        Increment
      </button>
    </>
  )
})

🔍 DevTools

Enable DevTools in development:

import { DevTools } from "@nayan-ghate/lumin"
DevTools.enable()


Then open browser console:

LuminDevTools.inspect()

🏗 Repository Structure
packages/
├── lumin/             # Framework
├── create-lumin-app/  # CLI
└── docs/              # Documentation site

👤 Author

Nayan Ghate

GitHub: https://github.com/Nayan-135

Docs: https://lumin-docs.vercel.app/

📄 License

MIT