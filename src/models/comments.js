const { Schema, default: mongoose } = require("mongoose");

const commentSchema = new Schema({
    message: {
        type: String,
        minLength: 1,
        maxLength: 500
    },
    UserId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    PostId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts"
    }
}, 
    {
        timestamps: true,
    }    
)

const commentModel = mongoose.model("Comments", commentSchema)
module.exports = commentModel