import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Geçerli bir e-posta adresi giriniz")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Geçerli bir e-posta adresi giriniz")
    .max(50, "E-posta 50 karakteri geçmemelidir")
    .required("E-posta zorunludur"),

  password: Yup.string()
    .min(8, "Şifre en az 8 karakter olmalıdır")
    .max(20, "Şifre en fazla 20 karakter olmalıdır")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Şifre en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir"
    )
    .required("Şifre zorunludur"),
});
