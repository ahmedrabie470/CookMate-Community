import React from "react";
import RecipeImg from "../../Assets/images/Frame 86.png";

export default function AddRecipeForm(props) {
  let { formik, selectedImage, handleImageChange, errors, isLoading } = props;
  return (
    <>
      <div className="container animate__animated animate__fadeIn">
        {errors ? <div>{errors}</div> : ""}

        <h1>
          Share Your Recipes with the <br /> CookMate Community !
        </h1>

        <div className="row">
          <form onSubmit={formik.handleSubmit} className="d-flex">
            <div className="col-md-6  mt-4">
              <h5 className="primary">First Recipe Details</h5>
              <label htmlFor="RecipeName"> Recipe Name</label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.RecipeName}
                className="form-control w-50 rounded-5 "
                name="RecipeName"
                type="text"
                placeholder="Type Your Recipe Name"
              />

              {formik.errors.RecipeName && formik.touched.RecipeName ? (
                <div className="alert alert-dark  w-50 mt-2">
                  {formik.errors.RecipeName}
                </div>
              ) : (
                ""
              )}

              <label htmlFor="RecipeDescription" className="mt-3">
                {" "}
                Recipe Description
              </label>
              <div className="form-floating">
                <textarea
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.RecipeDescription}
                  className="form-control w-50 p-3"
                  id="RecipeDescription"
                ></textarea>
              </div>
              {formik.errors.RecipeDescription &&
              formik.touched.RecipeDescription ? (
                <div className="alert alert-dark  w-50 mt-2">
                  {formik.errors.RecipeDescription}
                </div>
              ) : (
                ""
              )}

              <h4 className="mt-2">Recipe ingredients</h4>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.RecipeIngredients}
                className="form-control w-50 rounded-5 mb-2 "
                name="RecipeIngredients"
                type="text"
                placeholder="ingredients 1"
              />
              {formik.errors.RecipeIngredients &&
              formik.touched.RecipeIngredients ? (
                <div className="alert alert-dark  w-50 mt-2">
                  {formik.errors.RecipeIngredients}
                </div>
              ) : (
                ""
              )}

              <h4 className="mt-2">Recipe Category</h4>

              <select
                as="select"
                className="form-select w-50 fa-i-cursor"
                aria-label="Disabled select example"
                id="RecipeCategory"
                name="RecipeCategory"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.RecipeCategory}
              >
                <option value="">Select a category</option>
                <option value="Arabian">Arabian</option>
                <option value="Asian">Asian</option>
                <option value="Indian">Indian</option>
                <option value="Italian">Italian</option>
                <option value="Chines">Chinese</option>
              </select>

              {isLoading ? (
                <>
                  <button className="btn mt-3 w-50 secondary text-center text-white">
                    <i className="fas fa-spinner fa-spin"></i>
                  </button>
                </>
              ) : (
                <button
                  type="submit"
                  disabled={!(formik.isValid && formik.dirty)}
                  className="btn btn-dark mt-3 w-50 secondary text-center text-white"
                >
                  Next {">"}{" "}
                </button>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="img" style={{ cursor: "pointer" }}>
                <h3 className="primary">Recipe Image</h3>
                {selectedImage ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                    width={400}
                  />
                ) : (
                  <img src={RecipeImg} alt="Select Image" />
                )}
              </label>
              <input
                id="img"
                type="file"
                accept="image/*"
                onChange={(event) => handleImageChange(event, formik)}
                style={{ display: "none" }}
              />
              {formik.errors.img && formik.touched.img ? (
                <div className="alert alert-dark  w-50 mt-2">
                  {formik.errors.img}
                </div>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
