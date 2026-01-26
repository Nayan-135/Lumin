import { effect } from "../core/effect.js"
import { DevTools } from "../devtools/index.js"

// Fragment symbol
export const Fragment = Symbol("LuminFragment")

export function createElement(type, props = {}, ...children) {
  // 🔹 Fragment support
  if (type === Fragment) {
    const fragment = document.createDocumentFragment()

    children.flat().forEach(child => {
      if (typeof child === "function") {
        const text = document.createTextNode("")
        effect(() => {
          text.textContent = child()
        })
        fragment.appendChild(text)
      } else {
        fragment.appendChild(
          child instanceof Node
            ? child
            : document.createTextNode(child)
        )
      }
    })

    return fragment
  }

  // 🔹 Component
  if (typeof type === "function") {
    DevTools.trackComponent(type.name || "Anonymous")
    return type(props)
  }

  const el = document.createElement(type)
  const cleanups = []

  // ----------------------------
  // Props
  // ----------------------------
  for (const key in props) {
    const value = props[key]

    // Events
    if (key.startsWith("on") && typeof value === "function") {
      const event = key.slice(2).toLowerCase()
      el.addEventListener(event, value)
      cleanups.push(() => el.removeEventListener(event, value))
      continue
    }

    // className
    if (key === "className") {
      el.className = value
      continue
    }

    // style (string + object)
    if (key === "style") {
      if (typeof value === "string") {
        el.style.cssText = value
      } else if (typeof value === "object") {
        for (const styleKey in value) {
          el.style[styleKey] = value[styleKey]
        }
      }
      continue
    }

    // Reactive props
    if (typeof value === "function") {
      const stop = effect(() => {
        el[key] = value()
      })
      cleanups.push(stop)
      continue
    }

    // Default
    el[key] = value
  }

  // ----------------------------
  // Children
  // ----------------------------
  children.flat().forEach(child => {
    if (typeof child === "function") {
      const text = document.createTextNode("")
      const stop = effect(() => {
        text.textContent = child()
      })
      cleanups.push(stop)
      el.appendChild(text)
      return
    }

    el.appendChild(
      child instanceof Node
        ? child
        : document.createTextNode(child)
    )
  })

  // Cleanup
  el.__cleanup = () => cleanups.forEach(fn => fn())

  return el
}
