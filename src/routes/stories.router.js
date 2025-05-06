const express = require("express")
const authenticateToken = require("../middleware/auth.middleware")
const { getAllStories, getOneById, addNewStory, editStory, deleteStory } = require("../controllers/stories.controller")

const storiesRouter = express.Router()

storiesRouter.get("/", authenticateToken, getAllStories)
storiesRouter.get("/:id", authenticateToken, getOneById)
storiesRouter.post("/", authenticateToken, addNewStory)
storiesRouter.put("/:id", authenticateToken, editStory)
storiesRouter.delete("/:id", authenticateToken, deleteStory)

module.exports = storiesRouter
