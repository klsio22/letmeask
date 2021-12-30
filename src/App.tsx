import { createContext, useState } from "react";

import { AppRoutes, Router } from "./AppRoutes";

export const TestContext = createContext({} as any);

function App() {
  const [value, setValue] = useState("Teste")

  return (
    <Router>
      <TestContext.Provider value={{value,setValue}}>
        <AppRoutes />
      </TestContext.Provider>
    </Router>
  );
}

export default App;
