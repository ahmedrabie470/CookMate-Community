import React, { useState } from "react";
import "./Register.module.css";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import RegisterValidationSchema from "./RegisterValidationSchema";
export default function Register() {


  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate()
  
  async function submitForm(values) {
    try {
      setIsLoading(true);
      let { data } = await axios.post("http://localhost:3000/register", values);
      if (data.message === "success") {
        setIsLoading(false);
        navigate("/login");
      }
    } catch (err) {
      if (err.response.status === 404) {
        setIsLoading(false);
        setErrors("Email already exists. Please use a different email.");
      }
    }
  }

  return (
    <>
 <RegisterValidationSchema errors={errors} isLoading={isLoading} submitForm={submitForm} />
    </>
  );
}
