'use client';
import Link from 'next/link';
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              About Me <span className="text-2xl">🏀</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Hi! I m Mohit Sharma, a passionate <span className="font-semibold text-green-600">Full-Stack Developer</span> with an experience of building scalable web applications and solving complex technical challenges. My journey started with curiosity about how things work, and it has evolved into a career of creating impactful digital solutions.
              </p>
              <p>
                I specialize in <span className="font-semibold text-green-600">React, Next.js, Node.js, and TypeScript</span>, and have hands-on experience with cloud technologies, database design, and UI/UX best practices. I believe in writing clean, maintainable code and collaborating effectively with cross-functional teams.
              </p>
              <p>
                Beyond coding, I love exploring new tech, contributing to open source, and sharing knowledge through blog posts and mentoring. I thrive on challenges and am always eager to learn and grow.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors cursor-pointer whitespace-nowrap gap-2"
              >
                Learn More About Me
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>

          {/* Image and Experience Card */}
          <div className="relative">
            <div className="aspect-[2/2] rounded-2xl overflow-hidden bg-gradient-to-br from-green-400 to-gray-900 p-1 shadow-xl">
              <img
                src="/assets/version.jpg"
                alt="Mohit - Software Developer"
                className="w-full h-full object-cover object-bottom rounded-xl shadow-lg"
              />
            </div>
              <div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col items-center group hover:shadow-green-200 hover:-translate-y-2 hover:scale-[1.025] focus-within:shadow-green-200 focus-within:-translate-y-2 focus-within:scale-[1.025] cursor-pointer"
                tabIndex={0}
              >
              <div className="text-3xl font-bold text-gray-900">2+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
              <div className="mt-2 text-green-600 text-xs font-semibold">Full-Stack & App </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
