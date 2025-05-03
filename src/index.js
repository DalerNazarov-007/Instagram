const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users.router");
const commentsRouter = require("./routes/comments.router");
const postsRouter = require("./routes/posts.router");
const usersRegisterRouter = require("./routes/userRegister.router");
const userModel = require("./models/user");
const jwt = require("jsonwebtoken")


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/InstagramUsers").then(() => {
  console.log("Connected!");
});

app.use("/users", usersRouter)
app.use("/comments", commentsRouter)
app.use("/posts", postsRouter)

app.use("/register", usersRegisterRouter)
app.use("/login")

app.use((error, req, res, next) => {
    res.send({message: error.message})
})

app.listen(4444, () => {
  console.log("Server running on port 4444!");
});
