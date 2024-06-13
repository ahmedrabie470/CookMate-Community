import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import AddRecipeForm from './AddRecipeForm';
export default function RecipeValidationSchema(props) {

  let errors = props.errors
  let isLoading = props.isLoading
  let selectedImage = props.selectedImage
  let handleImageChange = props.handleImageChange

    const recipeSchema = yup.object({
        RecipeName: yup
          .string()
          .min(3, "RecipeName must be at least 3 characters ")
          .max(30, "RecipeName must be at most 30 characters ")
          .required("RecipeName is required"),
        RecipeDescription: yup
          .string()
          .min(3, "RecipeDescription must be at least 3 characters ")
          .max(200, "RecipeDescription must be at most 200 characters ")
          .required("RecipeDescription is required"),
        RecipeIngredients: yup
          .string()
          .min(3, "RecipeIngredients must be at least 3 characters ")
          .max(1000, "RecipeIngredients must be at most 1000 characters ")
          .required("RecipeIngredients is required"),
          RecipeCategory: yup
          .string()
          .min(3, "RecipeCategory must be at least 3 characters ")
          .max(10, "RecipeCategory must be at most 10 characters ")
          .required("RecipeCategory is required"),
        img: yup.string().required("Image is required"),
      });
      let formik = useFormik({
        initialValues: {
          RecipeName: "",
          RecipeDescription: "",
          RecipeIngredients: "",
          RecipeCategory:"",
          img: null,
        },
        validationSchema: recipeSchema,
        onSubmit: props.submitRecipe,
      });
    
  return (
    <>
    <AddRecipeForm formik={formik} selectedImage={selectedImage} handleImageChange={handleImageChange} errors={errors} isLoading ={isLoading}/>
    </>
  )
}
