import React from 'react'
import { Link } from 'react-router-dom'
import mainImage from "../../Assets/images/MainChars.png";

export default function RegisterForm(props) {
  console.log(props);
  
  return (
    <>
    
  <div className="container animate__animated animate__fadeIn p-4 ">
        {props.errors != null ? (
          <>
            <div className="alert alert-dark w-50">{props.errors}</div>
          </>
        ) : (
          ""
        )}
        <div className="row d-flex align-items-center justify-content-center animate__animated animate__fadeIn">
          <div className="col-md-8">
            <h1 className="shade3">
              Join the CookMate
              <br />
              Community!
            </h1>
            <h6 className="shade3 mb-4">Create your account</h6>
            <form className="form-outline" onSubmit={props.formik.handleSubmit}>
              <div className="form-group ">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  className="form-control mb-3 w-50 "
                  placeholder="Type your name"
                  onBlur={props.formik.handleBlur}
                  onChange={props.formik.handleChange}
                  value={props.formik.values.username}
                />
                {props.formik.errors.username && props.formik.touched.username ? (
            <div className="alert alert-danger mt-2">{props.formik.errors.username}</div>
          ) : (
            ""
          )}

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control w-50 mb-3 "
                  placeholder="Type your email address"
                  onBlur={props.formik.handleBlur}
                  onChange={props.formik.handleChange}
                  value={props.formik.values.email}
                />
                {props.formik.errors.email && props.formik.touched.email ? (
                  <div className="alert alert-dark  w-50 mt-2">
                    {props.formik.errors.email}
                  </div>
                ) : (
                  ""
                )}
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control w-50 mb-3 "
                  placeholder="Type your password address"
                  onBlur={props.formik.handleBlur}
                  onChange={props.formik.handleChange}
                  value={props.formik.values.password}
                />
                {props.formik.errors.password && props.formik.touched.password ? (
                  <div className="alert alert-dark  w-50 mt-2">
                    {props.formik.errors.password}
                  </div>
                ) : (
                  ""
                )}
                <label htmlFor="Repassword">Repassword</label>
                <input
                  type="password"
                  id="Repassword"
                  className="form-control w-50 mb-3"
                  placeholder="Type your Repassword address"
                  onBlur={props.formik.handleBlur}
                  onChange={props.formik.handleChange}
                  value={props.formik.values.Repassword}
                />
                {props.formik.errors.Repassword && props.formik.touched.Repassword ? (
                  <div className="alert alert-dark  w-50 mt-2">
                    {props.formik.errors.Repassword}
                  </div>
                ) : (
                  ""
                )}
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  className="form-control w-50 mb-3"
                  placeholder="Type your age address"
                  onBlur={props.formik.handleBlur}
                  onChange={props.formik.handleChange}
                  value={props.formik.values.age}
                />
                {props.formik.errors.age && props.formik.touched.age ? (
                  <div className="alert alert-dark  w-50 mt-2">
                    {props.formik.errors.age}
                  </div>
                ) : (
                  ""
                )}
                <p className="my-3">
                  By signing up , you agree to our Terms <br /> and Conditions.{" "}
                </p>
                {props.isLoading ? (
                  <button className="btn secondary text-white px-5">
                    <i className="fas fa-spinner fa-spin"></i>
                  </button>
                ) : (
                  <button
                    className="btn btn-dark w-50 secondary px-5 rounded-4 text-white"
                    type="submit"
                   disabled={!(props.formik.isValid && props.formik.dirty)}
                  >
                    {" "}
                    Create New {">"}{" "}
                  </button>
                )}

                <div className="mt-2">
                  <Link
                    to="/login"
                    className="mt-3 shade3 text-decoration-none"
                  >
                    {" "}
                    Already have account ?
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <img className="w-75 animate__animated animate__fadeIn" src={mainImage} alt="" />
          </div>
        </div>
      </div> 
      </>
  )
}
