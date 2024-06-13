
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import UpdateMealValidation from "./UpdateMealValidation";

export default function UpdateMeal() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (event, formik) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);                                    
    formik.setFieldValue("img", imageFile); 
  };

  let {_id} = useParams()

  async function submitRecipe(values) {
    const userToken = localStorage.getItem("token");
    try {
      setIsLoading(true);
      const response = await axios.put(
        `http://localhost:3000/updateMeal/${_id}`,
        values,
        {
          headers: {
            token: userToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setIsLoading(false);
      navigate("/recentRecipes");
    } catch (err) {
      setIsLoading(false);

      if (err.response.status === 401) {
        setError("Invalid image format. Please upload images only.");
      } else if (err.response.status === 409) {
        setError("Error verifying token. You must be logged in.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  }

  return (
    <>
      <UpdateMealValidation
        selectedImage={selectedImage}
        handleImageChange={handleImageChange}
        submitRecipe={submitRecipe}
        isLoading={isLoading}
        error={error}
      
      />
    </>
  );
}
