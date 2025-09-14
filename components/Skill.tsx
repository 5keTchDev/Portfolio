'use client';
import Image from 'next/image';
import 'animate.css';
import { HyperText } from "@/components/magicui/hyper-text";
export default function skill() {
  const skill = [
    { name: 'HTML5', image: '/assets/skills/html5.svg' },
    { name: 'CSS3', image: '/assets/skills/css3.svg' },
    { name: 'JavaScript', image: '/assets/skills/js.svg' },
    { name: 'React', image: '/assets/skills/react.svg' },
    { name: 'Next.js', image: '/assets/skills/nextjs.svg' },
    { name: 'Node.js', image: '/assets/skills/nodejs.svg' },
    { name: 'Npm', image: '/assets/skills/npm.svg' },
    { name: 'MongoDB', image: '/assets/skills/mongodb.svg' },
    { name: 'Tailwind ', image: '/assets/skills/tailwind.svg' },
    { name: 'Svelte', image: '/assets/skills/svelte.svg' },
    // { name: 'Threejs', image: '/assets/skills/threejs.svg' },
    { name: 'Redux', image: '/assets/skills/redux.svg' },
    { name: 'Webpack', image: '/assets/skills/webpack.svg' },
    { name: 'GraphQL', image: '/assets/skills/graphql.svg' },
    { name: 'Git', image: '/assets/skills/git.svg' },
    { name: 'PostgreSQL', image: '/assets/skills/postgresql.svg' },
    { name: 'Python', image: '/assets/skills/python.svg' },
    { name: 'Java', image: '/assets/skills/java.svg' },
    { name: 'Spring', image: '/assets/skills/spring.svg' },
    { name: 'Flutter', image: '/assets/skills/flutter.svg' },
    { name: 'Firebase', image: '/assets/skills/firebase.svg' },
    { name: 'Linux', image: '/assets/skills/linux.svg' },
    { name: 'Figma', image: '/assets/skills/figma.svg' },
    { name: 'VScode', image: '/assets/skills/vscode.svg' },

  ];

  return (
    <section id="skills" className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-2">
         <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 text-gray-800 px-6 py-3 rounded-full text-base font-bold mb-4 shadow-md">
           <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse">得</div>
            SKILLS
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 animate__animated animate__swing animate__delay-2s animate__slower animate__infinite">Technical Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-10" >
            {skill.map((skill) => (
              <div
                key={skill.name}
                className="bg-white shadow-lg border border-gray-100 rounded-xl p-4 transform hover:scale-105 transition-all duration-300 group hover:shadow-2xl"
              >
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105  ">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                        width={48}
                        height={48}
                        className="rounded-lg"
                    />
                  </div>
                  <div className="text-black font-extrabold font-mono  group-hover:text-green-600">
                    <HyperText className='text-base '>
                      {skill.name}
                    </HyperText> 
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}