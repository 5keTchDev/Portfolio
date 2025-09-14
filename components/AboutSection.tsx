'use client';
import { useState, useEffect } from 'react';
export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
     { number: '2+', label: 'Years Experience', icon: (<span className="text-green-500 text-3xl animate-bounce">🏗️</span>) },
    { number: '15+', label: 'Projects Completed', icon: (<span className="text-blue-500 text-3xl animate-pulse">📈</span>) },
    { number: '5+', label: 'Technologies Mastered', icon: (<span className="text-purple-500 text-3xl animate-spin">🖥️</span>) },
    { number: '100%', label: 'Client Satisfaction', icon: (<span className="text-pink-500 text-3xl animate-bounce">🎯</span>) },
    { number: '100%', label: 'Product Quality', icon: (<span className="text-yellow-500 text-3xl animate-pulse">📟</span>) },
    { number: '100%', label: 'Trust', icon: (<span className="text-cyan-500 text-3xl animate-spin">📱</span>) }



  ];

  const skills = [
    { name: 'Frontend', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend', level: 80, color: 'from-green-500 to-emerald-500' },
    { name: 'App Devloopment', level: 80, color: 'from-purple-500 to-pink-500' },
    { name: 'DevOps', level: 25, color: 'from-orange-500 to-red-500' },
    { name: 'Blockchain', level: 75, color: 'from-grey-500 to-red-500' },
    { name: 'AI', level: 55, color: 'from-white-500 to-green-500' }
  ];

  return (
    <section id="about" className="py-12 bg-gradient-to-br from-white via-gray-50 to-green-50 relative overflow-hidden">
      {/* Background decoration */}
      <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blend-color-burn"
          style={{ backgroundImage: `url('/assets/creative.jpg')` }}
        ></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 text-gray-800 px-6 py-3 rounded-full text-base font-bold mb-4 shadow-md">
            <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse">企</div>
             	About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Crafting Digital <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Experiences</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-serif">
            Passionate full-stack developer with a love for clean code, creative UI, and innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg shadow-inner">
              {['about', 'skills', 'stats'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-4 rounded-md  font-extrabold text-4x1 transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-green-400 to-blue-400 text-white shadow-lg scale-105'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              {activeTab === 'about' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-7 shadow-lg border border-gray-100 transition-transform  duration-500 hover:scale-[1.01]">
                    <h3 className="text-3xl font-extrabold  text-gray-900 mb-1.5 flex items-center gap-2 animate">
                      <span className="text-3xl text-black font-extrabold mb-4">𒄆</span>
                      MY JOURNEY
                    </h3>
                    <div className=" text-black font-serif text-3x1 space-y-4 leading-relaxed">
                      <p>
                        Hi! I'am <span className="font-bold text-xl text-green-600">MOHIT</span>, a passionate Software Engineer with an experience crafting digital solutions that make a difference.I began my journey in technology with a strong foundation in Computer Science and Engineering, where I discovered my passion for building scalable and user-centric digital solutions.
                      </p>
                      <p>
                         My experience spans across developing end-to-end applications, from crafting clean and responsive user interfaces to implementing secure and efficient backends. Along the way, I have built impactful projects, each reinforcing my ability to solve complex problems through elegant technical solutions.
                      </p>
                      <p>    
                        Today, I continue to push boundaries as a Software Engineer, blending creativity with technical expertise to deliver solutions that not only perform but also inspire.
                      </p>
                      <p>
                        When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="text-2xl">⚡</span>
                      TECHNICAL EXPERTISE
                    </h3>
                    <div className="space-y-4">
                      {skills.map((skill, index) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-700">{skill.name}</span>
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'stats' && (
                <div className="grid grid-cols-2 gap-4 animate-fadeIn">
                  {stats.map((stat, index) => (
                    <div 
                      key={stat.label}
                      className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Image & Experience */}
          <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative bg-blend-color-burn ">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-1 shadow-2xl">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src="/gemini.png"
                      alt="Mohit Sharma - Full Stack Developer"
                      className="w-full h-full object-cover object-center rounded-xl group-hover:scale-105 transition-transform duration-700 shadow-xl"
                      style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                  <div className="text-2xl font-bold text-gray-900">2+</div>
                  <div className="text-sm text-gray-600">Years of</div>
                  <div className="text-xs text-green-600 font-semibold">Experience</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                  <div className="text-2xl font-bold text-gray-900">OPEN</div>
                  <div className="text-2x1 text-black">TO</div>
                  <div className="text-2x1 font-bold text-green-600">WORK</div>
                </div>
              </div>
            </div>

           </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
