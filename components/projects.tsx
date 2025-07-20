"use client"

import { forwardRef } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with real-time inventory management and payment processing.",
    image: "/placeholder.svg?height=300&width=400",
    techs: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=300&width=400",
    techs: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    description: "Intelligent chat assistant powered by machine learning with natural language processing.",
    image: "/placeholder.svg?height=300&width=400",
    techs: ["Python", "FastAPI", "OpenAI", "React"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with interactive maps and detailed forecasts.",
    image: "/placeholder.svg?height=300&width=400",
    techs: ["Vue.js", "D3.js", "Weather API", "Tailwind"],
    demoUrl: "#",
    codeUrl: "#",
  },
]

const Projects = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto px-2">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group backdrop-blur-md bg-white/10 rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-40 sm:h-48 md:h-52 lg:h-56 xl:h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-4 sm:p-5 md:p-6 lg:p-7">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs sm:text-sm"
                    onClick={() => window.open(project.demoUrl, "_blank")}
                  >
                    <ExternalLink className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="backdrop-blur-sm bg-white/20 border-white/30 hover:bg-white/30 text-xs sm:text-sm"
                    onClick={() => window.open(project.codeUrl, "_blank")}
                  >
                    <Github className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Projects.displayName = "Projects"

export default Projects
