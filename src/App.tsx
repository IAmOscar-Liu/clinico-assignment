import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CodeProvider from "./context/CodeProvider.tsx";
import { ApiParentResult, ApiResult } from "./pages/ApiResult.tsx";
import Home from "./pages/Home.tsx";

function App() {
  return (
    <CodeProvider>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {process.env.NODE_ENV === "development" && (
              <>
                <Route path="api/policyholders" element={<ApiResult />} />
                <Route
                  path="api/policyholders/:code/top"
                  element={<ApiParentResult />}
                />
              </>
            )}
          </Route>
        </Routes>
      </Router>
    </CodeProvider>
  );
}

export default App;
