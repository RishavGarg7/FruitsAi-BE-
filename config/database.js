import mongoose from "mongoose";

const database = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected: ", process.env.MONGODB_URL);
  } catch (err) {
    console.log("DB Connection Error: ", err);
  }
};

export default database;
