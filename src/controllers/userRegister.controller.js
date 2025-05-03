const express = require("express");
const mongoose = require('mongoose');
const Joi = require("joi");
const userModel = require("../models/user");
const { userValid } = require("../validation/usersValidation");


async function registerNewUser(req, res) {
    const data = await userValid.validateAsync(req.body)
    const user = new userModel(data)
    await user.save()
    res.status(201).send(user)

    const token = jwt.sign({name: user.id}, )
}

module.exports = {
    registerNewUser
}

