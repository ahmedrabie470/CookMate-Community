import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import LoginForm from './LoginForm';
export default function LoginValidationSchema(props) {
let errors = props.errors
let isLoading = props.isLoading


const validationSchema = yup.object({
    email: yup.string().email("email  Invalid").required("email required"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/,
        "Minimum five characters, at least one letter and one number"
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: props.submitForm,
  });
  return (
    <>
    <LoginForm formik={formik} errors={errors} isLoading = {isLoading}/>
    </>
  )
}
