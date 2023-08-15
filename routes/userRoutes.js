const express = require("express");

const {
  register,
  getAllUser,
  login,
} = require("../controllers/userController");

const router = express.Router();

router.get("/users", getAllUser);

router.post("/register", register);

router.post("/login", login);

module.exports = router;
