import { useFormik } from "formik";
import { signupValidationSchema } from "@/validations/signupValidation";
import { useSignUpMutation } from "@/stores/auth/authEndpoints";
import CustomLink from "@/components/common/customLink";
import InputField from "@/components/common/input";
import CustomButton from "@/components/common/button";

const formFields = [
  [
    {
      label: "Name",
      name: "name",
    },
    {
      label: "Surname",
      name: "surname",
    },
  ],
  {
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
  },
];
const SignupForm = () => {
  const [signUp, { isLoading }] = useSignUpMutation();

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupValidationSchema,

    onSubmit: (values) => {
      signUp(values).then((res) => {
        if (!res.error) {
          formik.resetForm();
        }
      });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4 w-full max-w-sm mx-auto"
    >
      {formFields.map((item, index) => {
        if (Array.isArray(item)) {
          return (
            <div key={index} className="flex flex-col md:flex-row gap-4">
              {item?.map((subItem, subIndex) => (
                <InputField
                  key={subIndex}
                  label={subItem.label}
                  type={subItem.type}
                  name={subItem.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[subItem.name]}
                  error={
                    formik.touched[subItem.name] && formik.errors[subItem.name]
                  }
                />
              ))}
            </div>
          );
        }

        return (
          <InputField
            key={index}
            label={item.label}
            type={item.type}
            name={item.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[item.name]}
            error={formik.touched[item.name] && formik.errors[item.name]}
          />
        );
      })}

      <CustomButton
        type="submit"
        disabled={!formik.dirty || isLoading}
        loading={isLoading}
      >
        {isLoading ? "Registering..." : "Register"}
      </CustomButton>

      <div className="flex justify-end">
        <CustomLink to="/login">Do you have an account? Log in</CustomLink>
      </div>
    </form>
  );
};

export default SignupForm;
