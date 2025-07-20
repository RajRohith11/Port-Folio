"use client"

import type React from "react"

import { forwardRef, useState } from "react"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = forwardRef<HTMLElement>((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto px-2">
            Let's discuss your next project or just say hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 sm:gap-10 md:gap-12">
          <div className="space-y-6 sm:space-y-8 xl:col-span-2">
            <div className="backdrop-blur-md bg-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-lg">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-gray-800">
                Let's Connect
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
                question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white flex-shrink-0">
                    <Mail size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 text-sm sm:text-base">Email</div>
                    <div className="text-gray-600 text-xs sm:text-sm lg:text-base">contact@johndoe.dev</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white flex-shrink-0">
                    <Phone size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 text-sm sm:text-base">Phone</div>
                    <div className="text-gray-600 text-xs sm:text-sm lg:text-base">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white flex-shrink-0">
                    <MapPin size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 text-sm sm:text-base">Location</div>
                    <div className="text-gray-600 text-xs sm:text-sm lg:text-base">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-lg xl:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="backdrop-blur-sm bg-white/20 border-white/30 focus:border-blue-400 focus:ring-blue-400/20 rounded-lg sm:rounded-xl h-10 sm:h-12 text-sm sm:text-base"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="backdrop-blur-sm bg-white/20 border-white/30 focus:border-blue-400 focus:ring-blue-400/20 rounded-lg sm:rounded-xl h-10 sm:h-12 text-sm sm:text-base"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="backdrop-blur-sm bg-white/20 border-white/30 focus:border-blue-400 focus:ring-blue-400/20 rounded-lg sm:rounded-xl resize-none text-sm sm:text-base min-h-[100px] sm:min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
})

Contact.displayName = "Contact"

export default Contact
