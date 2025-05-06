const Joi = require("joi")

const storyValid = Joi.object({
    videoUrl: Joi.string().min(1).required(),
    UserId: Joi.string().required()
})

const storyValidUpdate = Joi.object({
    videoUrl: Joi.string().min(1).required(),
    UserId: Joi.string()
})
module.exports = {storyValid, storyValidUpdate}