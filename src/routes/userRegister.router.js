const express = require("express")
const { registerNewUser } = require("../controllers/userRegister.controller")

const usersRegisterRouter = express.Router()

usersRegisterRouter.post("/", registerNewUser)

module.exports = usersRegisterRouter
