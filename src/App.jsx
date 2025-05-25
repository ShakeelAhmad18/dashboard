import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Officebuget from "./pages/Officebudget"
import CreateBudget from "./pages/CreateBudget";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="office-budget" element={<Officebuget />} />
            <Route path="create-budget" element={<CreateBudget />} />
            <Route path="*" element={<p>Page Not Found</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
