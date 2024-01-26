import React from "react";

const About = () => {
   return (
      <section
         id="about"
         className="flex flex-col items-center justify-center h-full overflow-hidden"
         style={{ transform: "scale(0.9" }}
      >
         <div className="flex flex-col justify-around flex-wrap items-center max-w-3xl">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-lime-200 to-cyan-700 font-semibold text-5xl pb-10">
               A PROPOS DE MOI
            </h1>
            <p className="text-gray-300 text-center text-base">
               Développeur de 26 ans, titulaire d&apos;un master en
               informatique, certificatifié Tech Lead Blockchain et également
               autodidacte depuis jeune. Je suis curieux, fédérateur et
               perfectionniste, je cherche toujours à apprendre, à
               m&apos;améliorer et n&apos;ai pas peur de me lancer dans de
               nouveaux projets. Je suis actuellement à la recherche d&apos;un
               emploi à Paris.
               <br />
               <br />
               Je maîtrise les langages de programmation tels que JavaScript et
               TypeScript, ainsi que des frameworks comme Node.js, Express, et
               ReactJS. J&apos;ai également une bonne connaissance de la
               programmation orientée objet et des langages SQL et NoSQL. Avec
               une spécialisation dans le web3 je sais également utilisé les
               outils permettant de l&apos;intégrer à vos applications. Solidity
               et Ethers.js n&apos;ont plus aucun secret pour moi.
            </p>
         </div>
      </section>
   );
};

export default About;
