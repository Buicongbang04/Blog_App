"use client";
import { assets, blog_data } from "@/Assets/assets";
import { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Footer from "@/Components/Footer";
import Link from "next/link";

interface BlogData {
  id: number;
  title: string;
  description: string;
  image: StaticImageData; // Replace 'any' with 'StaticImageData' if you have the type imported
  date: number;
  category: string;
  author: string;
  author_img: StaticImageData; // Replace 'any' with 'StaticImageData' if you have the type imported
}

const page = () => {
  const params = useParams();
  const [data, setData] = useState<BlogData | null>(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);
  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={assets.logo}
              alt="logo"
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000] cursor-pointer">
            Get Started <Image src={assets.arrow} alt="arrow" />
          </button>
        </div>

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.author_img}
            width={60}
            height={60}
            alt="Author image"
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data.image}
          width={1280}
          height={720}
          alt="Blog image"
          className="border-4 border-white "
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          praesentium, quidem iure, nemo qui eum rerum ea dolorum voluptas
          suscipit dignissimos hic cupiditate veritatis itaque obcaecati
          molestiae blanditiis eaque necessitatibus?
        </p>
        <p className="my-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          praesentium, quidem iure, nemo qui eum rerum ea dolorum voluptas
          suscipit dignissimos hic cupiditate veritatis itaque obcaecati
          molestiae blanditiis eaque necessitatibus?
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step 2: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          praesentium, quidem iure, nemo qui eum rerum ea dolorum voluptas
          suscipit dignissimos hic cupiditate veritatis itaque obcaecati
          molestiae blanditiis eaque necessitatibus?
        </p>
        <p className="my-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          praesentium, quidem iure, nemo qui eum rerum ea dolorum voluptas
          suscipit dignissimos hic cupiditate veritatis itaque obcaecati
          molestiae blanditiis eaque necessitatibus?
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step 3: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          praesentium, quidem iure, nemo qui eum rerum ea dolorum voluptas
          suscipit dignissimos hic cupiditate veritatis itaque obcaecati
          molestiae blanditiis eaque necessitatibus?
        </p>
        <p className="my-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          praesentium, quidem iure, nemo qui eum rerum ea dolorum voluptas
          suscipit dignissimos hic cupiditate veritatis itaque obcaecati
          molestiae blanditiis eaque necessitatibus?
        </p>

        <h3 className="my-5 text-[18px] font-semibold">Conclusion</h3>
        <p className="my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
          exercitationem minima ullam labore, provident delectus neque cum earum
          qui obcaecati doloribus, eos culpa adipisci officia numquam vel
          laudantium dolor, quam laborum eveniet accusamus nostrum? Quaerat
          architecto molestiae maxime necessitatibus totam blanditiis aperiam,
          accusamus fugit debitis, ipsa voluptatem amet iusto laboriosam
          voluptate provident officiis obcaecati libero impedit rem repellat
          nostrum nemo!
        </p>

        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this aricle on social media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="Facebook" />
            <Image src={assets.twitter_icon} width={50} alt="Twitter" />
            <Image src={assets.googleplus_icon} width={50} alt="Google Plus" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  ) : (
    <></>
  );
};

export default page;
