import { AppRoutes, Router } from "./AppRoutes";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {

  return (
    <Router>
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </Router>
  );
}

export default App;
