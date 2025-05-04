const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 20
    },
    surname: {
        type: String,
        minLength: 3,
        maxLength: 20
    },
    username:{
        type: String,
        minLength: 3,
        maxLength: 30
    },
    email: {
        type: String,
        min: 5,
        max: 20
    }, 
    password: {
        type: String,
        min: 5,
        max: 20
    },      
    birthYear: {
        type: Number,
        min: 1950,
        max: 2024
    }}, 
    {
        timestamps: true,
    }    
)

const userModel = mongoose.model("Users", userSchema)
module.exports = userModel