"use client"

import { forwardRef } from "react"
import Image from "next/image"

const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="flex justify-center xl:col-span-2">
            <div className="relative">
              <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl p-3 sm:p-4">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Profile"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 xl:col-span-3">
            <div className="backdrop-blur-md bg-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-lg">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-gray-800">
                Hello, I'm John Doe
              </h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that
                  matter. I specialize in modern web technologies and love turning complex problems into simple,
                  beautiful designs.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community through blog posts and mentoring.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating user experiences that are both functional
                  and delightful.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="backdrop-blur-md bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-white/20 text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">50+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600">Projects Completed</div>
              </div>
              <div className="backdrop-blur-md bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-white/20 text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">5+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

About.displayName = "About"

export default About
