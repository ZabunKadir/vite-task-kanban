import { Formik, Form, Field, ErrorMessage } from "formik";
import { forgotPasswordValidationSchema } from "@/validations/forgotPasswordValidation";
import CustomButton from "@/components/common/button";

const initialValues = {
  email: "",
};
const ForgotPasswordForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={forgotPasswordValidationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4 w-full max-w-sm mx-auto">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full border rounded-md p-2 mt-1  focus:ring-black"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <CustomButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending Email..." : "Reset Password"}
          </CustomButton>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
