const queue = new Set()
let isFlushing = false

export function schedule(effect) {
  queue.add(effect)

  if (!isFlushing) {
    isFlushing = true
    queueMicrotask(flush)
  }
}

function flush() {
  queue.forEach(effect => effect())
  queue.clear()
  isFlushing = false
}
