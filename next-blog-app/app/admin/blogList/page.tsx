"use client";
import BlogTableItem from "@/Components/AdminComponents/BlogTableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Blog = {
  _id: string;
  title: string;
  author: string;
  authorImage?: string;
  date: string;
};

const page = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };

  const deleteBlog = async (mongoId: string) => {
    const response = await axios.delete(`/api/blog`, {
      params: { id: mongoId },
    });
    toast.success(response.data.msg);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Author Name
              </th>
              <th scope="col" className="px-6 py-3">
                Blog Title
              </th>
              <th scope="col" className="px-6 py-3">
                Blog Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, index) => {
              return (
                <BlogTableItem
                  deleteBlog={deleteBlog}
                  key={index}
                  mongoId={item._id}
                  title={item.title}
                  author={item.author}
                  authorImage={item.authorImage}
                  date={item.date}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
