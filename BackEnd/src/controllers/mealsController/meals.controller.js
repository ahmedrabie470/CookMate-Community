import { mealsModel } from "../../../dataBases/models/meals.models.js";
import { catchError } from "../../middleware/catchError.js";
import { AppError } from "../../utilits/AppError.js";

const addMeal = catchError(async (req, res, next) => {
  // Access the filename from req.file
  const filename = req.file.filename;
  const receivedId = req.user.userId;
  // Access the userName from req.user
  const userName = req.user.name;
  // Modify req.body to include the filename
  req.body.img = filename;
  // Modify req.body to include the username
  req.body.username = userName;
  req.body.receivedId = receivedId;
  // Insert data into the database
  const meal = await mealsModel.insertMany(req.body);
  if (meal) return res.json({ message: "success", meal });
  next(
    new AppError("Error verifying token. You must be logged in.", 409),
    ("Invalid image format. Please upload images only.", 401)
  );
});

const allMeals = catchError(async (req, res) => {
  const userName = req.user.name;
  req.body.username = userName;
  let data = await mealsModel.find();
  res.json({ message: "success", data });
});

const getSpecificMeal =catchError(async (req, res, next) => {
  const specificMeal = await mealsModel.findById({ _id: req.params.id });
  if (!specificMeal)return next(new AppError("no meal found", 401));
  res.json({ message: "success", specificMeal });
});

const getRecipeCategory =catchError( async (req, res, next) => {
  const meal = await mealsModel.find({
    RecipeCategory: req.params.RecipeCategory,
  });
  if (meal.length > 0) return res.json({ message: "success", meal });
  next(new AppError("no recipe found", 401));
});

const deleteMeal = catchError(async (req, res, next) => {
  const meal = await mealsModel.findOneAndDelete({ _id: req.params.id });
  // Handle any errors that occur during the database query
  if (meal == null) return next(new AppError("No recipes found", err, 404));
  // If recipes are found, send a success response
  res.json({ message: "Deleted", meal });
});

const allUserRecipes = catchError(async (req, res, next) => {
  const meals = await mealsModel.find({ receivedId: req.params.id });
  if (meals.length === 0) {
    // If no recipes are found, send an error response
    return next(new AppError("No recipes found", 404));
  }
  // If recipes are found, send a success response
  res.json({ message: "success", meals });
});

const updateMeal = catchError(async (req, res, next) => {
  const newMeal = await mealsModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!newMeal) return next(new AppError("No recipes found", 404));
  res.json({ message: "success", newMeal });
});


export {
  updateMeal,
  addMeal,
  allMeals,
  allUserRecipes,
  getSpecificMeal,
  getRecipeCategory,
  deleteMeal,
};
