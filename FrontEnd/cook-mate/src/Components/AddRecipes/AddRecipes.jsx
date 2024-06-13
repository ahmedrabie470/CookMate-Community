import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RecipeValidationSchema from "./RecipeValidationSchema";

export default function AddRecipes() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const navigate = useNavigate();
  
  const handleImageChange = (event, formik) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
    formik.setFieldValue("img", imageFile); // Update the Formik field value
  };

  async function submitRecipe(values) {
    const userToken = localStorage.getItem('token');

    const formData = new FormData();
    formData.append("img", selectedImage);
    formData.append("RecipeName", values.RecipeName);
    formData.append("RecipeDescription", values.RecipeDescription);
    formData.append("RecipeIngredients", values.RecipeIngredients);
    formData.append("RecipeCategory", values.RecipeCategory);

    try {
      setIsLoading(true);

      const response = await axios.post("http://localhost:3000/addMeal", formData, {
        headers: {
          token: userToken,
          "Content-Type": "multipart/form-data"
        },
      });

      setIsLoading(false);
      navigate("/recentRecipes");
      console.log(response.data);
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
      <RecipeValidationSchema
        selectedImage={selectedImage}
        handleImageChange={handleImageChange}
        submitRecipe={submitRecipe}
        error={error}
        isLoading={isLoading}
      />
      
   
    </>
  );
}
