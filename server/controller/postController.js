const { User, Post } = require("../models");
const sequelize = require("sequelize");
const { cloudinary } = require ("../config/cloudinary");

const routes = {};

routes.createPost = async (req, res) => {
  try {
    const errorCheck = req.error;
    if(errorCheck) {
      res.status(500).send({ status: 500, message: errorCheck });
    }
    else {
      let status = 200;
      let message = "OK";
      const fileStr = req.file.path;
      const uploadRes = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "dev_setup",
      });
      const data = {
        image: uploadRes.secure_url,
        cloudinaryId: uploadRes.public_id,
        description: req.body.description,
        userId: req.body.userId,
      };
      const result = await Post.create(data);
      res.status(status).send({
        status: status,
        message: message,
        data: result,
      })
    }
  } catch (error) {
    res.status(500).send({
     status: 500,
     message: "Posting Failed",
    });
  }
};

routes.getAllPost = async (req, res) => {
  try {
    let status = 200;
    let message = "OK";
    const userId = req.body.userId;
    const userPosts = await Post.findAll({
      where : {
        userId,
      },
    });
    
    res.status(status).send({
     status: status,
     message: message,
     data: userPosts,
    }) 
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Failed to get user post",
      erorr: error,
      });
  }
};
module.exports = routes;