import ForgotPasswordForm from "@/features/auth/forgotPasswordForm";
import PublicLayout from "@/layout/PublicLayout";

const ForgotPasswordPage = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("E-posta ile şifre sıfırlama linki gönderildi:", values.email);
    setSubmitting(false);
  };

  return (
    <PublicLayout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
            Şifremi Unuttum
          </h1>
          <ForgotPasswordForm onSubmit={handleSubmit} />
        </div>
      </div>
    </PublicLayout>
  );
};

export default ForgotPasswordPage;
