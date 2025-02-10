import * as Yup from "yup";

export const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
});
