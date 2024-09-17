import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: [true, "Email is required"] },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const User = mongoose.model("Users", userSchema);
export default User;
