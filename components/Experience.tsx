import React from "react";

const Experience = () => {
   return (
      <section
         id="experience"
         className="flex flex-row items-center justify-center h-full overflow-hidden"
         style={{ transform: "scale(0.9" }}
      >
         <div className="flex flex-col justify-around flex-wrap items-center max-w-3xl">
            <h1 className="font-semibold text-center text-5xl text-transparent bg-clip-text bg-gradient-to-r  from-cyan-700 to-lime-200 pb-5">
               EXPERIENCE
            </h1>
            <p className="text-white text-center my-5 text-base">
               J&apos;ai travailler durant 2 ans pour en tant que développeur
               intégrateur pour un client du secteur banquaire. Je connais bien
               les méthodes de gestion de projet notamment agile et j&apos;
               l&apos;habitude de travailler en équipe. Jai développer des
               projets supplémentaire de mon coté que vous pourrez parcourir
               plus bas. N&ppos;hésitez pas à passer sur mon GitHub je suis toujours
               sur un nouveau projet afin de ne pas perdre la main.
            </p>
            <div className="flex space-x-4">
               <div className="bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-400">
                  React
               </div>
               <div className="bg-transparent mt-5  cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-400">
                  JavaScript
               </div>
               <div className="bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-400">
                  Typescript
               </div>
               <div className="bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-400">
                  Node.js
               </div>
               <div className="bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-400">
                  Solidity
               </div>
            </div>
         </div>
      </section>
   );
};

export default Experience;
