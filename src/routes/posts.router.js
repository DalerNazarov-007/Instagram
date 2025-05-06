const express = require("express")
const { getAllPosts, getOneById, addNewPost, editPost, deletePost } = require("../controllers/posts.controller")
const authenticateToken = require("../middleware/auth.middleware")



const postsRouter = express.Router()

postsRouter.get("/", authenticateToken, getAllPosts)
postsRouter.get("/:id", authenticateToken, getOneById)
postsRouter.post("/", authenticateToken ,addNewPost)
postsRouter.put("/:id", authenticateToken ,editPost)
postsRouter.delete("/:id", authenticateToken ,deletePost)

module.exports = postsRouter
