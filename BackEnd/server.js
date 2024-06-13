// uncaughtException if eny one type or import anything false
process.on("uncaughtException", (err) => {
  console.log("error", err);
});


import express from "express";
import cors from "cors";
import { dbConnection } from "./dataBases/dbConnection.js";
import userRouter from "./src/controllers/userController/user.router.js";
import MealsRouter from "./src/controllers/mealsController/meals.router.js";
import { globalError } from "./src/middleware/glopalErrorHandling.js";



const app = express();

//connect front-end with the back-end
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);

const port = 3000;
app.use(express.json());
app.use('/',express.static('uploads'))

app.use(userRouter);
app.use(MealsRouter);

dbConnection();

app.use(globalError);
process.on("unhandledRejection", (err) => {
  console.log("error", err);
});
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
