import { effect } from "../core/effect.js"

/**
 * Attach reactivity to existing DOM without replacing it
 */
export function hydrate(component, root) {
  const dom = typeof root === "string"
    ? document.querySelector(root)
    : root

  if (!dom) {
    throw new Error("Lumin hydrate: root not found")
  }

  let cursor = dom.firstChild

  function walk(vnode) {
    // Text binding
    if (typeof vnode === "function") {
      const textNode = cursor
      effect(() => {
        textNode.textContent = vnode()
      })
      cursor = cursor.nextSibling
      return
    }

    // Plain text
    if (typeof vnode === "string" || typeof vnode === "number") {
      cursor = cursor.nextSibling
      return
    }

    // Component
    if (typeof vnode === "function") {
      walk(vnode({}))
      return
    }

    // Element
    if (vnode && vnode.type) {
      const el = cursor
      cursor = el.firstChild

      for (const child of vnode.children || []) {
        walk(child)
      }

      cursor = el.nextSibling
    }
  }

  const tree = component()
  walk(tree)
}
