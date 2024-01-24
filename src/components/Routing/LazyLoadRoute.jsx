import { Suspense } from "react";
import RouteLoading, {
  ROUTE_LOADING_TYPE,
} from "@components/Routing/RouteLoading";

const LazyLoadRoute = (Component) =>
  // eslint-disable-next-line func-names
  function (props) {
    return (
      <Suspense
        fallback={<RouteLoading type={ROUTE_LOADING_TYPE.ROUTE_LAZY_LOADING} />}
      >
        <Component {...props} />
      </Suspense>
    );
  };

export default LazyLoadRoute;
