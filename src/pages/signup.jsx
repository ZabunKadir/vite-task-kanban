import SignUpModule from "@/features/auth/signupModule";
import PublicLayout from "@/layout/PublicLayout";

const SignupPage = () => {
  return (
    <PublicLayout>
      <SignUpModule />
    </PublicLayout>
  );
};

export default SignupPage;
