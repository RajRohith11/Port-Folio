"use client"

import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
    color: "hover:text-gray-800",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
    color: "hover:text-blue-600",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:contact@johndoe.dev",
    color: "hover:text-red-500",
  },
]

export default function SocialLinks() {
  return (
    <>
      {/* Desktop Social Links - Right Side */}
      <div className="hidden lg:block fixed right-4 xl:right-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col space-y-3 xl:space-y-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className={`p-2.5 xl:p-3 backdrop-blur-md bg-white/10 rounded-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-gray-600 ${link.color}`}
              aria-label={link.name}
            >
              <link.icon size={18} className="xl:w-5 xl:h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Social Links - Bottom */}
      <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex space-x-3 sm:space-x-4 backdrop-blur-md bg-white/10 rounded-full p-2 sm:p-3 border border-white/20 shadow-lg">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className={`p-2 sm:p-2.5 backdrop-blur-md bg-white/10 rounded-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-gray-600 ${link.color}`}
              aria-label={link.name}
            >
              <link.icon size={16} className="sm:w-5 sm:h-5" />
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
