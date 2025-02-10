import { useFormik } from "formik";
import { signupValidationSchema } from "@/validations/signupValidation";
import { useSignUpMutation } from "@/stores/auth/authEndpoints";
import CustomLink from "@/components/common/customLink";
import InputField from "@/components/common/input";
import CustomButton from "@/components/common/button";

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
  console.log(isLoading, !formik.dirty);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4 w-full max-w-sm mx-auto"
    >
      <InputField
        label="Email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputField
        label="Password Repeat"
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <CustomButton
        type="submit"
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
