import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignUp from "./pages/signup";
import ResetPassword from "./pages/reset-password";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
