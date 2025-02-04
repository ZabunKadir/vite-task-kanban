import PublicLayout from "@/layout/PublicLayout";
import LoginForm from "@/components/forms/LoginForm";

const LoginPage = () => {
  const handleLogin = (values, { setSubmitting }) => {
    console.log("Giriş Bilgileri:", values);
    // Burada API isteği yapılabilir
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  };

  return (
    <PublicLayout>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Giriş Yap</h1>
          <LoginForm onSubmit={handleLogin} />
        </div>
      </div>
    </PublicLayout>
  );
};

export default LoginPage;
