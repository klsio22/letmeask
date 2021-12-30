import {BrowserRouter as Router, useRoutes } from "react-router-dom";

import { Home } from "./pages/home";
import { NewRoom } from "./pages/NewRoom";

const AppRoutes = () =>{
  let routes = useRoutes([
    {path:"/", element: <Home />},
    {path:"/newRoom", element: <NewRoom />}
  ])

  return routes
} 

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
