import { effect } from "../core/effect.js"

/**
 * Convert Lumin elements into HTML strings
 */
export function renderToString(node) {
  // Text
  if (typeof node === "string" || typeof node === "number") {
    return String(node)
  }

  // Reactive text
  if (typeof node === "function") {
    let value = ""
    effect(() => {
      value = node()
    })
    return String(value)
  }

  // Component
  if (typeof node === "function") {
    return renderToString(node({}))
  }

  // Element object (created by createElement)
  if (node && node.type) {
    const { type, props = {}, children = [] } = node

    let html = `<${type}`

    // Attributes
    for (const key in props) {
      if (key.startsWith("on")) continue
      html += ` ${key}="${props[key]}"`
    }

    html += ">"

    // Children
    for (const child of children) {
      html += renderToString(child)
    }

    html += `</${type}>`

    return html
  }

  return ""
}
