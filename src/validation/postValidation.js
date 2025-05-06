const Joi = require("joi")

const postValid = Joi.object({
    title: Joi.string().min(1).max(500).required(),
    description: Joi.string().min(1).max(500).required(),
    UserId: Joi.string().required()
})

const postValidUpdate = Joi.object({
    title: Joi.string().min(1).max(500),
    description: Joi.string().min(1).max(500),
    UserId: Joi.string()
})
module.exports = {postValid, postValidUpdate}