import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://buicongbang1010:Bcb1010@cluster0.ucwn9qy.mongodb.net/blog_app"
  );
  console.log("MongoDB connected successfully");
};
