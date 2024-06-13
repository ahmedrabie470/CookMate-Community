import bcrypt from "bcrypt";
import { userModel } from "../../dataBases/models/user.models.js";
import { catchError } from "./catchError.js";
import { AppError } from "../utilits/AppError.js";
export const checkEmailExist =catchError(async (req, res, next) => {
  const emailExist = await userModel.findOne({ email: req.body.email });
  if (emailExist) return next(new AppError("Email Already Exist",404));
  req.body.password = bcrypt.hashSync(req.body.password, 8);
  next()
}) 
