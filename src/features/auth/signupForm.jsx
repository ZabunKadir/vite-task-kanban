import { useFormik } from "formik";
import { signupValidationSchema } from "@/validations/signupValidation";
import { CustomButton } from "@/components/button";
import { useSignUpMutation } from "@/stores/auth/authEndpoints";

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
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          E-posta
        </label>
        <input
          value={formik.values.email}
          type="email"
          name="email"
          onChange={formik.handleChange}
        ></input>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Şifre
        </label>
        <input
          value={formik.values.password}
          type="password"
          name="password"
          onChange={formik.handleChange}
        ></input>
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium">
          Şifre Tekrarı
        </label>
        <input
          type="password"
          value={formik.values.confirmPassword}
          name="confirmPassword"
          onChange={formik.handleChange}
        ></input>
      </div>

      <CustomButton
        onClick={() => formik.submitForm()}
        disabled={!formik.dirty}
        loading={isLoading}
      >
        {isLoading ? "Kayıt Oluyor..." : "Kayıt Ol"}
      </CustomButton>
    </form>
  );
};

export default SignupForm;
