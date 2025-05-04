const express = require("express")
const { getAllComments, getOneById, addNewComment, editComment, deleteComment } = require("../controllers/comments.controller")
const authenticateToken = require("../middleware/auth.middleware")

const commentsRouter = express.Router()

commentsRouter.get("/", getAllComments)
commentsRouter.get("/:id", getOneById)
commentsRouter.post("/", authenticateToken ,addNewComment)
commentsRouter.put("/:id", authenticateToken ,editComment)
commentsRouter.delete("/:id", authenticateToken ,deleteComment)

module.exports = commentsRouter
