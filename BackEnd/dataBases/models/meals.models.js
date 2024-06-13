import mongoose, { Schema, Types } from "mongoose";

const schema = new Schema(
  {
    RecipeName: String,
    RecipeDescription: String,
    RecipeIngredients: String,
    RecipeCategory: String,
    img: String,
    username:String,
    receivedId:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
  },
    
  { timestamps: true }
);

schema.post("init", function (doc) {
  doc.img = "http://localhost:3000/" + doc.img;
});

export const mealsModel = mongoose.model("meals", schema);
