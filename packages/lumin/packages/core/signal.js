import { schedule } from "../scheduler/index.js"
import { DevTools } from "../devtools/index.js"

let activeEffect = null

export function signal(initialValue) {
  let value = initialValue
  const subscribers = new Set()

  function read() {
    if (activeEffect) {
      subscribers.add(activeEffect)
    }
    return value
  }

  function write(newValue) {
    if (Object.is(value, newValue)) return
    value = newValue
    subscribers.forEach(effect => schedule(effect))
  }

  const accessor = function (newValue) {
    if (arguments.length === 0) {
      return read()
    } else {
      write(newValue)
    }
  }

  // 🔍 DevTools hook (safe)
  if (DevTools.enabled) {
    DevTools.trackSignal(accessor)
  }

  return accessor
}

export function setActiveEffect(effect) {
  activeEffect = effect
}
