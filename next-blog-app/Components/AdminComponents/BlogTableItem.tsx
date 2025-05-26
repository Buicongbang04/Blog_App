import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

interface BlogTableItemProps {
  authorImage?: string;
  title?: string;
  author?: string;
  date?: string;
  mongoId: string;
  deleteBlog: (id: string) => void;
}

const BlogTableItem: React.FC<BlogTableItemProps> = ({
  authorImage,
  title,
  author,
  date,
  deleteBlog,
  mongoId,
}) => {
  const BlogDate = new Date(date || "");
  console.log("BlogDate", BlogDate);
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          width={40}
          height={40}
          src={authorImage ? authorImage : assets.profile_icon}
          alt="author icon"
        />
        <p>{author ? author : "No author"}</p>
      </th>

      <td className="px-6 py-4">{title ? title : "No Title"}</td>

      <td className="px-6 py-4">{BlogDate.toDateString()}</td>

      <td
        onClick={() => deleteBlog(mongoId)}
        className="px-6 py-4 cursor-pointer"
      >
        x
      </td>
    </tr>
  );
};

export default BlogTableItem;
