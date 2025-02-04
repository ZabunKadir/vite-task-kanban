import PublicLayout from "@/layout/PublicLayout";
import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
const ForgotPasswordPage = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("E-posta ile şifre sıfırlama linki gönderildi:", values.email);
    setSubmitting(false);
  };
  return (
    <PublicLayout>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Şifremi Unuttum
          </h1>
          <ForgotPasswordForm onSubmit={handleSubmit} />
        </div>
      </div>
    </PublicLayout>
  );
};

export default ForgotPasswordPage;
