import * as Yup from "yup";

export const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Geçerli bir e-posta giriniz")
    .required("E-posta adresi zorunludur"),
});
