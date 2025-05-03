const express = require("express")
const { getAllUsers, getOneById, editUser, deleteUser } = require("../controllers/users.controller")

const usersRouter = express.Router()

usersRouter.get("/", getAllUsers)
usersRouter.get("/:id", getOneById)
usersRouter.put("/:id", editUser)
usersRouter.delete("/:id", deleteUser)

module.exports = usersRouter
