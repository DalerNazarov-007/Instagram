const { Schema, default: mongoose } = require("mongoose");

const postSchema = new Schema({
    title: {
        type: String,
        minLength: 5,
        maxLength: 20
    },
    description:{
        type: String,
        maxLength: 500 
    },
    UserId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
}, 
    {
        timestamps: true,
    }    
)

const postModel = mongoose.model("Posts", postSchema)
module.exports = postModel