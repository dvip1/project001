const postController = require("../controllers/postController");

const router = require("express").Router();

router.route("/post")
    .post(postController.addPost)
    .put(postController.updatePost)

router.route("/post/:postId")
    .get(postController.getPost)
    .delete(postController.deletePost)

module.exports = router;