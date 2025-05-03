const express = require("express")
const { getAllComments, getOneById, addNewComment, editComment, deleteComment } = require("../controllers/comments.controller")

const commentsRouter = express.Router()

commentsRouter.get("/", getAllComments)
commentsRouter.get("/:id", getOneById)
commentsRouter.post("/", addNewComment)
commentsRouter.put("/:id", editComment)
commentsRouter.delete("/:id", deleteComment)

module.exports = commentsRouter
