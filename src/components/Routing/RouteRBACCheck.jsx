import RouteLoading, {
  ROUTE_LOADING_TYPE,
} from "@components/Routing/RouteLoading";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

function RouteRBACCheck({ children }) {
  const { showBoundary } = useErrorBoundary();
  const [isCheckingRBAC, setIsCheckingRBAC] = useState(true);
  const [hasValidRBAC, setHasValidRBAC] = useState(false);

  useEffect(() => {
    async function checkAccess() {
      const mockHasAccess = true;

      setIsCheckingRBAC(false);
      setHasValidRBAC(mockHasAccess);

      if (!mockHasAccess) {
        showBoundary({
          message: "Permission Denied",
        });
      }
    }
    checkAccess();
  }, []);

  if (isCheckingRBAC) {
    return <RouteLoading type={ROUTE_LOADING_TYPE.ROUTE_PERMISSION_CHECK} />;
  }

  if (hasValidRBAC) return children;

  return null;
}

export default RouteRBACCheck;
