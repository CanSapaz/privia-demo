import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../components/Input";



function Login() {
  let initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("Username Required"),
    password: Yup.string().required("Password Required"),
  });
  const { handleSubmit, handleChange, values, errors,} = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      alert(`Username: ${values.username}\nPassword: ${values.password}`)
    },
  });

  return (
    <div className="login-page">
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <Input
              name={"username"}
              label={"Username"}
              error={errors.username}
              id={"username"}
              handleChange={handleChange}
              value={values.username}
              inputType={"text"}
            />
            <Input
              name={"password"}
              label={"Password"}
              error={errors.password}
              id={"password"}
              handleChange={handleChange}
              value={values.password}
              inputType={"password"}
            />
          </form>
        </div>
      </div>
  );
}

export default Login;
