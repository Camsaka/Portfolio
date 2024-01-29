"use client";

import React from "react";
import Image from "next/image";
export default function Banner() {
   return (
      <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20] ">
         <div className="flex flex-col justify-center text-center">
            {/* <div className="justify-center flex ">
                <Image src="/Me.png" height={300} width={300} alt="Ibrahim Memon" />
              </div> */}

            <div className="text-white text-7xl font-semibold tracking-tighter cursor-pointer bg-clip-text transition ease-in-out hover:text-transparent hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-lime-200 to-cyan-700 duration-300 h-auto w-auto my-5">
               CAMILLE GAUTIER
            </div>
            <p className="text-2xl font-medium text-gray-300">
               Je code avec
               <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-lime-200 to-cyan-700">
                  {" "}
                  Passion
               </span>{" "}
               🚀
            </p>
            <p className="text-md text-gray-200 my-5 max-w-xl">
               Jeune développeur passionné, je développe des applications web
               performantes et sécurisées.
            </p>
            <div className="text-md flex justify-center">
               <button
                  onClick={() => window.open("mailto:camille.gautier.pro@gmail.com")}
                  className="text-white font-semibold hover:bg-white rounded-3xl hover:text-gray-950 py-3 px-10 border border-white hover:border-transparent"
               >
                  Contacter moi
               </button>
            </div>
         </div>
      </div>
   );
}
