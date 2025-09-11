'use client';
import Image from 'next/image';
import { FaBars } from "react-icons/fa";
import 'animate.css';
import { TypingAnimation } from './magicui/typing-animation';
import  SlideArrowButton  from './animata/button/slide-arrow-button';
export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Realtime Grocery Delivery Platform",
      description: "Realtime Grocery Delivery Application is a cross-platform application built with Flutter that enables users to order groceries and track their deliveries in real-time. The app offers an intuitive and seamless experience, ensuring users can shop from the comfort of their homes and receive their orders quickly.",
      tech: ["Flutter", "Dart", "Node.js", "Firebase", "Mongodb","Express.js", "Scoket.io"],
      image: "/Store.png",
      github: "https://github.com/5keTchDev/RealTime-Grocery-Delivery-System",
      live: "admin.sabjitaja.in/",
      status: "Live",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "WellPredcit",
      description: "An innovative healthcare AI web application that leverages machine learning and deep learning algorithms to provide users with highly accurate disease prediction models..",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      image: "/astronaut.jpg",
      github: "https://github.com/5keTchDev/WellPredict",
      live: "https://github.com/vikasharma005/Healthcare_AI_WebApp",
      status: "Developed",
      category: "Cross-Platfrom App"
    },
    {
      id: 3,
      title: "Caffe Management System",
      description: "Real-time analytics dashboard for tracking user behavior and business metrics with interactive charts and reporting features.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      image: "/Caffe.png",
      github: "https://github.com/5keTchDev/Caffe-Management-System",
      live: " ",
      status: "In Development",
      category: "Backend Api"
    },
    {
      id: 4,
      title: "Flappy Bird Game",
      description: "The goal of the game is to navigate the bird through a series of pipes without colliding with them. It is a fun and addictive game that challenges your reflexes and timing..",
      tech: ["HTML", "CSS", "Javascript", "JWT"],
      image: "/Flappy.png",
      github: "https://github.com/5keTchDev/Flappy-Bird-Game",
      live: "https://github.com/5keTchDev/Flappy-Bird-Game",
      status: "Compeleted",
      category: "Web Game"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-black text-white';
      case 'In Development':
        return 'bg-yellow-200 text-yellow-800';
      case 'Compeleted':
        return 'bg-blue-300 text-blue-800';
      default:    
        return 'bg-green-500 text-black';
    }
  };

  return (
    <div>
      <section id="projects" className="py-10  bg-gray-50 flex items-center relative overflow-hidden">
        {/* Background image behind all content */}
        {/* <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{ backgroundImage: "url('/assets/pages.jpg')" }}
          aria-hidden="true"
        ></div> */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-2xl text-sm font-bold mb-6">
            My Work
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-3 animate__animated animate__bounce animate__delay-2s animate__slower animate__infinite">Check Out My Latest Work</h2>
          <div className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
           <TypingAnimation className="text-2xl  font-serif">
             Discover my latest work showcasing cutting-edge technologies and innovative solutions. 
           </TypingAnimation>
          </div>
        </div>

        <div className="space-y-4">
          {/* Featured Project */}
          <div className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-300 hover:border-green-600 transform hover:-translate-y-2">
            <div className="lg:grid lg:grid-cols-2 lg:gap-0">
              <div className="lg:order-2 aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-gray-200 to-gray-200 overflow-hidden relative">
                <Image 
                  src={projects[0].image}
                  alt={projects[0].title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 flex gap-3">
                  <span className={`px-6 py-2 rounded-full text-sm font-bold ${getStatusColor(projects[0].status)}`}>
                    {projects[0].status}
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {projects[0].category}
                  </span>
                </div>
              </div>
              
              <div className="lg:order-1 p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-3xl lg:text-4xl font-black text-gray-900 group-hover:text-green-600 transition-colors leading-tight">
                      {projects[0].title} 
                  </h3>
                  <div className="w-10 h-14 flex items-center justify-center">
                    <i className=" text-2xl text-gray-400 group-hover:text-green-600 group-hover:rotate-45 transition-all duration-300"> <FaBars/> </i>
                  </div>
                </div>
                
                <p className="text-gray-500 mb-4 font-serif  text-lg">
                  {projects[0].description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {projects[0].tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-black text-gray-300 px-3 py-2 rounded-2xl text-m font-bold font-mono hover:from-black hover:to-green-500 hover:bg-green-700 transition-all cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={projects[0].github}
                    className="flex items-center justify-center gap-3 bg-black hover:bg-black text-white px-8 py-4 rounded-2xl font-bold transition-all whitespace-nowrap cursor-pointer hover:scale-105 transform"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-github-fill text-4xl"></i>
                    </div>
                    <span>View Code</span>
                  </a>
                  <a 
                    href={projects[0].live}
                    className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold transition-all whitespace-nowrap cursor-pointer hover:scale-105 transform"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-external-link-line text-3xl"></i>
                    </div>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.slice(1).map((project) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-300 hover:border-green-600 transform hover:-translate-y-2"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-black text-black group-hover:text-green-600 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <div className="w-7 h-7 flex items-center justify-center">
                      <i className="ri-arrow-right-up-line text-xl text-black group-hover:text-green-600 group-hover:rotate-45 transition-all duration-300"></i>
                    </div>
                  </div>
                  
                  <p className="text-gray-500 mb-4 font-serif leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-black text-gray-300 px-3 py-2 rounded-2xl text-m font-bold font-mono hover:from-black hover:to-green-500 hover:bg-green-700 transition-all cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      className="flex items-center justify-center gap-3 bg-black hover:bg-black text-white px-4 py-2 rounded-2xl font-bold transition-all whitespace-nowrap cursor-pointer hover:scale-105 transform text-2x1"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-github-fill text-2xl"></i>
                      </div>
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-2xl font-bold transition-all whitespace-nowrap cursor-pointer hover:scale-105 transform text-2x1"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-external-link-line text-2x1"></i>
                      </div>
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
         {/* Extra section for more projects */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-100 to-blue-200 rounded-3xl p-8">
            <h3 className="text-2xl font-extrabold text-black mb-4">Want to see more?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              These are just a few highlights from my portfolio. I have many more projects spanning different technologies and industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/5keTchDev?tab=repositories" target="_blank" rel="noopener noreferrer">
                  <SlideArrowButton
                    primaryColor="#2dac56"
                    text="Get All Projects"
                    className="text-2xl font-serif"
                  />
              </a>     
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
}