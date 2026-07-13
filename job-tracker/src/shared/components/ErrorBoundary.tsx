import { Component, type ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

// Wrapper component to use hooks in class component
function ErrorBoundaryWrapper({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <ErrorBoundaryContent isDark={isDark} onRefresh={handleRefresh}>
      {children}
    </ErrorBoundaryContent>
  );
}

interface ErrorBoundaryContentProps {
  children: ReactNode;
  isDark: boolean;
  onRefresh: () => void;
}

class ErrorBoundaryContent extends Component<ErrorBoundaryContentProps, State> {
  constructor(props: ErrorBoundaryContentProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      const { isDark, onRefresh } = this.props;
      return (
        <div
          className={`
          min-h-screen flex items-center justify-center
          ${
            isDark
              ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
              : "bg-gradient-to-b from-white via-blue-50/30 to-slate-50"
          }
        `}
        >
          <div
            className={`
            text-center rounded-lg border p-8 max-w-md
            ${
              isDark
                ? "border-slate-700 bg-slate-900/50"
                : "border-slate-200 bg-white/50"
            }
          `}
          >
            <h1
              className={`text-2xl font-bold font-poppins mb-3 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Something went wrong
            </h1>
            <p
              className={`text-sm mb-6 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              We encountered an unexpected error. Please try refreshing the
              page.
            </p>
            <button
              onClick={onRefresh}
              className={`
                inline-flex items-center justify-center rounded-lg px-6 py-2.5 text-sm font-medium transition-colors
                ${
                  isDark
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }
              `}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Export wrapper to handle hooks
export default function ErrorBoundary({ children }: Props) {
  return <ErrorBoundaryWrapper>{children}</ErrorBoundaryWrapper>;
}
