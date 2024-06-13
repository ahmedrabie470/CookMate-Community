import express from "express";
import { addMeal, allMeals, allUserRecipes, deleteMeal, getRecipeCategory, getSpecificMeal, updateMeal } from "./meals.controller.js";
import { auth } from "../../middleware/auth.js";
import { fileUpload } from "../../fileUpload/fileUpload.js";

const MealsRouter = express.Router()



MealsRouter.post('/addMeal' ,auth, fileUpload("img")   , addMeal);
MealsRouter.get('/allMeals' ,auth, allMeals);
MealsRouter.get('/specificMeal/:id',auth , getSpecificMeal);
MealsRouter.delete('/deleteMeal/:id',auth , deleteMeal);
MealsRouter.get('/getRecipeCategory/:RecipeCategory' ,auth, getRecipeCategory);
MealsRouter.get('/allUserRecipes/:id' ,auth, allUserRecipes);
MealsRouter.put('/updateMeal/:id' ,auth,fileUpload("img"), updateMeal);


export default MealsRouter