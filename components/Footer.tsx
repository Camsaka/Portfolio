import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
   return (
      <div className=" container mx-auto 2xl pt-[50px] pb-8 ">
         <div className="pb-10 justify-center flex ">
            {Social_Icons.map((social) => {
               return (
                  <Link
                     href={social.link}
                     rel="noopener noreferrer"
                     target="_blank"
                     key={social.alt}
                  >
                     <Image
                        src={social.image}
                        height={30}
                        width={30}
                        className="mx-5"
                        alt={social.alt}
                     />
                  </Link>
               );
            })}
         </div>
         <div className="flex flex-row items-center justify-center mt-3">
            {" "}
            <p className="text-gray-300 text-center text-sm">
               Developed with Next.js
            </p>
            <Image
                  src={"/vercel.svg"}
                  height={20}
                  width={20}
                  className="mx-2"
                  alt="vercel_logo"
               />
         </div>
      </div>
   );
};

export default Footer;
