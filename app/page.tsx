'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
  DialogClose,
} from "@/components/ui/dialog"

import { Menu, X } from "lucide-react"
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Twitter } from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"
import TextType from "@/components/texttype";
import SplitText from "@/components/splittext";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = React.useState("home");
  const [selectedProject, setSelectedProject] = React.useState('')
  const [preview, setPreview] = React.useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string|null>(null);

  // Animation sequencing for hero texts
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offsets = NAV_ITEMS.map(item => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, offset: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: item.id, offset: Math.abs(rect.top - 80) }; // 80 = nav height offset
      });
      const closest = offsets.reduce((a, b) => (a.offset < b.offset ? a : b));
      setActiveSection(closest.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileNavOpen(false); // close mobile nav on click
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleProjectClick = (projectUrl: string) => {
    console.log(`Opening project: ${projectUrl}`);
    setSelectedProject(projectUrl);
    setPreview(true);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('/portfolio/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: `${form.subject ? `Subject: ${form.subject}\n` : ''}${form.message}`,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setResult('Message sent successfully!');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setResult(data.message || 'Error sending message.');
      }
    } catch (err) {
      setResult('Error sending message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
        {/* Desktop Nav */}
        <div className="hidden sm:flex pointer-events-auto bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-full shadow-lg px-8 py-3 items-center space-x-8 mx-auto max-w-4xl">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-colors px-4 py-2 rounded-full font-medium
                ${activeSection === item.id
                  ? " text-cyan-400 "
                  : "text-gray-300 hover:text-cyan-400"}
              `}
              style={{ outline: "none", border: "none", background: "none" }}
            >
              {item.label}
            </button>
          ))}
        </div>
        {/* Mobile Nav */}
        <div className="sm:hidden pointer-events-auto w-full flex justify-between items-center px-4 py-3 bg-gray-900/80 border border-gray-800 rounded-full shadow-lg mx-2">
          <span className="font-bold text-lg text-cyan-400">Marvin</span>
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="text-cyan-400 focus:outline-none"
            aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
          >
            {mobileNavOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Mobile Dropdown */}
        {mobileNavOpen && (
          <div className="sm:hidden absolute top-16 left-0 right-0 mx-2 bg-gray-900/95 border border-gray-800 rounded-xl shadow-lg flex flex-col items-center space-y-2 py-4 z-50 animate-fade-in">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-center transition-colors px-4 py-2 rounded-lg font-medium
                  ${activeSection === item.id
                    ? " text-cyan-400 "
                    : "text-gray-300 hover:text-cyan-400"}
                `}
                style={{ outline: "none", border: "none", background: "none" }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

    

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 text-left">
              <div className="block text-left">
                <p className="text-xl text-gray-300 text-left">Hello, It's Me</p>
              </div>
              <div className="block text-left">
                <h1 className="text-5xl lg:text-6xl font-bold text-left">Marvin Ngalonde</h1>
              </div>
              <div className="block text-left">
                <SplitText
                  text="And I'm a Full Stack Developer"
                  className="text-2xl text-left"
                  splitType="words"
                  delay={80}
                  duration={0.7}
                />
              </div>
              <div className="block text-left">
                <SplitText
                  text="Highly passionate and driven tech enthusiast with a strong foundation in mobile and web development, specializing in React, Node.js, and modern web technologies."
                  className="text-gray-400 text-lg max-w-md text-left"
                  splitType="words"
                  textAlign="left"
                  delay={60}
                  duration={0.6}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/marvinngalonde"
                className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-gray-900 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ngalonde-marvin-393555331/"
                className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-gray-900 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ngalondemarvin@gmail.com"
                className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-gray-900 transition-all"
              >
                <Mail size={20} />
              </a>
              {/* <a
                href="#"
                className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-gray-900 transition-all"
              >
                <Twitter size={20} />
              </a> */}
            </div>

            <a
             href="./Marvin-Ngalonde-Resume.pdf"
             download="Marvin-Ngalonde-Resume.pdf"
             target="_blank"
             rel="noopener noreferrer"
            >
              <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-8 py-3 rounded-full font-semibold">
                Download CV
              </Button>
            </a>

          </div>

          <div className="flex justify-center lg:justify-end">
            <motion.div
              className="hexagon-container"
              animate={{ y: [0, -20, 0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* <div className="hexagon-glow"></div> */}
              <div className="hexagon-image">
                <Image
                  src="./me.png"
                  alt="Marvin Ngalonde"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  <section id="about"  className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="hexagon-container-small">
              {/* <div className="hexagon-glow-small"></div> */}
              <div className="hexagon-image-small">
                <Image
                  src="./ma.png"
                  alt="Marvin Ngalonde"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div  className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                About <span className="text-cyan-400">Me</span>
              </h2>
              <p className="text-xl text-cyan-400 mb-6">Full Stack Developer!</p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              I'm a highly passionate and driven tech enthusiast with over 4 years of experience in mobile and web
              development. I specialize in React, Node.js, and low-code platforms like FlutterFlow, with expertise in
              building cross-platform applications that solve real-world business challenges. I thrive in dynamic
              environments and continuously explore emerging technologies to deliver innovative solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-cyan-400 font-semibold">Location:</span>
                <p className="text-gray-300">Harare, Zimbabwe</p>
              </div>
              <div>
                <span className="text-cyan-400 font-semibold">Experience:</span>
                <p className="text-gray-300">4+ Years</p>
              </div>
              <div>
                <span className="text-cyan-400 font-semibold">Email:</span>
                <p className="text-gray-300">ngalondemarvin@gmail.com</p>
              </div>
              <div>
                <span className="text-cyan-400 font-semibold">Phone:</span>
                <p className="text-gray-300">+263 787 062 575</p>
              </div>
            </div>

            <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-8 py-3 rounded-full font-semibold">

            </Button>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Work <span className="text-cyan-400">Experience</span>
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="bg-gray-800 border-gray-700 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400">Full Stack Developer</h3>
                  <p className="text-lg">Kimtronix Global</p>
                </div>
                <div className="text-gray-400">
                  <p>January 2023 – Present</p>
                  <p>Harare, Zimbabwe</p>
                </div>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>
                  • Developed and maintained cross-platform web applications using React, Node.js, and modern web
                  technologies
                </li>
                <li>
                  • Designed and implemented robust front-end and back-end logic, ensuring seamless user experiences
                </li>
                <li>• Contributed to full-featured apps, successfully addressing real-world business challenges</li>
                <li>• Collaborated with teams to deliver high-quality software solutions on schedule</li>
              </ul>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400">Mobile App Developer</h3>
                  <p className="text-lg">CyberSeIp Incorporation</p>
                </div>
                <div className="text-gray-400">
                  <p>October 2024 – Present</p>
                  <p>Harare, Zimbabwe</p>
                </div>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Developed mobile applications using Flutter and FlutterFlow with cross-platform compatibility</li>
                <li>• Managed integration and linking of applications with Supabase backend</li>
                <li>• Contributed to the full mobile app development lifecycle, from concept to deployment</li>
              </ul>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400">Web Developer</h3>
                  <p className="text-lg">Verdsoft Private Limited</p>
                </div>
                <div className="text-gray-400">
                  <p>January 2021 – December 2023</p>
                  <p>Harare, Zimbabwe</p>
                </div>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Developed web applications using PHP, Python scripting, HTML, CSS, and JavaScript</li>
                <li>• Implemented responsive and user-friendly interfaces using fundamental web technologies</li>
                <li>• Collaborated on various web projects, contributing to design, development, and testing phases</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              My <span className="text-cyan-400">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Technologies and tools I work with to bring ideas to life</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">Frontend</h3>
              <div className="space-y-2 text-gray-300">
                <p>ReactJS</p>
                <p>NextJS</p>
                <p>TypeScript</p>
                <p>HTML/CSS</p>
                <p>JavaScript</p>
                <p>FlutterFlow</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">Backend</h3>
              <div className="space-y-2 text-gray-300">
                <p>Node.js</p>
                <p>Django</p>
                <p>Flask</p>
                <p>PHP</p>
                <p>Laravel</p>
                <p>RESTful APIs</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">Databases</h3>
              <div className="space-y-2 text-gray-300">
                <p>MySQL</p>
                <p>PostgreSQL</p>
                <p>MongoDB</p>
                <p>Supabase</p>
                <p>Firebase</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">Tools</h3>
              <div className="space-y-2 text-gray-300">
                <p>Docker</p>
                <p>Vercel</p>
                <p>GitHub Actions</p>
                <p>Jest</p>
                <p>Testing Library</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Latest <span className="text-cyan-400">Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-cyan-400 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <Image
                  src="./neo.png"
                  alt="Neocentric Interiors"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">Neocentric Interiors</h3>
                <p className="text-gray-400 mb-4">
                  Modern web application built with React, TypeScript, and TailwindCSS for interior design showcase.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">TypeScript</span>
                  </div>
                  <ExternalLink onClick={() => handleProjectClick('https://marvinngalonde.github.io/neocentric-interiors/')} size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            </Card>

            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-cyan-400 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <Image
                  src="./rh.png"
                  alt="Web Development"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">Royals Haven</h3>
                <p className="text-gray-400 mb-4">
                  Modern web application built with React, TypeScript, and TailwindCSS for interior design showcase.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">Node.js</span>
                  </div>

                  <ExternalLink size={20} onClick={() => handleProjectClick('https://marvinngalonde.github.io/royalshaven/')} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />


                </div>
              </div>
            </Card>

            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-cyan-400 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <Image
                  src="./posy.png"
                  alt="posy"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">BMS & POS</h3>
                <p className="text-gray-400 mb-4">
                  Comprehensive POS and business management solution with React, NextJS, and MySQL.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">Next.js</span>
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">TypeScript</span>
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">MySQL</span>
                  </div>
                  <ExternalLink size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            </Card>

        

            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-cyan-400 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <Image
                  src="./shop.jpg"
                  alt="Mobile POS"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">Mobile POS</h3>
                <p className="text-gray-400 mb-4">
                  Cross-platform mobile point-of-sale application built with Flutter and Supabase backend.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">Flutter</span>
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">Supabase</span>
                  </div>
                  
                  <ExternalLink size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            </Card>

            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-cyan-400 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <Image
                  src="./gym.png"
                  alt="Gym Management System"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">Gym Management System Python Intergration</h3>
                <p className="text-gray-400 mb-4">
                  Complete gym management solution with member tracking, built with PHP, Python, and MySQL.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">PHP</span>
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">Python</span>
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">MySQL</span>
                  </div>
                  <ExternalLink size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            </Card>

          


          </div>
        </div>
      </section>

      


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to work together? Let's discuss your next project and bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center">
                  <Mail className="text-gray-900" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-400">ngalondemarvin@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center">
                  <Phone className="text-gray-900" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-400">+263 787 062 575</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center">
                  <MapPin className="text-gray-900" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-400">Harare, Zimbabwe</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://github.com/marvinngalonde"
                  className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-gray-900 transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ngalonde-marvin-393555331/"
                  className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-gray-900 transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <Card className="bg-gray-800 border-gray-700 p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none"
                    placeholder="Project Discussion"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                <Button
                  className="w-full bg-cyan-400 hover:bg-cyan-500 text-gray-900 py-3 rounded-lg font-semibold"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
                {result && (
                  <div className={`text-center text-sm mt-2 ${result.includes('success') ? 'text-green-400' : 'text-red-400'}`}>{result}</div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 Marvin Ngalonde. All rights reserved.</p>
        </div>
      </footer>

      <Dialog open={preview} onOpenChange={() => setPreview(false)}>
        <DialogContent className="w-[90vw] max-w-[90vw] h-[95vh] p-0 mx-auto top-[50%] translate-y-[-50%] gap-0 flex flex-col">
          {selectedProject && (
            <>
              <div className="px-4 py-2 bg-background border-b text-base font-semibold truncate">
                <DialogTitle>{selectedProject}</DialogTitle>
              </div>
              <iframe
                src={selectedProject}
                className="w-full h-full flex-1 rounded-b-lg border-0"
                title={`Project - ${selectedProject}`}
              />
            </>
          )}
        </DialogContent>
      </Dialog>
   

    </div>
  )
}
