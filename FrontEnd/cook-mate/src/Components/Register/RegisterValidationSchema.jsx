import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import RegisterForm from "./RegisterForm";

export default function RegisterValidationSchema(props) {
  let errors = props.errors;
  let isLoading = props.isLoading;



  const validationSchema = yup.object({
    username: yup
      .string()
      .min(3, "username must be at least 3 characters ")
      .max(10, "username must be at most 10 characters ")
      .required("username is required"),
    email: yup.string().email("email  Invalid").required("email required"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/,
        "Minimum five characters, at least one letter and one number"
      ),
    Repassword: yup
      .string()
      .oneOf(["password"])
      .oneOf([yup.ref("password ")], " password and RePassword doesn't match")
      .required("RePassword required"),
    age: yup
      .number()
      .min(16, "age must be at least 16 years ")
      .max(60, "age must be at most 60 years "),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      Repassword: "",
      age: "",
    },
    validationSchema,
    onSubmit: props.submitForm,
  });


  return (
    <>
      <RegisterForm errors={errors} isLoading={isLoading} formik={formik} />
    </>
  );
}
