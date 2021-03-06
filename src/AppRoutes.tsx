import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/rooms/new", element: <NewRoom /> },
    { path: "/rooms/:id", element: <Room /> },
    { path: "/admin/rooms/:id" , element:<AdminRoom/> },
  ]);

  return routes;
};

export { AppRoutes, Router };
