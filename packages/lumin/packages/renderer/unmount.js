export function unmount(el) {
  if (el.__cleanup) {
    el.__cleanup()
  }

  while (el.firstChild) {
    unmount(el.firstChild)
    el.removeChild(el.firstChild)
  }
}
