import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all Details!!" });
    }
    const isUser = await User.findOne({ email });
    if (isUser) {
      return res
        .status(409)
        .json({ success: false, message: "Already a user, Please Login!!" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ success: false, message: "Password least length is 6!!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const data = await User.create({ email, password: hashedPassword });
    data.password = undefined;
    return res.status(200).json({
      success: true,
      data: data,
      message: "Successfully Created !!",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Error While Creating User !!",
    });
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all Details!!" });
    }
    const isUser = await User.findOne({ email });
    const matchPsw = isUser
      ? await bcrypt.compare(password, isUser.password)
      : false;
    if (!isUser || !matchPsw) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password!!",
      });
    }
    isUser.password = undefined;
    return res.status(200).json({
      success: true,
      data: isUser,
      message: "Successfully Logged in !!",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(404).json({
      success: false,
      error: err.message,
      message: "No User Found !!",
    });
  }
};
