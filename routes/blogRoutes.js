const express = require("express");

const {
  getBlogs,
  createBlog,
  getBlogDetails,
  updateBlog,
  deleteBlog,
  getBlogByUser,
} = require("../controllers/blogController");

const router = express.Router();

router.get("/blogs", getBlogs);

router.post("/createBlog", createBlog);

router.put("/updateBlog/:id", updateBlog);

router.get("/blogDetails/:id", getBlogDetails);

router.delete("/deleteBlog/:id", deleteBlog);

router.get("/blogByUser/:id", getBlogByUser);

module.exports = router;
