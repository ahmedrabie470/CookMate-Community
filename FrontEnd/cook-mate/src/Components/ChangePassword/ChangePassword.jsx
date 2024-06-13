import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken, updateToken } from "../../Redux/userTokenSlice";
import { useDispatch } from "react-redux";

export default function ChangePassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function Logout() {
    dispatch(updateToken(""));
    localStorage.removeItem("token");
    navigate("/login");
  }
  async function changePassword(values) {
    const userToken = localStorage.getItem("token");
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `http://localhost:3000/changePassword`,
        values,
        {
          headers: {
            token: userToken,
            "Content-Type": "application/json",
          },
        }
      );
      setIsLoading(false);
      Logout();
    } catch (err) {
      setIsLoading(false);

      if (err.response.status === 401) {
        setErrors("Incorrect Password");
      } else if (err.response.status === 403) {
        setErrors(
          "Email not verified , check your email and confirm email firstly"
        );
      }
    }
  }
  const passwordSchema = yup.object({
    password: yup
      .string()
      .required("password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/,
        "Minimum five characters, at least one letter and one number"
      ),
    rePassword: yup
      .string()
      .oneOf(["password"])
      .oneOf([yup.ref("password ")], " password and RePassword doesn't match")
      .required("RePassword required"),
    newPassword: yup
      .string()
      .required("password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/,
        "Minimum five characters, at least one letter and one number"
      ),
  });
  let formik = useFormik({
    initialValues: {
      password: "",
      rePassword: "",
      newPassword: "",
    },
    validationSchema: passwordSchema,
    onSubmit: changePassword,
  });
  return (
    <>
      <div className="home">
        <div className="layer">
          <div className="w-50  rounded-4 mx-auto">

            <form onSubmit={formik.handleSubmit}>
              <div>
                <h3 className="head pt-5">Update Your Password Now</h3>
            {errors ? <div className="alert alert-dark">{errors}</div> : ""}
                <label className="text-white" htmlFor="password">
                  {" "}
                  Old Password
                </label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="form-control  rounded-5 "
                  name="password"
                  type="password"
                  placeholder="Type Your Old Password"
                />
                {formik.errors.password && formik.touched.password ? (
                  <div className="alert alert-dark   mt-2">
                    {formik.errors.password}
                  </div>
                ) : (
                  ""
                )}

                <label className="text-white" htmlFor="rePassword">
                  {" "}
                  RePassword
                </label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.rePassword}
                  className="form-control  rounded-5 "
                  name="rePassword"
                  type="password"
                  placeholder="Type Your Old Password Again"
                />
                {formik.errors.rePassword && formik.touched.rePassword ? (
                  <div className="alert alert-dark   mt-2">
                    {formik.errors.rePassword}
                  </div>
                ) : (
                  ""
                )}
                <label className="text-white" htmlFor="newPassword">
                  {" "}
                  New Password
                </label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.newPassword}
                  className="form-control  rounded-5 "
                  name="newPassword"
                  type="password"
                  placeholder="Type Your New Password"
                />
                {formik.errors.newPassword && formik.touched.newPassword ? (
                  <div className="alert alert-dark   mt-2">
                    {formik.errors.newPassword}
                  </div>
                ) : (
                  ""
                )}

                {isLoading ? (
                  <>
                    <button className="btn mt-3  secondary text-center text-white">
                      <i className="fas fa-spinner fa-spin"></i>
                    </button>
                  </>
                ) : (
                  <button
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}
                    className="btn btn-dark mt-3  secondary text-center text-white"
                  >
                    Update {">"}{" "}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
