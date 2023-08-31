const express = require("express");

const {
  getBlogs,
  createBlog,
  getBlogDetails,
  updateBlog,
  deleteBlog,
  userBlogControlller,
} = require("../controllers/blogController");

const router = express.Router();

router.get("/blogs", getBlogs);

router.post("/createBlog", createBlog);

router.put("/updateBlog/:id", updateBlog);

router.get("/blogDetails/:id", getBlogDetails);

router.delete("/deleteBlog/:id", deleteBlog);

router.get("/blogUser/:id", userBlogControlller);

module.exports = router;
