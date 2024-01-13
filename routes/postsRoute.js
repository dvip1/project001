const postController = require("../controllers/postController");

const router = require("express").Router();

router.route("/post")
    .get(postController.getAllPost)
    .post(postController.addPost)

module.exports = router;