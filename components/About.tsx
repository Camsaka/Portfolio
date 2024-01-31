import React from "react";

const About = () => {
   return (
      <section
         id="about"
         className="flex flex-col items-center justify-center h-full overflow-hidden transform scale-90"
      >
         <div className="flex flex-col justify-around flex-wrap items-center max-w-3xl">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-lime-200 to-cyan-700 font-semibold text-5xl pb-10">
               ABOUT ME
            </h1>
            <p className="text-gray-300 text-center text-base">
               I&apos;m a 26-year-old developer with a master&apos;s degree in
               computer science, certified as a Blockchain Tech Lead and have
               been self-taught since I was young. I&apos;m curious, a team
               player and a perfectionist. I&apos;m always looking to learn and
               improve, and I&apos;m not afraid to take on new projects.
               <br />
               <br />
               I&apos;m proficient in programming languages like JavaScript and
               TypeScript, as well as frameworks like Express and ReactJS. I
               also have a good knowledge of object-oriented programming and SQL
               and NoSQL languages. With a specialisation in web3, I also know
               how to use the tools needed to integrate it into your
               applications. Solidity and Ethers.js hold no secrets for me.
            </p>
         </div>
      </section>
   );
};

export default About;
