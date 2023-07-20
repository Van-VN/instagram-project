import UserController from "../controllers/user.controller";
import { Router } from "express";
const userRoute = Router();
import multer = require("multer");
const upload = multer();

userRoute.post("/user/create", upload.none(), UserController.createUser);
userRoute.post("/user", upload.none(), UserController.getUser);

export default userRoute;