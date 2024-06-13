import React, { useEffect, useState } from "react";
import ProfileForm from "./ProfileForm";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Profile() {
  const [meals, setMeals] = useState([]);
  const userToken = useSelector((state) => state.token.userToken);
  const decodedToken = useSelector((state) => state.token.decodedToken);

  async function getProfileInfo() {
    const receivedId = decodedToken?.userId;
      try {
        if (decodedToken) {
          const { data } = await axios.get(
            `http://localhost:3000/allUserRecipes/${receivedId}`,
            {
              headers: { token: userToken },
            }
          );
          setMeals(data.meals);
        }
      } catch (err) {
        if (err.response.status === 404) {
          console.log("No Recipes found", err);
        }
      }
}
  async function deleteMeal(id) {
    try {
        const { data } = await axios.delete(
            `http://localhost:3000/deleteMeal/${id}`,
            {
                headers: { token: `${userToken}` },
            }
        );
        if (data.message === "Deleted") {
            // Remove the deleted meal from the meals array
            const updatedMeals = meals.filter(meal => meal._id !== id);
            setMeals(updatedMeals);
            console.log("Meal deleted successfully.",updatedMeals);
        }
    } catch (err) {
        console.log(err);
    }
}

  useEffect(() => {
    if (decodedToken) {
      getProfileInfo();
    }
  }, [decodedToken]);



  return (
    <>
      <ProfileForm deleteMeal={deleteMeal} meals={meals} 
       />

    </>
  );
}
