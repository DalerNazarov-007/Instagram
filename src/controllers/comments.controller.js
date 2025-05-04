const express = require("express");
const mongoose = require('mongoose');
const Joi = require("joi");
const commentModel = require("../models/comments");
const { commentValid, commentValidUpdate } = require("../validation/commentValidation");

async function getAllComments(req, res) {
    const comments = await commentModel.find().populate("UserId").populate("PostId")
    res.status(200).send(comments)
}

async function getOneById(req, res) {
    const id = req.params.id
    const comment = await commentModel.findById(id).populate("UserId").populate("PostId")
    res.status(200).send(comment)
}

async function addNewComment(req, res) {
    const data = await commentValid.validateAsync(req.body)
    console.log(data);
    
    const comment = new commentModel(data)

    await comment.save()

    res.status(201).send(comment)
}

async function editComment(req, res) {
    const id = req.params.id
    const data = await commentValidUpdate.validateAsync(req.body)
    const comment = await commentModel.findByIdAndUpdate(id, data) 
    res.status(200).send({message: "Sucessfully edited!", comment})
}

async function deleteComment(req, res) {
    const id = req.params.id
    await commentModel.findByIdAndDelete(id)
    res.status(200).send({message: "Comment successfully deleted!"})
}

module.exports = {
    getAllComments, getOneById , addNewComment, editComment, deleteComment
}

