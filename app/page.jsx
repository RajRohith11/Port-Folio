"use client";

import React, { useEffect, useRef } from "react";

import ParticleBackground from "@/components/particle-background";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Navigation from "@/components/navigation";
import SocialLinks from "@/components/social-links";

export default function Portfolio() {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <ParticleBackground />

      <Navigation
        onNavigate={{
          hero: () => scrollToSection(heroRef),
          skills: () => scrollToSection(skillsRef),
          about: () => scrollToSection(aboutRef),
          projects: () => scrollToSection(projectsRef),
          contact: () => scrollToSection(contactRef),
        }}
      />

      <main className="relative z-10">
        <Hero ref={heroRef} />
        <Skills ref={skillsRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>

      <SocialLinks />
    </div>
  );
}
