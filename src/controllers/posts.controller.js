const express = require("express");
const mongoose = require('mongoose');
const Joi = require("joi");
const postModel = require("../models/post");
const { postValid, postValidUpdate } = require("../validation/postValidation");

async function getAllPosts(req, res) {
    const posts = await postModel.find().populate("UserId")
    res.status(200).send(posts)
}

async function getOneById(req, res) {
    const id = req.params.id
    const post = await postModel.findById(id).populate("UserId")
    res.status(200).send(post)
}

async function addNewPost(req, res) {
    const data = await postValid.validateAsync(req.body)
    console.log(data);
    
    const post = new postModel(data)

    await post.save()

    res.status(201).send(post)
}

async function editPost(req, res) {
    const id = req.params.id
    const data = await postValidUpdate.validateAsync(req.body)
    const post = await postModel.findByIdAndUpdate(id, data) 
    res.status(200).send({message: "Sucessfully edited!", post})
}

async function deletePost(req, res) {
    const id = req.params.id
    await postModel.findByIdAndDelete(id)
    res.status(200).send({message: "Post successfully deleted!"})
}

module.exports = {
    getAllPosts, getOneById , addNewPost, editPost, deletePost
}

