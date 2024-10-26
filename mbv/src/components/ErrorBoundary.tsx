import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(/* error: Error */) {
    return { hasError: true };
  }

  //   componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  //     console.error("Error caught by ErrorBoundary: ", error, errorInfo);
  //   }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong while loading the component.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
