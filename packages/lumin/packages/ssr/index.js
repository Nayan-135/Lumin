export function createElement(type, props = {}, ...children) {
  if (typeof type === "function") {
    return type(props)
  }

  return {
    type,
    props,
    children
  }
}

export { renderToString } from "./renderToString.js"
