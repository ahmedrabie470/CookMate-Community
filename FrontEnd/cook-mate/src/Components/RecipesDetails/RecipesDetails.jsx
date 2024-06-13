import React, { useEffect, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import RecipeDetailsForm from "./RecipesDetalisForm";

export default function RecipesDetails() {
  const [mealDetails, setMealDetails] = useState(null);
  const { _id } = useParams();
  let {userToken} = useSelector((state) => state?.token )
  async function getRecipeDetails() {
    try {
      
      const { data } = await axios.get(
        `http://localhost:3000/specificMeal/${_id}`,{
          headers: {
             token: `${userToken}` ,
            "Content-Type": "multipart/form-data"
  
          },
        }
      );
      setMealDetails(data?.specificMeal);
    } catch (err) {
      console.log(err.response.data);
    }
  }
  useEffect(() => {
    getRecipeDetails();
  }, []);
  return (
    <>
   <RecipeDetailsForm mealDetails={mealDetails} />
    </>
  );
}
