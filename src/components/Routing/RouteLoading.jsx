export const ROUTE_LOADING_TYPE = {
  ROUTE_LAZY_LOADING: "ROUTE_LAZY_LOADING",
  ROUTE_PERMISSION_CHECK: "ROUTE_PERMISSION_CHECK",
};

function RouteLoading({ type = ROUTE_LOADING_TYPE.ROUTE_LAZY_LOADING }) {
  switch (type) {
    case ROUTE_LOADING_TYPE.ROUTE_PERMISSION_CHECK:
      return <p>Checking Permissions...</p>;
    default:
      return <p>Loading page...</p>;
  }
}

export default RouteLoading;
