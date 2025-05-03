const Joi = require("joi")

const commentValid = Joi.object({
    description: Joi.string().min(1).max(500).required(),
    UserId: Joi.string().required(),
    PostId: Joi.string().required()
})

const commentValidUpdate = Joi.object({
    description: Joi.string().min(1).max(500).required(),
    UserId: Joi.string(),
    PostId: Joi.string()
})
module.exports = {commentValid, commentValidUpdate}