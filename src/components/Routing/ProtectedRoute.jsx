import RouteRBACCheck from "@components/Routing/RouteRBACCheck";

function ProtectedRoute({ Component }) {
  // TODO: Add HOC to inject auth behaviour in component
  return (
    <RouteRBACCheck>
      <Component />
    </RouteRBACCheck>
  );
}

export default ProtectedRoute;
