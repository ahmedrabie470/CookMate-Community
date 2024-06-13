import React from 'react'
import mainImage from "../../Assets/images/Chars.png";

export default function LoginForm(props) {
  let {formik , isLoading , errors} = props; 
  return (
    <>
    
    <div className="container animate__animated animate__fadeIn p-4 ">
        <div className="row d-flex align-items-center justify-content-center ">
          <div className="col-md-7">
            <h1 className="shade3">Welcome to CookMate</h1>
            <h5 className="shade3 mb-4"> Sign in to your account</h5>
            <form className="form-outline" onSubmit={formik.handleSubmit}>
            {errors !== null ? (
                <>
                  <div className="alert alert-dark w-50">{errors}</div>
                </>
              ) : (
                ""
              )}
              <div className="form-group ">
                <label htmlFor="email">Email</label>
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  type="email"
                  id="email"
                  className="form-control w-50 mb-3 "
                  placeholder="Type your email address"
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="alert alert-dark w-50 mt-2">
                    {formik.errors.email}
                  </div>
                ) : (
                  ""
                )}

                <label htmlFor="password">Password</label>
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  type="password"
                  id="password"
                  className="form-control w-50 mb-3 "
                  placeholder="Type your password address"
                />

                {formik.errors.password && formik.touched.password ? (
                  <div className="alert alert-dark w-50 mt-2">
                    {formik.errors.password}
                  </div>
                ) : (
                  ""
                )}
                <p className="my-3">Forget Your Password. </p>

                {isLoading ? (
                  <button className="btn secondary text-white px-5">
                    <i className="fas fa-spinner fa-spin"></i>
                  </button>
                ) : (
                  <button
                    className="btn btn-dark w-50 secondary px-5 rounded-4 text-white"
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}
                  >
                    {" "}
                    Sign In Now {">"}{" "}
                  </button>
                )}
              </div>
              
            </form>
          </div>
          <div className="col-md-5">
            <img className="w-75" src={mainImage} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
