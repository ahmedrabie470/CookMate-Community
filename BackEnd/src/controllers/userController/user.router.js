import express from "express";
import { validation } from "../../middleware/validation.js";
import { checkEmailExist } from "../../middleware/checkEmailExist.js";
import { changePasswordSchema, loginSchema, registerSchema } from "./user.validation.js";
import { changePassword, login, register, verify } from "./user.controller.js";
import { auth } from "../../middleware/auth.js";


const userRouter = express.Router()



userRouter.post('/register' , validation(registerSchema) ,checkEmailExist ,register);
userRouter.post('/login' , validation(loginSchema),login);
userRouter.patch('/changePassword' , auth, validation(changePasswordSchema),changePassword);
userRouter.get('/verify/:token' ,verify);


export default userRouter