import RouteErrorHandler from "@components/ErrorHandling/RouteErrorHandler";
import ProtectedRoute from "@components/Routing/ProtectedRoute";
import LazyLoadRoute from "@components/Routing/LazyLoadRoute";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Login = LazyLoadRoute(lazy(() => import("@pages/Login")));
const Dashboard = LazyLoadRoute(lazy(() => import("@pages/Dashboard")));
const NotFound = LazyLoadRoute(lazy(() => import("@pages/NotFound")));

const defaultRoutes = [
  {
    path: "/",
    element: <Login />,
    errorElement: <RouteErrorHandler />,
  },
  {
    path: "dashboard",
    element: <ProtectedRoute Component={Dashboard} />,
    errorElement: <RouteErrorHandler />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <RouteErrorHandler />,
  },
];

export const getRoutesFromModule = (modules) => {
  let routes = [];
  modules.every((item) => {
    if (item?.routes) {
      routes = [
        ...routes,
        ...item?.routes({ ProtectedRoute, RouteErrorHandler }),
      ];
    }
    return true;
  });
  return routes;
};

const injectAdditionalRoutes = (routes = []) => {
  const [r1, r2, r3] = defaultRoutes;
  const newRoutes = [r1, r2, ...routes, r3];

  console.log("newRoutes", newRoutes);
  return newRoutes;
};

const getRouter = (additionalRoutes) => {
  return createBrowserRouter(injectAdditionalRoutes(additionalRoutes));
};

export default getRouter;
