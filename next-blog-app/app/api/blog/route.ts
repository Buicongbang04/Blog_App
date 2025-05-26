import { ConnectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs";
import BlogModel from "@/lib/models/BlogModel";
import fs from "fs";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// API for fetching blog posts
export async function GET(request: Request) {
  const blogId = request.nextUrl.searchParams.get("id");

  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await BlogModel.find({});

    return NextResponse.json({
      msg: "New Blogs Updated",
      blogs,
    });
  }
}

// API for uploading a blog post
export async function POST(request: Request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image") as File;
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return NextResponse.json(
        { error: "Failed to save image" },
        { status: 500 }
      );
    }
  });
  const imageUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imageUrl}`,
    authorImage: `${formData.get("authorImage")}`,
  };

  await BlogModel.create(blogData);
  console.log("Blog created successfully:", blogData);

  return NextResponse.json(
    { success: true, msg: "Blog Added" },
    { status: 201 }
  );
}

// API to delete a blog post
export async function DELETE(request: Request) {
  const id = request.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);

  fs.unlink(`./public/${blog.image}`, () => {});

  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json(
    { success: true, msg: "Blog Deleted" },
    { status: 200 }
  );
}
