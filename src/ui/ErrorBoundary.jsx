import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    return this.state.failed ? this.props.fallback || <main className="page-error" role="alert"><p>This page could not load.</p><a href="/">Return home</a></main> : this.props.children;
  }
}
