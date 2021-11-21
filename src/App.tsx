import { Routes, Route, useRoutes } from "react-router-dom";
import { Home } from "./pages/home";

/* import { NewRoom } from "./pages/NewRoom";
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
