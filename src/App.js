import "./App.css";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import { AdminLayout } from "./pages/layout/AdminLayout";

function App() {
  return (
    <div>
      <Browser>
        <Routes>
          <Route path="/" element={<AdminLayout />} />
        </Routes>
      </Browser>
      <ToastContainer />
    </div>
  );
}

export default App;
