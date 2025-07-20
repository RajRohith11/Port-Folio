"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  onNavigate: {
    hero: () => void
    skills: () => void
    about: () => void
    projects: () => void
    contact: () => void
  }
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", action: onNavigate.hero },
    { name: "Skills", action: onNavigate.skills },
    { name: "About", action: onNavigate.about },
    { name: "Projects", action: onNavigate.projects },
    { name: "Contact", action: onNavigate.contact },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/10 border-b border-white/20" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex xl:space-x-10 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden lg:flex xl:hidden p-2 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-md bg-white/90 border-b border-white/20">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    item.action()
                    setIsOpen(false)
                  }}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-base"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
