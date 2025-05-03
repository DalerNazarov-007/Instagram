const express = require("express");
const mongoose = require('mongoose');
const Joi = require("joi");
const userModel = require("../models/user");
const { userValid, userValidUpdate } = require("../validation/usersValidation");


async function getAllUsers(req, res) {
    const users = await userModel.find()
    res.status(200).send(users)
}

async function getOneById(req, res) {
    const id = req.params.id
    const user = await userModel.findById(id)
    res.status(200).send(user)
}

async function editUser(req, res) {
    const id = req.params.id
    const data = await userValidUpdate.validateAsync(req.body)
    await userModel.findByIdAndUpdate(id, data) 
    res.status(200).send({message: "Successfully Edited"})
}

async function deleteUser(req, res) {
    const id = req.params.id
    await userModel.findByIdAndDelete(id)

    res.status(200).send({message: "User successfully deleted!"})
}

module.exports = {
    getAllUsers, getOneById , editUser, deleteUser
}

