import RouteErrorHandler from "@components/ErrorHandling/RouteErrorHandler";
import ProtectedRoute from "@components/Routing/ProtectedRoute";
import LazyLoadRoute from "@components/Routing/LazyLoadRoute";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Login = LazyLoadRoute(lazy(() => import("@pages/Login")));
const Dashboard = LazyLoadRoute(lazy(() => import("@pages/Dashboard")));
const NotFound = LazyLoadRoute(lazy(() => import("@pages/NotFound")));

const routes = [
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

const router = createBrowserRouter(routes);

export default router;
