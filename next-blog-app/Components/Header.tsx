import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Header = () => {
  const [email, setEmail] = useState("");
  interface EmailResponse {
    success: boolean;
    msg: string;
  }

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post<EmailResponse>("/api/email", formData);
    if (response.data.success) {
      setEmail("");
      toast.success(response.data.msg);
    } else {
      toast.error("Failed to save email");
    }
  };

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt=""
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get Started <Image src={assets.arrow} alt="" />
        </button>
      </div>

      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          nesciunt ipsam accusamus ducimus. Odit molestias nam beatae quasi
          magni fugit!
        </p>
        <form
          onSubmit={onSubmitHandler}
          action=""
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button
            type="submit"
            className="border-l border-black py-4 px-4 sm:px-8 hover:bg-gray-800 hover:text-white transition-all duration-300 text-xs sm:text-base font-medium"
          >
            Subcribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
