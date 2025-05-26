import { blog_data } from "@/Assets/assets";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

type Blog = {
  _id: string;
  image: string;
  title: string;
  description: string;
  category: string;
};

const BlogList = () => {
  const [menu, setMenu] = useState("ALL");
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("ALL")}
          className={
            menu === "ALL"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "cursor-pointer"
          }
        >
          ALL
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "cursor-pointer"
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={
            menu === "Startup"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "cursor-pointer"
          }
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "cursor-pointer"
          }
        >
          Lifestyle
        </button>
      </div>

      <div className="flex flex-wrap gap-3 gap-y-10 mb-16 xl:mx-24 cursor-pointer">
        {blogs
          .filter((item) => (menu === "ALL" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <BlogItem
                key={index}
                id={item._id}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
