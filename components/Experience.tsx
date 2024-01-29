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
               intégrateur pour un client du secteur banquaire. J&apos;ai
               contribué au développement et à la dockerisation de la
               plateforme, résolu des anomalies, géré le versioning et le CI/CD
               avec Gitlab. Mon rôle comprenait également la collecte des
               besoins, l&apos;estimation des charges, la rédaction de
               spécifications fonctionnelles et la formation des nouveaux
               arrivants.
               <br />
               <br />
               Je suis polyvalent et contribue sur tout les plans à
               l&apos;efficacité opérationnelle de l&apos;équipe. Je connais
               bien les méthodes de gestion de projet notamment agile et
               j&apos;ai l&apos;habitude de travailler en équipe. Je développe
               également des side projects que vous pouvez parcourir plus bas.
               <br />
               N&apos;hésitez pas à passer sur mon GitHub.
            </p>
            <div className="flex space-x-4">
               <div className="bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  React
               </div>
               <div className="bg-transparent mt-5  cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  JavaScript
               </div>
               <div className="bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  Typescript
               </div>
               <div className="bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  Node.js
               </div>
               <div className="bg-transparent mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:bg-slate-600">
                  Solidity
               </div>
            </div>
         </div>
      </section>
   );
};

export default Experience;
