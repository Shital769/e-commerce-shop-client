import "./App.css";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { NewCustomerAccountVerification } from "./pages/verify/NewCustomerAccountVerification";

import Dashboard from "./pages/dashboard/Dashboard";
import { ResetPassword } from "./pages/reset-password/ResetPassword";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Browser>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="verify" element={<NewCustomerAccountVerification />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Browser>
      <ToastContainer />
    </div>
  );
}

export default App;
