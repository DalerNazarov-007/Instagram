const express = require("express");
const mongoose = require('mongoose');
const Joi = require("joi");
const userModel = require("../models/user");
const { userValid } = require("../validation/usersValidation");
const { SECRET_KEY_ACCESS, SECRET_KEY_REFRESH } = require("../config/configuration");
const jwt = require("jsonwebtoken")


async function registerNewUser(req, res) {
    const data = await userValid.validateAsync(req.body)

    const existingEmail = await userModel.findOne({email: data.email})
    if (existingEmail) {
        return res.status(400).send({message: "User with this email already exists"})
    }
    const existingUsername = await userModel.findOne({username: data.username})
    if (existingUsername) {
        return res.status(400).send({message: "Username already exists"})
    }

    const user = new userModel(data)
    await user.save()

    const accessToken = jwt.sign({name: user._id}, SECRET_KEY_ACCESS, {
        expiresIn: "30m"
    })
    const refreshToken = jwt.sign({name: user._id}, SECRET_KEY_REFRESH, {
        expiresIn: "24h"
    })
    
    res.send({data: user, accessToken, refreshToken})

}

module.exports = {
    registerNewUser
}

