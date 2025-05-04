const express = require("express")
const { registerNewUser } = require("../controllers/user.register.controller")

const usersRegisterRouter = express.Router()

usersRegisterRouter.post("/", registerNewUser)

module.exports = usersRegisterRouter
