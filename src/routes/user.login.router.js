const express = require('express');
const { login } = require('../controllers/user.login.controller');

const usersLoginRouter = express.Router();

usersLoginRouter.post("/", login);

module.exports = usersLoginRouter;
