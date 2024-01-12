const postController = require("../controllers/postController");

const router = require("express").Router();


router.get("/get-post", postController.addPost)

module.exports = router;