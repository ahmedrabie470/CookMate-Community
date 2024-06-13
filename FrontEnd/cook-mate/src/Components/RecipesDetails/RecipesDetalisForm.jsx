import React from "react";

export default function RecipeDetailsForm(props) {
  let {mealDetails} = props
  return (
    <>
      <div className="container animate__animated animate__fadeIn  shadowBg1  p-3 rounded-4">
        <div className="row  ">
          {mealDetails ? (
            <div className="col-md-4   d-flex justify-content-center align-items-center">
              <img className="w-100 mt-2 rounded-4" src={mealDetails?.img} alt="" />
            </div>
          ) : (
            <div className='text-center'>
              <h1 className="primary">No Recipe Found </h1>
                  <i className="spinner-grow  mx-2 primary text-center fs-1 mt-5">
                  </i>
                    <i className="spinner-grow mx-2 shadowBg text-center fs-1 mt-5">
                    </i>
                      <i className="spinner-grow  mx-2 secondary text-center fs-1 mt-5">
                      </i>
                  </div>
          )}
{mealDetails ?
<div className="col-md-8   align-items-center ">
            <div className=" p-2 rounded-4  d-flex justify-content-between align-items-center">
              <div className="w-100">
                <h3 >
                  Recipe Name :{" "}
                  <span className=" primary">
                    {mealDetails?.RecipeName}
                  </span>
                </h3>
                <h4 className="mt-4  mb-3">
                  Recipe Description :{" "}
                  <span className="primary">
                    {mealDetails?.RecipeDescription}
                  </span>
                </h4>
                <div className=" mt-2 ">
                  <h3 >Ingredients : {" "}</h3>
                  <div className="page stroke text-black  rounded-5 p-4 mb-5">
                    {mealDetails?.RecipeIngredients}.
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-0 ">
              <div>
                <span className="page shade2 text-black  rounded-5 me-4 px-5 py-2">
                  By : {mealDetails?.username}
                </span>
                <span className="page shade2 text-black  rounded-5 px-5 py-2">
                  {mealDetails?.createdAt.split("T")[0]}
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-between  mt-3  w-50">
                <div>
                  {" "}
                  <span>4.5 </span>
                  <i className="fa fa-star primary "></i>
                  <i className="fa fa-star primary "></i>
                  <i className="fa fa-star primary "></i>
                  <i className=" fa fa-star-half primary"></i>
                </div>

                <div className="page stroke d-flex text-black mx-5 rounded-5 px-5 py-2">
                  Rate <i className="fa fa-star primary"></i>
                </div>
              </div>
            </div>
          </div>:''}
          
        </div>
      </div>
    </>
  );
}
