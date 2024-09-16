import mongoose, { Schema } from "mongoose";

const faqSchema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  title: { type: String, required: [true, "Title is required"] },
  desc: { type: String, required: [true, "Description is required"] },
  // img: { type: String, required: [true, "Thumbnail is required"] },
});

const Faqs = mongoose.model("Faq", faqSchema);
export default Faqs;
