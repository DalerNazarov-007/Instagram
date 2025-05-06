const { Schema, default: mongoose } = require("mongoose");

const storySchema = new Schema({
    videoUrl: {
        type: String,
        minLength: 1
    },
    UserId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
}, 
    {
        timestamps: true,
    }    
)

const storyModel = mongoose.model("Stories", storySchema)
module.exports = storyModel