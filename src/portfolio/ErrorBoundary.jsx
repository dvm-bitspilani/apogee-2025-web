import { Component } from "react";
export default class ErrorBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return this.props.fallback || <div className="archive-loading" role="alert"><p>This experience could not load on this device.</p><a href="/">Return to the city</a><p>Use Explore to open any archive page.</p></div>;
    return this.props.children;
  }
}
