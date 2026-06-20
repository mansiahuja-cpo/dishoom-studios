"use client";

import { Component, type ReactNode } from "react";
import { makePage } from "@keystatic/next/ui/app";
import keystaticConfig from "../../../keystatic.config";

const KeystaticPage = makePage(keystaticConfig);

class KeystaticErrorBoundary extends Component<
  { children: ReactNode },
  { error: Error | null }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error("Keystatic admin UI failed to render:", error);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, fontFamily: "sans-serif" }}>
          <h1>Something went wrong loading the editor.</h1>
          <p>Try refreshing the page. If this keeps happening, check the browser console for details.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function Page() {
  return (
    <KeystaticErrorBoundary>
      <KeystaticPage />
    </KeystaticErrorBoundary>
  );
}
