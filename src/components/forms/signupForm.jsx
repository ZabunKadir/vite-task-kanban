import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupValidationSchema } from "@/validation/signupValidation";
import { CustomButton } from "../button";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupValidationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4 w-full max-w-sm mx-auto">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium">
              Ad
            </label>
            <Field
              type="text"
              name="firstName"
              placeholder="Adınızı girin"
              className="w-full border rounded-md p-2 mt-1  focus:ring-black"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium">
              Soyad
            </label>
            <Field
              type="text"
              name="lastName"
              placeholder="Soyadınızı girin"
              className="w-full border rounded-md p-2 mt-1 focus:ring-black"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              E-posta
            </label>
            <Field
              type="email"
              name="email"
              placeholder="E-posta adresinizi girin"
              className="w-full border rounded-md p-2 mt-1 focus:ring-black"
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
              placeholder="Şifrenizi girin"
              className="w-full border rounded-md p-2 mt-1 focus:ring-black"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium"
            >
              Şifre Tekrarı
            </label>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Şifrenizi tekrar girin"
              className="w-full border rounded-md p-2 mt-1 focus:ring-black"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <CustomButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Kayıt Oluyor..." : "Kayıt Ol"}
          </CustomButton>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
