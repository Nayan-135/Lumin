export const DevTools = {
  enabled: false,

  signals: new Set(),
  effects: new Set(),
  components: new Set(),

  enable() {
    this.enabled = true
    window.LuminDevTools = this
    console.info(
      "%c[Lumin DevTools] enabled",
      "color:#38bdf8;font-weight:bold"
    )
  },

  disable() {
    this.enabled = false
    this.signals.clear()
    this.effects.clear()
    this.components.clear()
    delete window.LuminDevTools
  },

  trackSignal(signal) {
    if (this.enabled) {
      this.signals.add(signal)
    }
  },

  trackEffect(effectFn) {
    if (this.enabled) {
      this.effects.add(effectFn)
    }
  },

  trackComponent(name) {
    if (this.enabled) {
      this.components.add(name)
    }
  },

  inspect() {
    const info = {
      signals: this.signals.size,
      effects: this.effects.size,
      components: [...this.components]
    }

    console.table(info)
    return info
  }
}
