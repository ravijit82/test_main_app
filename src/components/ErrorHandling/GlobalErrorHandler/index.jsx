import { ErrorBoundary } from "react-error-boundary";
import GlobalFalbackComponent from "@components/ErrorHandling/GlobalErrorHandler/GlobalFallbackComponent";
import LogError from "@utils/LogError";

function GlobalErrorHandler({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={GlobalFalbackComponent}
      onError={(error, errorInfo) => LogError({ error, errorInfo })}
      onReset={() => {
        window.location.reload();
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

export default GlobalErrorHandler;
