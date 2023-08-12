const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

exports.register = async (req, res) => {
  try {
    const { name, username, password, email } = req.body;

    if (!name || !username || !password || !email) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }

    const checkExistingUser = await userModel.findOne({ email });

    if (checkExistingUser) {
      return res.status(400).send({
        success: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      username,
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    return res.status(200).send({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "User not created",
      error,
    });
  }
};

// all user

exports.getAllUser = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).send({
      success: true,
      message: "Get users successfully",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "cannot get user server error",
      error,
    });
  }
};

// user login

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "please enter all fields",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "email is not registered",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send({
        success: false,
        message: "invalid credentials",
      });
    }

    return res.status(200).send({
      success: true,
      message: "login successfully",
      user,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "error while login",
      error,
    });
  }
};
