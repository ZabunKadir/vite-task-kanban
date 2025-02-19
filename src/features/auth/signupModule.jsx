import SignupForm from "./signupForm";

const SignUpModule = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          Sign Up
        </h1>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUpModule;
