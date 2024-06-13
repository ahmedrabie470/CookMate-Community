import React, { useEffect, useState } from "react";
import axios from "axios";
import RecentRecipesForm from "./RecentRecipesForm";
import {  useDispatch, useSelector } from "react-redux";
import { decodeToken } from "../../Redux/userTokenSlice";


export default function RecentRecipes() {
  // const [userName, setUserName] = useState([]);
  const [meal, setMeal] = useState([]);
  const dispatch = useDispatch();

  const userToken = useSelector(state => state.token.userToken);
  const decodedToken = useSelector(state => state.token.decodedToken);

  useEffect(() => {
    // Dispatch the action to decode the token
     dispatch(decodeToken(userToken));
  }, [dispatch, userToken]);
  
  const userName =  decodedToken?.name
  const [clickedLink, setClickedLink] = useState(null);
  // Function to handle click on a link
  const handleLinkClick = (link) => {
    setClickedLink(link);
  };


  // Function Get All Meals And Category for Meals
  async function getMeals(category = "") {
    try {
      if (category === "") {
        let { data } = await axios.get("http://localhost:3000/allMeals", {
          headers: { token: `${userToken}`},
        });
        setMeal(data.data);
        
      } else {
        try {
          handleLinkClick()
          const { data } = await axios(
            `http://localhost:3000/getRecipeCategory/${category}`,{
          headers: { token: `${userToken}`},

            }
          );
          console.log(data);
          setMeal(data?.meal);
        } catch (err) {
          console.log("No Recipes Found ");
        }
      }
    } catch (err) {
      console.log("Error verifying token you must be logged in");
    }
  }

  useEffect(() => {
    getMeals("");
  }, []);
  return (
    <>
      <RecentRecipesForm meal={meal} getMeals={getMeals} userName={userName} clickedLink={clickedLink} handleLinkClick={handleLinkClick}  />
    </>
  );
}
