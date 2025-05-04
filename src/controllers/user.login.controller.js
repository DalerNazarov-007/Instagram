const userModel = require("../models/user");
const { SECRET_KEY_ACCESS, SECRET_KEY_REFRESH } = require("../config/configuration");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const express = require("express");
const mongoose = require('mongoose');

async function login(req, res, next) {
    try {
        const { username, password } = req.body;

        const user = await userModel.findOne({ username });

        if (!user) {
            return res.status(401).send("Unauthorized: User not found");
        }

        if (user.password !== password) {
            return res.status(401).send("Unauthorized: Incorrect password");
        }

        const accessToken = jwt.sign({ id: user._id }, SECRET_KEY_ACCESS, {
            expiresIn: "15m"
        });

        const refreshToken = jwt.sign({ id: user._id }, SECRET_KEY_REFRESH, {
            expiresIn: "24h"
        });

        res.send({ data: user, accessToken, refreshToken });

    } catch (error) {
        next(error)
    }
}


module.exports = {
    login
}
