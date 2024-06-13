import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProfileForm(props) {
  let { meals, deleteMeal } = props;
  let navigate = useNavigate();
  function handleOnUpdate(id) {
    navigate(`/updateMeal/${id}`);
  }

  return (
    <>
    
      {meals.length === 0 ? (
        <div className="text-center mt-5">
          <h1 className="primary">No Recipes Found</h1>
          <i className="spinner-grow  mx-2 primary text-center fs-1 mt-5"></i>
          <i className="spinner-grow mx-2 shadowBg text-center fs-1 mt-5"></i>
          <i className="spinner-grow  mx-2 secondary text-center fs-1 mt-5"></i>
        </div>
      ) : (
        <div className="container animate__animated animate__fadeIn">
          {meals.map((meal, index) => (
            <div
              className="shadowBg my-2 d-flex position-relative  align-items-center rounded-4 row py-4"
              key={index}
            >
              <div className="col-md-4 ms-5 p-0 d-flex align-items-center">
                <img
                  className="w-75 rounded-3 "
                  src={meal.img}
                  alt={meal.RecipeName}
                />
              </div>
              <div className="col-md-7 ">
                <div className="dropdown position-absolute end-0 top-0">
                  <button
                    className="btn btn-dark primary2 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Recipe Setting{" "}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link
                        onClick={() => {
                          deleteMeal(meal?._id);
                        }}
                        className="me-3 dropdown-item active"
                      >
                        {" "}
                        Delete: <i className="fa-solid fa-trash"></i>
                      </Link>
                      <Link
                        onClick={() => {
                          handleOnUpdate(meal?._id);
                        }}
                        className="dropdown-item "
                      >
                        Update : <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4>
                  <span className="primary">RecipeName :</span>{" "}
                  {meal.RecipeName}{" "}
                </h4>
                <h4 className="primary ">RecipeDescription :</h4>
                <p>{meal.RecipeDescription}</p>
                <h4 className="primary">RecipeIngredients :</h4>
                <p>{meal.RecipeIngredients}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
