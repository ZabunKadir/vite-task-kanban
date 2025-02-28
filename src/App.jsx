import { Routes, Route } from "react-router";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignUp from "./pages/signup";
import ResetPassword from "./pages/reset-password";
import { ThemeProvider } from "./context/themeContext";
import { ToastContainer } from "react-toastify";
import SolutionsPage from "./pages/solutions";
import ExampleSolutionPage from "./pages/solutions/example-solution";
import DashboardPage from "./pages/dashboard";

function App() {
  return (
    <ThemeProvider>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="solutions">
          <Route index element={<SolutionsPage />} />
          <Route path="example-solution" element={<ExampleSolutionPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
