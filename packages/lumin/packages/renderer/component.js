import { DevTools } from "../devtools/index.js"

export function component(fn) {
  const name = fn.name || "AnonymousComponent"

  // 🔍 DevTools hook
  DevTools.trackComponent(name)

  return function Component(props = {}) {
    return fn(props)
  }
}
