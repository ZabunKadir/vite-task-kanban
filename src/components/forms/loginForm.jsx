import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidationSchema } from "@/validation/loginValidation";
import { CustomButton } from "../button";
import CustomLink from "../link";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4 w-full max-w-sm mx-auto ">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              E-posta/Kullanıcı adı
            </label>
            <Field
              type="email"
              name="email"
              placeholder="E-posta ya da kullanıcı adınızı yazın"
              className="w-full border rounded-md p-2 mt-1  focus:ring-black"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Şifre
            </label>
            <Field
              type="password"
              name="password"
              placeholder="Şifrenizi yazın"
              className="w-full border rounded-md p-2 mt-1  focus:ring-black"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <CustomButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Giriş Yapılıyor..." : "Giriş Yap"}
          </CustomButton>
          <div className="">
            <CustomLink to="/reset-password"> Şifremi Unuttum</CustomLink>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
