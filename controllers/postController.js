const postModel = require("../models/postModel");

const postController = {};

postController.addPost = async (req, res) => {
    const { content, author } = req.body;

    const newPost = await postModel.create({
        content: content,
        author: author
    })

    if (newPost) res.json({ message: "post created", data: newPost })
    else res.json({ message: "failed to create post" })
}

postController.getPost = async (req, res) => {
    const postId = req.params.postId;
    const post = await postModel.findOne({ _id: postId }).lean().exec();
    if (post) res.json({ data: post })
    else res.status(404).json({ message: "post not found" })
}

postController.deletePost = async (req, res) => {
    const postId = req.params.postId;
    await postModel.findByIdAndDelete({ _id: postId })
    res.json({ message: "post deleted" })
}


postController.updatePost = async (req, res) => {
    const { content, author, postId } = req.body;
    const updatedPost = await postModel.findByIdAndUpdate(
        { _id: postId },
        { content: content, author: author },
        { new: true });
    res.json({ message: "post updated", data: updatedPost })
}

module.exports = postController;