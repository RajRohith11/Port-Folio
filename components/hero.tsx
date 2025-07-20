"use client"

import { forwardRef } from "react"
import { Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = forwardRef<HTMLElement>((props, ref) => {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/placeholder.svg?height=800&width=600"
    link.download = "resume.pdf"
    link.click()
  }

  const handleContactMe = () => {
    window.location.href = "mailto:contact@example.com"
  }

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto text-center w-full">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 border border-white/20 shadow-2xl">
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              John Doe
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-700 mb-4 sm:mb-6">
              Full-Stack Developer
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto leading-relaxed px-2">
              Crafting digital experiences with modern technologies. Passionate about creating innovative solutions that
              make a difference.
            </p>
          </div>

          <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto">
            <Button
              onClick={handleDownloadResume}
              className="w-full xs:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download Resume
            </Button>
            <Button
              onClick={handleContactMe}
              variant="outline"
              className="w-full xs:w-auto backdrop-blur-sm bg-white/20 border-white/30 hover:bg-white/30 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
})

Hero.displayName = "Hero"

export default Hero
