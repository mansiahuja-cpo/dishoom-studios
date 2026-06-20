"use client";

import { Component, type ReactNode } from "react";
import { makePage } from "@keystatic/next/ui/app";
import keystaticConfig from "../../../keystatic.config";

const KeystaticPage = makePage(keystaticConfig);

class DiagnosticErrorBoundary extends Component<
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

  componentDidCatch(error: Error, info: { componentStack?: string | null }) {
    console.error("KEYSTATIC DIAGNOSTIC CAUGHT ERROR:", error);
    console.error("COMPONENT STACK:", info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            padding: 40,
            fontFamily: "monospace",
            color: "red",
            background: "white",
            whiteSpace: "pre-wrap",
          }}
        >
          <h1>Keystatic threw an error (caught by diagnostic boundary):</h1>
          <p>{this.state.error.message}</p>
          <pre>{this.state.error.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function Page() {
  return (
    <DiagnosticErrorBoundary>
      <KeystaticPage />
    </DiagnosticErrorBoundary>
  );
}
