import * as Yup from "yup";

export const signupValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/, "Ad yalnızca harf içermelidir")
    .min(2, "Ad en az 2 karakter olmalıdır")
    .max(30, "Ad en fazla 30 karakter olabilir"),

  lastName: Yup.string()
    .matches(/^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/, "Soyad yalnızca harf içermelidir")
    .min(2, "Soyad en az 2 karakter olmalıdır")
    .max(30, "Soyad en fazla 30 karakter olabilir"),
  email: Yup.string()
    .email("Geçerli bir e-posta adresi giriniz")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Geçerli bir e-posta adresi giriniz")
    .max(50, "E-posta 50 karakteri geçmemelidir")
    .required("E-posta zorunludur"),

  password: Yup.string()
    .min(6, "Şifre en az 6 karakter olmalıdır")
    .max(20, "Şifre en fazla 20 karakter olmalıdır")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   "Şifre en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir"
    // )
    .required("Şifre zorunludur"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Şifreler eşleşmiyor")
    .required("Şifre tekrarı zorunludur"),
});
