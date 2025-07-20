"use client"

import { forwardRef } from "react"
import { Code, Database, Globe, Smartphone, Server, Palette } from "lucide-react"

const skills = [
  { name: "Frontend", icon: Globe, techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", icon: Server, techs: ["Node.js", "Python", "Express", "FastAPI"] },
  { name: "Database", icon: Database, techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase"] },
  { name: "Mobile", icon: Smartphone, techs: ["React Native", "Flutter", "iOS", "Android"] },
  { name: "Languages", icon: Code, techs: ["JavaScript", "Python", "TypeScript", "Go"] },
  { name: "Design", icon: Palette, techs: ["Figma", "Adobe XD", "Photoshop", "Illustrator"] },
]

const Skills = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto px-2">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group backdrop-blur-md bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                  <skill.icon size={18} className="sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold ml-3 sm:ml-4 text-gray-800">
                  {skill.name}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {skill.techs.map((tech) => (
                  <div
                    key={tech}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/20 rounded-md sm:rounded-lg text-xs sm:text-sm text-gray-700 backdrop-blur-sm border border-white/10 text-center"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Skills.displayName = "Skills"

export default Skills
