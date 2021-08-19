const router = require("express").Router();
const postingMiddleware = require("../middleware/postingMiddleware");
const tokenValidation = require("../middleware/tokenValidation");
const postController = require("../controller/postController");

router.post(
    "/posting/create", 
    postingMiddleware.uploadImg, 
    tokenValidation.tokenVerify, 
    postingMiddleware.imgValidate, 
    postController.createPost
    );

router.get("/posting/myPost", tokenValidation.tokenVerify, postController.getAllPost);

module.exports = router;