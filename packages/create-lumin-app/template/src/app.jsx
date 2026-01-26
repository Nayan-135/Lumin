import {
  signal,
  component,
  createElement
} from "@nayan-ghate/lumin"

export default component(() => {
  const count = signal(0)

  return (
    <div className="page">
      <div className="card">
        {/* Header */}
        <div className="header">
          <h1 className="title">
            Lumin <span className="accent">⚡</span>
          </h1>
          <p className="version">v1.0.0</p>
        </div>

        {/* Tagline */}
        <p className="tagline">
          A fine-grained reactive JavaScript framework
        </p>

        {/* Description */}
        <div className="description">
          <p>
            Build fast, reactive applications without a Virtual DOM. 
            Lumin uses fine-grained reactivity to update only the 
            exact DOM nodes that depend on state.
          </p>
        </div>

        {/* Counter Demo */}
        <div className="demo-section">
          <h2 className="section-title">Live Demo</h2>
          
          <div className="counter-display">
            <span className="counter-label">Counter Value</span>
            <span className="counter-value">{() => count()}</span>
          </div>
          
          <div className="counter-buttons">
            <button
              className="btn btn-secondary"
              onClick={() => count(count() - 1)}
            >
              Decrement
            </button>
            <button
              className="btn btn-primary"
              onClick={() => count(count() + 1)}
            >
              Increment
            </button>
          </div>
        </div>

        {/* Key Features */}
        <div className="features-section">
          <h2 className="section-title">Key Features</h2>
          
          <div className="features">
            <div className="feature">
              <h3 className="feature-title">No Virtual DOM</h3>
              <p className="feature-desc">
                Direct DOM updates without reconciliation overhead
              </p>
            </div>
            
            <div className="feature">
              <h3 className="feature-title">Fine-grained Reactivity</h3>
              <p className="feature-desc">
                Signals and effects for precise, efficient updates
              </p>
            </div>
            
            <div className="feature">
              <h3 className="feature-title">Deterministic Updates</h3>
              <p className="feature-desc">
                Predictable behavior, easy to debug and test
              </p>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="workflow-section">
          <h2 className="section-title">How It Works</h2>
          <div className="workflow">
            <div className="workflow-item">
              <span className="workflow-step">1</span>
              <span className="workflow-text">State changes</span>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-item">
              <span className="workflow-step">2</span>
              <span className="workflow-text">Update dependent DOM</span>
            </div>
          </div>
          <p className="workflow-note">
            No component re-renders. No diffing. No reconciliation.
          </p>
        </div>

        {/* Links */}
        <div className="links">
          <a
            href="https://github.com/Nayan-135/Lumin"
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            GitHub
          </a>
          <a
            href="https://lumin-docs.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            Documentation
          </a>
          <a
            href="https://www.npmjs.com/package/@nayan-ghate/lumin"
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            npm Package
          </a>
        </div>

        {/* Footer */}
        <p className="footer">
          Created by <strong>Nayan Ghate</strong> · Learning-focused framework
        </p>
      </div>
    </div>
  )
})