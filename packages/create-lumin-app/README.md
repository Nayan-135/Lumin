# create-lumin-app ⚡

Create a new **Lumin** application in seconds.

Lumin is a **fine-grained reactive UI framework** that updates the DOM
directly using signals — no Virtual DOM, no re-renders.

---

## 🚀 Getting Started

```bash
npx create-lumin-app my-app
cd my-app
npm install
npm run dev

Open:
👉 http://localhost:5173

✨ What You Get

⚡ Fine-grained reactivity (signals)
🧠 No Virtual DOM
🚫 No component re-renders
🎨 Clean default UI
🔍 Built-in DevTools
🧩 Fragment support (<>...</>)

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

🛠 DevTools

Enable DevTools automatically in development.

In browser console:

LuminDevTools.inspect()

📚 Documentation

Full documentation available at:

👉 https://lumin-docs.vercel.app/

🔗 Links

GitHub: https://github.com/Nayan-135/Lumin

Docs: https://lumin-docs.vercel.app/

👤 Author

Built by Nayan Ghate

📄 License

MIT


---

# 🔁 REQUIRED RELEASE STEPS (IMPORTANT)

Because we added **core features**:

### 1️⃣ Publish Lumin

```bash
cd Lumin
git add .
git commit -m "feat: fragment support and devtools improvements"
npm version patch
npm publish

2️⃣ Update template + README
cd create-lumin-app/template
npm install @nayan-ghate/lumin@latest

cd ..
git add .
git commit -m "feat: update template and README"
npm version patch
npm publish