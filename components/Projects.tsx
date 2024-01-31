import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
   return (
      <section
         id="projects"
         className="flex flex-col items-center justify-center h-full overflow-hidden transform scale-90"
      >
         <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-lime-200 to-cyan-700 font-semibold text-5xl">
            PROJECTS
         </h1>
         <div className="grid grid-cols-3 justify-items-center justify-around gap-10 mt-10">
            <div className="flex flex-row items-center max-w-[600px] overflow-hidden bg-transparent px-10 py-2 hover:-translate-y-1 hover:scale-110 transition ease-in">
               <Link
                  href="https://r3vive.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="z-[1]"
               >
                  <div className="flex-row flex items-center">
                     <Image
                        src="/logoR3VIVE.jpg"
                        height={120}
                        width={120}
                        alt="R3vive project"
                     />
                     <div className="p-3 h-full w-full ml-3">
                        <p className="text-white text-2xl">R3vive.com</p>
                        <br />
                        <p className="text-gray-500 text-sm">
                           Complexe prototype of a plateforme to secured
                           certificate of luxury watches.
                        </p>
                     </div>
                  </div>
               </Link>
            </div>

            <div className="flex flex-row items-center max-w-[400px] overflow-hidden bg-transparent px-10 py-2 hover:-translate-y-1 hover:scale-110 transition ease-in">
               <Link
                  href="https://portfolio-camsaka.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="z-[1]"
               >
                  <div className="flex-row flex items-center my-auto">
                     <Image
                        src="/logo-whithoutname.svg"
                        height={120}
                        width={120}
                        alt="Emojis"
                     />
                     <div className="p-3 h-full ml-3">
                        <p className="text-white text-2xl">Camsaka.com</p>
                        <br />
                        <p className="text-gray-500 text-sm">
                           My personnal website, where you are now.
                        </p>
                     </div>
                  </div>
               </Link>
            </div>
            <div className="flex flex-row items-center max-w-[400px] overflow-hidden bg-transparent px-10 py-2 hover:-translate-y-1 hover:scale-110 transition ease-in">
               <Link
                  href="https://emojis-search-phi.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="z-[1]"
               >
                  <div className="flex-row flex items-center my-auto">
                     <Image
                        src="/EmojiProject.svg"
                        height={100}
                        width={100}
                        alt="Emojis"
                     />
                     <div className="p-3 h-full ml-3">
                        <p className="text-white text-2xl">Emojis Search</p>
                        <br />
                        <p className="text-gray-500 text-sm">
                           Look for your favourite emoji.
                        </p>
                     </div>
                  </div>
               </Link>
            </div>
         </div>
         <div className="flex flex-row items-end justify-center mt-20">
            <p className="font-semibold text-3xl text-gray-200 hover:text-lime-200 cursor-pointer">
               To be continued{" "}
            </p>
            <div className="loader-container w-auto h-auto">
               <div className="loader h-1.5 w-1.5"></div>
               <div className="loader h-1.5 w-1.5"></div>
               <div className="loader h-1.5 w-1.5"></div>
            </div>
         </div>
      </section>
   );
};

export default Projects;
