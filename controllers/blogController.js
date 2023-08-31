const mongoose = require("mongoose");
const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel");
const cloudinary = require("cloudinary").v2;

// cloudinary config

cloudinary.config({
  cloud_name: "dtmp7op6k",
  api_key: "989387644814239",
  api_secret: "IYVOamSGXPxz0C0iulGleE0axr4",
});

// get blogs

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find({}).populate("user");

    if (!blogs) {
      return res.status(400).send({
        success: false,
        message: "Get blogs failed",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Get blogs successfully",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Internal server error",
      error,
    });
  }
};

// create blog

exports.createBlog = async (req, res) => {
  try {
    const { title, description, image, slug, user } = req.body;
    if (!title || !description || !image || !slug || !user) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }

    const checkExistingUser = await userModel.findById(user);

    if (!checkExistingUser) {
      return res.status(400).send({
        success: false,
        message: "User not found",
      });
    }

    // upload image to cloudinary

    const cloudinaryUpload = await cloudinary.uploader.upload(image, {
      folder: "blogApp",
    });

    const createBlog = new blogModel({
      title,
      description,
      image: cloudinaryUpload.secure_url,
      slug,
      user,
    });

    const session = await mongoose.startSession();
    session.startTransaction();
    await createBlog.save({ session });
    checkExistingUser.blogs.push(createBlog);
    await checkExistingUser.save({ session });
    await session.commitTransaction();
    await createBlog.save();

    return res.status(200).send({
      success: true,
      message: "Blog created successfully",
      createBlog,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "Blog not created",
      error,
    });
  }
};

// update blog

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, description, image, slug } = req.body;

    const blog = await blogModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    return res.status(200).send({
      success: true,
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "Blog not updated",
      error,
    });
  }
};

// get blog details

exports.getBlogDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await blogModel.findById(id);
    if (!blog) {
      return res.status(400).send({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Blog found",
      blog,
    });
  } catch (error) {
    console.log(error);

    return res.status(400).send({
      success: false,
      message: "error  blog details not found",
    });
  }
};

// delete blog

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await blogModel
      .findByIdAndDelete(req.params.id)
      .populate("user");
    await blog.user.blogs.pull(blog);
    await blog.user.save();

    return res.status(200).send({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(400).send({
      success: false,
      message: "Blog not deleted",
      error,
    });
  }
};

// get blog by user created

exports.getBlogByUser = async (req, res) => {
  try {
    const userBlog = await userModel.findById(req.params.id).populate("blogs");

    if (!userBlog) {
      return res.status(400).send({
        success: false,
        message: "blog not found",
      });
    }

    return res.status(200).sen({
      success: true,
      message: "blog found",
      userBlog,
    });
  } catch (error) {
    console.log(error);

    return res.status(400).send({
      success: false,
      message: "blog not found",
    });
  }
};
