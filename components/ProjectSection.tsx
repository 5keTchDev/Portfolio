'use client';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "Modern e-commerce website interface showing product catalog clean design shopping cart functionality professional web application layout green and white color scheme",
      github: "#",
      live: "#",
      status: "Live",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and advanced filtering options.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      image: "Task management dashboard interface showing kanban board project timeline team collaboration tools modern UI design clean layout productivity app green accent colors",
      github: "#",
      live: "#",
      status: "In Development",
      category: "Web App"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard for tracking user behavior and business metrics with interactive charts and reporting features.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      image: "Analytics dashboard showing colorful charts graphs data visualization modern interface dark theme professional business intelligence tool clean design green highlights",
      github: "#",
      live: "#",
      status: "Live",
      category: "Data Visualization"
    },
    {
      id: 4,
      title: "Social Media API",
      description: "RESTful API for social media platform with user management, post creation, and real-time messaging capabilities.",
      tech: ["Node.js", "Express", "Redis", "JWT"],
      image: "API documentation interface showing endpoints code examples developer tools clean technical documentation modern design professional layout green theme",
      github: "#",
      live: "#",
      status: "Complete",
      category: "Backend API"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-100 text-green-800';
      case 'In Development':
        return 'bg-yellow-100 text-yellow-800';
      case 'Complete':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-code-box-line"></i>
            </div>
            My Work
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover my latest work showcasing cutting-edge technologies and innovative solutions. 
            Each project represents a unique challenge solved with creativity and technical expertise.
          </p>
        </div>

        <div className="space-y-8">
          {/* Featured Project */}
          <div className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
            <div className="lg:grid lg:grid-cols-2 lg:gap-0">
              <div className="lg:order-2 aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                <img 
                  src={`https://readdy.ai/api/search-image?query=$%7Bprojects%5B0%5D.image%7D&width=800&height=600&seq=project-${projects[0].id}&orientation=landscape`}
                  alt={projects[0].title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 flex gap-3">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${getStatusColor(projects[0].status)}`}>
                    {projects[0].status}
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {projects[0].category}
                  </span>
                </div>
              </div>
              
              <div className="lg:order-1 p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-3xl lg:text-4xl font-black text-gray-900 group-hover:text-green-600 transition-colors leading-tight">
                    {projects[0].title}
                  </h3>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-arrow-right-up-line text-2xl text-gray-400 group-hover:text-green-600 group-hover:rotate-45 transition-all duration-300"></i>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {projects[0].description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {projects[0].tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 px-5 py-2 rounded-full text-sm font-semibold hover:from-green-100 hover:to-green-50 hover:text-green-700 transition-all cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={projects[0].github}
                    className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer hover:scale-105 transform"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-github-fill text-xl"></i>
                    </div>
                    <span>View Code</span>
                  </a>
                  <a 
                    href={projects[0].live}
                    className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer hover:scale-105 transform"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-external-link-line text-xl"></i>
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
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=$%7Bproject.image%7D&width=600&height=400&seq=project-${project.id}&orientation=landscape`}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-black text-gray-900 group-hover:text-green-600 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-arrow-right-up-line text-xl text-gray-400 group-hover:text-green-600 group-hover:rotate-45 transition-all duration-300"></i>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold hover:from-green-100 hover:to-green-50 hover:text-green-700 transition-all cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer hover:scale-105 transform text-sm"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-github-fill"></i>
                      </div>
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer hover:scale-105 transform text-sm"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-external-link-line"></i>
                      </div>
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to see more?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              These are just a few highlights from my portfolio. I have many more projects spanning different technologies and industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer hover:scale-105 transform flex items-center gap-3 justify-center">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-folder-3-line text-xl"></i>
                </div>
                View All Projects
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer hover:scale-105 transform flex items-center gap-3 justify-center">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-download-line text-xl"></i>
                </div>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}