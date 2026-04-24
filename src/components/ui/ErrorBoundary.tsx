"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

const defaultFallback = (
  <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
    <div className="text-center p-8">
      <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Oops!</h2>
      <p className="text-white/80 mb-6">Etwas ist schief gelaufen.</p>
      <button
        onClick={() => window.location.reload()}
        className="bg-brand-primary text-black px-6 py-3 font-black uppercase tracking-widest hover:bg-brand-primary/90 transition"
      >
        Seite neu laden
      </button>
    </div>
  </div>
);

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || defaultFallback;
    }

    return this.props.children;
  }
}
