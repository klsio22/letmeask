import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/rooms/new", element: <NewRoom /> },
  ]);

  return routes;
};

export { AppRoutes, Router };
