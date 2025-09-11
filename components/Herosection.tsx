'use client';
import Link from "next/link";
import 'animate.css';
import { TypingAnimation } from "@/components/magicui/typing-animation";
export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/code.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-gray-900/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl ">

          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight text-white animate__animated animate__zoomInDown animate__delay-4s ">
            Hi,I'm <span className="text-green-400 text-8xl font-tre text-shadow-lg shadow-white ">M0H1T</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-green-400 mb-1 font-bold animate__animated animate__backInUp animate__delay-5s">
            Software Developer & Problem Solver
          </h2>
          <div className="text-sm md:text-2xl mb-8 text-white max-w-3xl mx-auto leading-relaxed ">
            <TypingAnimation className="text-2xl font-serif"> I craft digital experiences through clean code and innovative solutions.
            Passionate about creating software that makes a difference in the world.</TypingAnimation>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 ">
            <Link href="https://www.linkedin.com/in/mohit-sharma-a66302227" target="_blank">
               <button className="bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-2xl whitespace-nowrap cursor-pointer">
              Let's Connect!
            </button>
            </Link>
            <Link href="https://drive.google.com/file/d/1Fytdxvo5NC9oy6VNZDl1W2DfYBIzkDnQ/view?usp=sharing" target="_blank">
              <button className="border-3 border-white text-white hover:bg-white hover:text-gray-900 px-12 py-5 rounded-lg text-xl font-bold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              Download Resume
            </button>
            </Link>           
          </div>
        </div>
      </div>
    </section>
  );
}
