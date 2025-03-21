import * as Yup from "yup";

export const signupValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/,
      "First name should only contain letters"
    )
    .min(2, "First name must be at least 2 characters long")
    .max(30, "First name must not exceed 30 characters")
    .required("Name is required"),

  surname: Yup.string()
    .matches(
      /^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/,
      "Last name should only contain letters"
    )
    .min(2, "Last name must be at least 2 characters long")
    .max(30, "Last name must not exceed 30 characters")
    .required("Surname is required"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address")
    .max(50, "Email must not exceed 50 characters")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must not exceed 20 characters")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    // )
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("Password confirmation is required"),
});
