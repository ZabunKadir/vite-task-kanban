import { useFormik } from "formik";
import { loginValidationSchema } from "@/validations/loginValidation"; // Validation şemanız
import InputField from "@/components/common/input";
import Checkbox from "@/components/common/checkbox";
import CustomButton from "@/components/common/button";
import CustomLink from "@/components/common/customLink";

const LoginForm = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleCheckboxChange = (name, checked) => {
    if (checked) {
      localStorage.setItem("email", formik.values.email);
    } else {
      localStorage.removeItem("email");
    }
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4 w-full max-w-sm mx-auto"
    >
      <InputField
        label="Email/Username"
        type="text"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <Checkbox
        label="Remember me"
        name="rememberEmail"
        onCheck={handleCheckboxChange}
      />

      <CustomButton type="submit" disabled={!formik.dirty}>
        Login
      </CustomButton>

      <div className="flex flex-col justify-center">
        <CustomLink to="/reset-password">I Forgot My Password</CustomLink>
        <CustomLink to="/signup">Don't have an account? Sign Up</CustomLink>
      </div>
    </form>
  );
};

export default LoginForm;
