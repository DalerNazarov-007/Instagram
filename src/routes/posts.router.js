const express = require("express")
const { getAllPosts, getOneById, addNewPost, editPost, deletePost } = require("../controllers/posts.controller")



const postsRouter = express.Router()

postsRouter.get("/", getAllPosts)
postsRouter.get("/:id", getOneById)
postsRouter.post("/", addNewPost)
postsRouter.put("/:id", editPost)
postsRouter.delete("/:id", deletePost)

module.exports = postsRouter
