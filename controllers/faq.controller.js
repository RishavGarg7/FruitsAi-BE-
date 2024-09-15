import mongoose from "mongoose";
import Faqs from "../models/faq.model.js";

export const createfaq = async (req, res, next) => {
  try {
    const { title, desc } = req.body;
    const data = await Faqs.create({ title, desc });
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
      message: "Server Error Occured !!",
    });
  }
};

export const getfaq = async (req, res) => {
  try {
    const data = await Faqs.find();
    return res.status(200).json({
      success: true,
      data: data,
      message: "Successfully Fetched !!",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error Occured !!",
    });
  }
};

export const updatefaq = async (req, res) => {
  try {
    const { id, title, desc } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: `No User with id: ${id}` });
    }
    const data = await Faqs.findByIdAndUpdate(
      id,
      { title, desc },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      data: data,
      message: "Successfully Updated !!",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error Occured !!",
    });
  }
};

export const deletefaq = async (req, res) => {
  try {
    const { id } = req.params;
    await Faqs.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Successfully Deleted !!",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error Occured !!",
    });
  }
};
