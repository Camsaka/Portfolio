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
               I&apos;m a 26 years old developer with a master&apos;s degree in
               computer science, certified as a Blockchain Tech Lead and have
               been self-taught since I was young. I&apos;m curious, a team
               player and a perfectionist. I&apos;m always looking to learn and
               improve, and I&apos;m not afraid to take on new projects.
               <br />
               <br />
               I can develop any type of application for you from scratch
               or overhaul your existing applications. With a web3 speciality, I
               can also help you understand and implement use cases on
               blockchain.
            </p>
         </div>
      </section>
   );
};

export default About;
