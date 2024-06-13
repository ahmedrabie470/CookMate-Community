import React, {  useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginValidationSchema from "./LoginValidationSchema";
import { useDispatch } from "react-redux";
import { updateToken } from "../../Redux/userTokenSlice";
export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();
  const [errors, setErrors] = useState(null);

  const dispatch = useDispatch();

  async function submitForm(values) {
    try {
      setIsLoading(true);
      let { data } = await axios.post("http://localhost:3000/login", values);
      setIsLoading(false);
      dispatch(updateToken(data.token));
      navigate("/recentRecipes");
    } catch (err) {
      setIsLoading(false);
      if (err.response.status === 409) {
        setErrors("Incorrect Email Or Password");
      }else if (err.response.status ===403){
        setErrors("Email not verified , check your email and confirm email firstly");

      }
    }
  }

  return (
    <>
      <LoginValidationSchema
        errors={errors}
        isLoading={isLoading}
        submitForm={submitForm}
      />
    </>
  );
}
