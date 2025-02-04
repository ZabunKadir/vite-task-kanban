import PublicLayout from "@/layout/PublicLayout";
import SignupForm from "@/components/forms/SignupForm";

const SignupPage = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Kayıt işlemi sonrası form verilerini console'da görmek
    console.log("Kayıt verileri:", values);

    // Burada API isteği yapılabilir, ardından isSubmitting durumunu false yapıyoruz
    setSubmitting(false); // Bu, butonun "Kayıt Oluyor..." kısmını kaldırır
  };

  return (
    <PublicLayout>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Kayıt Ol</h1>
          <SignupForm onSubmit={handleSubmit} />
        </div>
      </div>
    </PublicLayout>
  );
};

export default SignupPage;
