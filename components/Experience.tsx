import Image from "next/image";
import React from "react";

const Experience = () => {
   return (
      <section
         id="experience"
         className="flex flex-col items-center justify-center h-full overflow-hidden transform scale-90"
      >
         <h1 className="font-semibold text-5xl text-transparent bg-clip-text bg-gradient-to-r  from-cyan-700 to-lime-200 pb-5">
            EXPERIENCE
         </h1>
         <div className="flex md:flex-row sm:flex-col justify-evenly items-start w-full p-3 ">
            <div className="flex flex-col items-center text-center">
               <h1 className="text-4xl  font-light text-gray-300 tracking-tighter transition ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer duration-150">
                  FRONTEND
               </h1>
               <div className="flex flex-row space-x-3 bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  <Image src="typescript.svg" alt="ts" height={25} width={25}></Image>
                  <p>Typescript</p>
               </div>
               <div className="flex flex-row space-x-3 bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  <Image src="react.svg" alt="ts" height={25} width={25}></Image>
                  <p>ReactJS</p>
               </div>
               <div className="flex flex-row space-x-3 bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  <Image src="next.svg" alt="ts" height={25} width={25}></Image>
                  <p>Next.JS</p>
               </div>
               <div className="flex flex-row space-x-3 bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  <Image src="tailwind.svg" alt="ts" height={25} width={25}></Image>
                  <p>Tailwind CSS</p>
               </div>
            </div>
            <div className="flex flex-col items-center text-center">
               <h1 className="text-4xl  font-light text-gray-300 tracking-tighter transition ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer duration-150">
                  BACKEND
               </h1>
               <div className="flex flex-row space-x-3 bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  <Image src="node.svg" alt="ts" height={25} width={25}></Image>
                  <p>NodeJS</p>
               </div>
               <div className="flex flex-row space-x-3 bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  <Image src="express.svg" alt="ts" height={25} width={25}></Image>
                  <p>Express</p>
               </div>
               <div className="flex flex-row space-x-3 bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  <Image src="postgresql.svg" alt="ts" height={25} width={25}></Image>
                  <p>Postgresql</p>
               </div>
               <div className="flex flex-row space-x-3 bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  <Image src="prisma.svg" alt="ts" height={25} width={25}></Image>
                  <p>Prisma</p>
               </div>
               <div className="flex flex-row space-x-3 bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  <Image src="python.svg" alt="ts" height={25} width={25}></Image>
                  <p>Python</p>
               </div>
            </div>
            <div className="flex flex-col items-center text-center">
               <h1 className="text-4xl  font-light text-gray-300 tracking-tighter transition ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer duration-150">
                  WEB3
               </h1>
               <div className="flex flex-row space-x-3 bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  <Image src="solidity.svg" alt="ts" height={25} width={25}></Image>
                  <p>Solidity</p>
               </div>
               <div className="flex flex-row space-x-3 bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  <Image src="ethersjs.svg" alt="ts" height={25} width={25}></Image>
                  <p>Ethers.js</p>
               </div>
               <div className="flex flex-row space-x-3 bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  <Image src="hardhat.svg" alt="ts" height={25} width={25}></Image>
                  <p>Hardhat</p>
               </div>
               <div className="flex flex-row space-x-3 bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  <Image src="wagmi.svg" alt="ts" height={25} width={25}></Image>
                  <p>Wagmi</p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Experience;
