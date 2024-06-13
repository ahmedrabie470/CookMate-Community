import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainImg from "../../Assets/images/Group 5.png";

export default function RecentRecipesForm(props) {
  let [search, setSearch] = useState("");
  let { meal, handleLinkClick, clickedLink, getMeals, userName } = props;

  return (
    <>
      <div className="container animate__animated animate__fadeIn">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 ">
            <h3>
              Hello <span className="primary">{userName}</span>
            </h3>
            <h6>What are you cooking today</h6>
            <div className="d-flex align-items-center">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="form-control w-50 "
                placeholder="Search for new Recipes"
              />
              <i className="fa fa-search mx-2"></i>
            </div>
          </div>
          <div className="col-md-6 d-flex container justify-content-center align-items-center">
            <img className="w-50" src={mainImg} alt="" />

            <div className="w-100  p-3">
              <h6 className="shadowBg w-50 mb-2 py-2 px-2 rounded-4">
                Shrimp Chicken <br /> Andouille Jampalaya
              </h6>
              <span className="shade2 px-2 py-1  rounded-4">
                <i className="fa fa-star p-1 text-warning"></i>4.5
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid animate__animated animate__fadeIn  ">
        <div className="row  d-flex justify-content-center align-items-center">
          <div className="col-md-10">
            <div className="stroke w-100 d-flex p-2 rounded-2 ">
              <Link
                onClick={() => {
                  getMeals("");
                  handleLinkClick(1);
                }}
                className={
                  clickedLink === 1
                    ? "page primary2 text-white nav-link active rounded-5 px-3 py-2"
                    : "page bg-white mx-2 nav-link active rounded-5 px-3 py-2"
                }
              >
                All Recipes
              </Link>
              <Link
                onClick={() => {
                  getMeals("Arabian");
                  handleLinkClick(2);
                }}
                className={
                  clickedLink === 2
                    ? "page primary2 text-white nav-link active rounded-5 px-3 py-2"
                    : "page bg-white mx-2 nav-link active rounded-5 px-3 py-2"
                }
              >
                Arabian
              </Link>
              <Link
                onClick={() => {
                  getMeals("Asian");
                  handleLinkClick(3);
                }}
                className={
                  clickedLink === 3
                    ? "page primary2 text-white nav-link active rounded-5 px-3 py-2"
                    : "page bg-white mx-2 nav-link active rounded-5 px-3 py-2"
                }
              >
                Asian
              </Link>
              <Link
                onClick={() => {
                  getMeals("Indian");
                  handleLinkClick(4);
                }}
                className={
                  clickedLink === 4
                    ? "page primary2 text-white nav-link active rounded-5 px-3 py-2"
                    : "page bg-white mx-2 nav-link active rounded-5 px-3 py-2"
                }
              >
                Indian
              </Link>
              <Link
                onClick={() => {
                  getMeals("Italian");
                  handleLinkClick(5);
                }}
                className={
                  clickedLink === 5
                    ? "page primary2 text-white nav-link active rounded-5 px-3 py-2"
                    : "page bg-white mx-2 nav-link active rounded-5 px-3 py-2"
                }
              >
                Italian
              </Link>
              <Link
                onClick={() => {
                  getMeals("Chaines");
                  handleLinkClick(6);
                }}
                className={
                  clickedLink === 6
                    ? "page primary2 text-white nav-link active rounded-5 px-3 py-2"
                    : "page bg-white mx-2 nav-link active rounded-5 px-3 py-2"
                }
              >
                Chaines
              </Link>
            </div>

            <div className="container  ">
              <div className="row d-flex justify-content-center align-items-center">
                {meal.length == 0 ? (
                  <div className="text-center">
                    <i className="spinner-grow  mx-2 primary text-center fs-1 mt-5"></i>
                    <i className="spinner-grow mx-2 shadowBg text-center fs-1 mt-5"></i>
                    <i className="spinner-grow  mx-2 secondary text-center fs-1 mt-5"></i>
                  </div>
                ) : (
                  meal
                    .filter((meal) => {
                      return search.toLowerCase() === ""
                        ? meal
                        : meal?.RecipeName.toLowerCase().includes(
                            search.toLowerCase()
                          );
                    })
                    .map((meal, key) => (
                      <Link
                        to={`/recipesDetails/${meal._id}`}
                        key={meal._id}
                        className="recipe-card text-decoration-none link-dark m-2 stroke mt-5 "
                      >
                        <div className="recipe-image-container animate__animated animate__fadeIn">
                          <img
                            className="recipe-image"
                            src={meal.img}
                            alt={meal.RecipeName}
                          />
                        </div>
                        <div className="recipe-details">
                          <h5 className="recipe-title ">
                            {meal.RecipeName.split(" ").slice(0, 2).join(" ")}
                          </h5>
                          <h6>{meal.RecipeCategory}</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h6 className="shadowBg ">Time</h6>
                              <div className="text-black ">
                                {meal?.createdAt.split("T")[0]}
                              </div>
                              <span className="primary">
                                By : {meal?.username}
                              </span>
                            </div>
                            <i className="fa-regular fa-bookmark primary"></i>
                          </div>
                        </div>
                      </Link>
                    ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
