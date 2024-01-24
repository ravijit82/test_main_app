import { useRouteError } from "react-router-dom";

function RouteErrorHandler() {
  const error = useRouteError();
  return (
    <div>
      <strong>{error?.message}</strong>
    </div>
  );
}

export default RouteErrorHandler;
