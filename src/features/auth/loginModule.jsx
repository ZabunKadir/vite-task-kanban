import LoginForm from "./loginForm";

const LoginModule = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Giriş Yap</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginModule;
