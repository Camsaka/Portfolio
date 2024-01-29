import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
   return (
      <section id="projects" style={{ transform: "scale(0.9" }}>
         <h1 className="font-semibold text-center text-5xl text-transparent bg-clip-text bg-gradient-to-r  from-cyan-700 to-lime-200 tracking-tighter p-1">
            PROJECTS
         </h1>
         <div className="flex flex-col justify-center">
            <div className="grid grid-cols-3 justify-items-center gap-10 mt-10">
               <div className="flex flex-col md:flex-row max-w-[400px] border-[1px] border-cyan-600 hover:border-lime-200 rounded-xl overflow-hidden bg-transparent px-10 py-2">
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
                        <div className="p-3 h-full">
                           <p className="text-gray-500 text-sm">
                              Prototype complexe de la plateforme R3VIVE. Venez
                              récupérer votre certificat sécurisé.
                           </p>
                        </div>
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
                           ba
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
            <div className="flex flex-row items-end justify-center mt-8">
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
         </div>
      </section>
   );
};

export default Projects;
