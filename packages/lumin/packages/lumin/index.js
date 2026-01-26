import { unmount } from "../renderer/unmount.js"
import { hydrate } from "../renderer/hydrate.js"

export function render(App, target) {
  const root =
    typeof target === "string"
      ? document.querySelector(target)
      : target

  if (!root) {
    throw new Error("Lumin: target element not found")
  }

  while (root.firstChild) {
    unmount(root.firstChild)
    root.removeChild(root.firstChild)
  }

  const appEl = App()
  root.appendChild(appEl)

  return {
    unmount() {
      unmount(appEl)
      root.removeChild(appEl)
    }
  }
}

// 🔥 NEW: hydration API
export function hydrateApp(App, target) {
  hydrate(App, target)
}
