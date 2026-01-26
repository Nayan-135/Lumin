import { setActiveEffect } from "./signal.js"
import { DevTools } from "../devtools/index.js"

export function effect(fn) {
  let cleanup

  const wrapped = () => {
    if (cleanup) cleanup()

    setActiveEffect(wrapped)
    cleanup = fn()
    setActiveEffect(null)
  }

  // 🔍 DevTools hook (safe)
  if (DevTools.enabled) {
    DevTools.trackEffect(wrapped)
  }

  wrapped()

  return () => {
    if (cleanup) cleanup()
  }
}
