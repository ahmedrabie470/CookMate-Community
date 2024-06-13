import React from 'react'
import './UpdateMealForm.module.css'
export default function UpdateMealForm(props) {
  let { formik,error, isLoading } = props;
 return (
 <>
  {error?<div>{error}</div> : ""}
  <div className="home">
      <div className="layer">
    <div className="w-50  rounded-4 mx-auto">

      
        <form  onSubmit={formik.handleSubmit}>
        <div >
        <h3 className="head pt-5">Update Your Recipe Details</h3>
          <label className="text-white" htmlFor="RecipeName"> Recipe Name</label>
          <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.RecipeName}             
            className="form-control  rounded-5 "
            name="RecipeName"
            type="text"
            placeholder="Type Your Recipe Name"
          />
 {formik.errors.RecipeName && formik.touched.RecipeName ? (
                <div className="alert alert-dark   mt-2">
                  {formik.errors.RecipeName}
                </div>
              ) : (
                ""
              )}
         
          <label className="text-white mt-3" htmlFor="RecipeDescription" >
            {" "}
            Recipe Description
          </label>
          <div className="form-floating">
            <textarea
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.RecipeDescription}
                className="form-control  p-3"
              id="RecipeDescription"
            ></textarea>
          </div>
          {formik.errors.RecipeDescription && formik.touched.RecipeDescription ? (
                <div className="alert alert-dark   mt-2">
                  {formik.errors.RecipeDescription}
                </div>
              ) : (
                ""
              )}
          <h5 className="text-white mt-2">Recipe ingredients</h5>
          <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.RecipeIngredients}
            className="form-control  rounded-5 mb-2 "
            name="RecipeIngredients"
            type="text"
            placeholder="ingredients 1"
          />
                {formik.errors.RecipeIngredients && formik.touched.RecipeIngredients ? (
                <div className="alert alert-dark   mt-2">
                  {formik.errors.RecipeIngredients}
                </div>
              ) : (
                ""
              )}
          <h5 className="mt-2 text-white">Recipe Category</h5>

          <select
            as="select"
            className="form-select  fa-i-cursor"
            aria-label="Disabled select example"
            id="RecipeCategory"
            name="RecipeCategory"
           
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.RecipeCategory}  >
            <option value="">Select a category</option>
            <option value="Arabian">Arabian</option>
            <option value="Asian">Asian</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Chines">Chinese</option>
          </select>
          {formik.errors.RecipeCategory && formik.touched.RecipeCategory ? (
                <div className="alert alert-dark   mt-2">
                  {formik.errors.RecipeCategory}
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
  )
}
