const express = require("express");
const storyModel = require("../models/story");
const { storyValid, storyValidUpdate } = require("../validation/story.validation");

async function getAllStories(req, res) {
    const stories = await storyModel.find().populate("UserId")
    res.status(200).send(stories)
}

async function getOneById(req, res) {
    const id = req.params.id
    const stories = await storyModel.findById(id).populate("UserId")
    res.status(200).send(stories)
}

async function addNewStory(req, res) {
    const data = await storyValid.validateAsync(req.body)
    const story = new storyModel(data)

    await story.save()

    res.status(201).send(story)
}

async function editStory(req, res) {
    const id = req.params.id
    const data = await storyValidUpdate.validateAsync(req.body)
    const story = await storyModel.findByIdAndUpdate(id, data) 
    res.status(200).send({message: "Sucessfully edited!", story})
}

async function deleteStory(req, res) {
    const id = req.params.id
    await storyModel.findByIdAndDelete(id)
    res.status(200).send({message: "Story successfully deleted!"})
}

module.exports = {
    getAllStories, getOneById , addNewStory, editStory, deleteStory
}

