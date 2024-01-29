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
            PROJETS
         </h1>
         <div className="grid grid-cols-3 justify-items-center justify-around gap-10 mt-10">
            <div className="flex md:flex-row max-w-[400px] border-[1px] border-cyan-600 hover:border-lime-200 rounded-xl overflow-hidden bg-transparent px-10 py-2">
               <Link
                  href="https://r3vive.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="z-[1]"
               >
                  <div className="flex-row flex items-center">
                     <Image
                        src="/logoR3VIVE.jpg"
                        height={150}
                        width={150}
                        alt="R3vive project"
                     />
                     <p className="text-gray-500 text-sm p-3">
                        Prototype complexe de la plateforme R3VIVE. Venez
                        récupérer votre certificat sécurisé.
                     </p>
                  </div>
               </Link>
            </div>
            <div className="flex flex-row items-center max-w-[400px] border-[1px] border-cyan-600 hover:border-lime-200 rounded-xl overflow-hidden bg-transparent px-10 py-2">
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
                        <p className="text-gray-500 text-sm">
                           Cherche tes emojis préférés.
                        </p>
                     </div>
                  </div>
               </Link>
            </div>
            <div className="flex flex-row items-center max-w-[400px] border-[1px] border-cyan-600 hover:border-lime-200 rounded-xl overflow-hidden bg-transparent px-10 py-2">
               <Link
                  href="https://my-nba-livid.vercel.app/login"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="z-[1]"
               >
                  <div className="flex-row flex items-center my-auto">
                     <Image
                        src="/nba.svg"
                        height={100}
                        width={100}
                        alt="Emojis"
                     />
                     <div className="p-3 h-full ml-3">
                        <p className="text-white text-2xl">My NBA</p>
                        <p className="text-gray-500 text-sm">
                           Plateforme d&apos;échange autour des joueurs de NBA.
                        </p>
                     </div>
                  </div>
               </Link>
            </div>
         </div>
         <div className="flex flex-row items-end justify-center mt-20">
            <p className="font-semibold text-3xl text-gray-200 hover:text-lime-200 cursor-pointer">
               {" "}
               A suivre{" "}
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
