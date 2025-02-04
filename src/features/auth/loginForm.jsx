import { useFormik } from "formik";
import { loginValidationSchema } from "@/validations/loginValidation";
import { CustomButton } from "@/components/button";
import CustomLink from "@/components/link";

const LoginForm = ({}) => {
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

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4 w-full max-w-sm mx-auto "
    >
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          E-posta/Kullanıcı adı
        </label>
        <input type="text" name="email" onChange={formik.handleChange}></input>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Şifre
        </label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
        ></input>
      </div>

      <CustomButton type="submit" disabled={!formik.dirty}>
        Login
      </CustomButton>
      <div className="">
        <CustomLink to="/reset-password"> Şifremi Unuttum</CustomLink>
      </div>
    </form>
  );
};

export default LoginForm;
