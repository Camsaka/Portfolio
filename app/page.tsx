import Background from "@/components/Background";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export default function Home() {
   return (
      <main className="h-full w-full">
         <Background
            starCount={10000}
            starColor={[255, 255, 255]}
            speedFactor={0.008}
            backgroundColor="black"
         />
         <div className="flex flex-col gap-20">
            <Navbar />
            <Banner />
            <About />
            <Experience />
            <Projects />
            <Footer />
         </div>
      </main>
   );
}
