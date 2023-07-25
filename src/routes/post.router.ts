import PostController from "../controllers/post.controller";
import { Router } from "express";
const postRoute = Router();
import multer = require("multer");
const upload = multer();

postRoute.post("/create", upload.none(), PostController.createPost);
postRoute.post("/like-post", PostController.likeOrUnlike);
postRoute.post("/save-post", PostController.savePost);

postRoute.get("/", PostController.getAllPosts);
postRoute.post("/p/:id", PostController.getPostDetail);
postRoute.post("/comment/:id", PostController.postComment);


export default postRoute;
