const postModel = require("../models/postModel");


var temmPost = []

const postController = {};

postController.getAllPost = async (req, res) => {
    res.send(temmPost)
}

postController.addPost = async (req, res) => {
    const { content, author } = req.body;
    const newPost = postModel({
        content: content,
        author: author
    })

    temmPost.push(newPost)
    res.send(temmPost)
}


module.exports = postController;