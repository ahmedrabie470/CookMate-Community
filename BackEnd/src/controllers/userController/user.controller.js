import { userModel } from "../../../dataBases/models/user.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { catchError } from "../../middleware/catchError.js";
import { AppError } from "../../utilits/AppError.js";
import { emailVerification } from "../../emails/emailVerification.js";
const register = catchError(async (req, res) => {
  await userModel.insertMany(req.body);
  res.json({ message: "success" });
});

const login = catchError(async (req, res, next) => {
  const user = await userModel.findOne({ email: req.body.email });

  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = jwt.sign(
      { userId: user._id, email: user.email, name: user.username },
      "secretKey"
    );
    res.json({ message: "Login Successfully", token });
  } else {
    return next(new AppError("Incorrect Email Or Password", 409));
  }
});

const changePassword = catchError(async (req, res, next) => {
  const _id = req.user.userId;
  const user = await userModel.findById(_id);
  emailVerification(user.email);
  if (user.verifyEmail === true) {
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign(
        { userId: user._id, email: user.email, name: user.username },
        "secretKey"
      );
      req.body.newPassword = bcrypt.hashSync(req.body.newPassword, 8);
      await userModel.findByIdAndUpdate(_id, {
        password: req.body.newPassword,
      });

      res.json({ message: "Password Changed Successful", token });
    }
    next(new AppError("Incorrect Password", 401));
  } else {
    return next(
      new AppError(
        "Email not verified , check your email and confirm email firstly ",
        403
      )
    );
  }
});
const verify = (req, res) => {
  jwt.verify(req.params.token, "secretKey", async (err, decoded) => {
    if (err) return res.json(err);
    await userModel.findOneAndUpdate(
      { email: decoded.email },
      { verifyEmail: true }
    );
    res.json({ message: "success" });
  });
};

export { register, login, verify, changePassword };
