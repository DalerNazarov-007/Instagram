const express = require("express");
const mongoose = require("mongoose");
const commentsRouter = require("./routes/comments.router");
const postsRouter = require("./routes/posts.router");
const usersRegisterRouter = require("./routes/user.register.router");
const usersLoginRouter = require("./routes/user.login.router");
const storiesRouter = require("./routes/stories.router");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/InstagramUsers").then(() => {
  console.log("Connected!");
});

app.use("/comments", commentsRouter)
app.use("/posts", postsRouter)
app.use("/stories", storiesRouter)

app.use("/register", usersRegisterRouter)
app.use("/login", usersLoginRouter)

app.use((error, req, res, next) => {
    res.send({message: error.message})
})

app.listen(4444, () => {
  console.log("Server running on port 4444!");
});
