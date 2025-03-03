import AuthHeader from "@/components/layout/authHeader";
import AuthSidebar from "@/components/layout/authSidebar";

const AuthLayout = ({ children }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <AuthHeader />
      <AuthSidebar />
      {children}
    </main>
  );
};

export default AuthLayout;
