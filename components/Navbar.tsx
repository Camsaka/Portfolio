"use client";

import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-['#111'] fixed z-50">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-4">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        <div className="flex flex-row gap-5">
          <div
            onClick={() => window.open("mailto:camille.gaut@sfr.fr")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
