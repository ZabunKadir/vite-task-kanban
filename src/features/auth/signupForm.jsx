import { useFormik } from "formik";
import { signupValidationSchema } from "@/validations/signupValidation";
import { CustomButton } from "@/components/button";
import { useSignUpMutation } from "@/stores/auth/authEndpoints";
import CustomLink from "@/components/link";
import InputField from "@/components/ınputfied.jsx";


const SignupForm = () => {
  const [signUp, { isLoading }] = useSignUpMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: (values) => {
      signUp(values).then((res) => {
        if (!res.error) {
          formik.resetForm();
        }
      });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4 w-full max-w-sm mx-auto"
    >
      <InputField
        label="Email"
        name="email"
        type="email"
        formik={formik}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        formik={formik}
      />
      <InputField
        label="Password Repeat"
        name="confirmPassword"
        type="password"
        formik={formik}
      />

      <CustomButton
        onClick={() => formik.submitForm()}
        disabled={!formik.dirty || isLoading}
        loading={isLoading}
      >
        {isLoading ? "Registering..." : "Register"}
      </CustomButton>

      <div className="flex justify-end">
        <CustomLink to="/login">Do you have an account? Log in</CustomLink>
      </div>
    </form>
  );
};

export default SignupForm;
