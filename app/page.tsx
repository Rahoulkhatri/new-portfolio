"use client"

import { useState, useEffect, useRef } from "react"
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  ArrowRight,
  Download,
  Terminal,
  Layers,
  Zap,
  Database,
  Server,
  Monitor,
  Braces,
  GitBranch,
  Rocket,
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
  Eye,
  Filter,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Phone,
  Users,
  Trophy,
  BookOpen,
  Briefcase,
} from "lucide-react"

export default function RahoulPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const containerRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "education", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "HTML", level: 95, icon: Code, category: "Frontend", color: "from-orange-500 to-red-500" },
    { name: "CSS", level: 90, icon: Layers, category: "Frontend", color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", level: 85, icon: Braces, category: "Language", color: "from-yellow-500 to-orange-500" },
    { name: "React.js", level: 80, icon: Code, category: "Framework", color: "from-blue-600 to-purple-600" },
    { name: "Node.js", level: 70, icon: Server, category: "Backend", color: "from-green-500 to-emerald-600" },
    { name: "PHP", level: 75, icon: Database, category: "Backend", color: "from-purple-500 to-indigo-600" },
    { name: "WordPress", level: 85, icon: Monitor, category: "CMS", color: "from-blue-400 to-indigo-500" },
    { name: "React Native", level: 75, icon: GitBranch, category: "Mobile", color: "from-teal-500 to-blue-500" },
  ]

  const education = [
    {
      institution: "Mohammad Ali Jinnah University",
      degree: "Bachelor's Degree in Software Engineering",
      year: "2023",
      type: "University",
      description:
        "Comprehensive software engineering program covering programming, system design, and project management.",
      icon: GraduationCap,
      color: "from-blue-500 to-purple-500",
    },
    {
      institution: "Shah Abdul Latif College",
      degree: "Intermediate",
      year: "2017",
      type: "College",
      description: "Foundation studies in science and mathematics, preparing for higher education in technology.",
      icon: BookOpen,
      color: "from-green-500 to-teal-500",
    },
  ]

  const certifications = [
    {
      title: "Docker Essentials: A Developer Introduction",
      provider: "IBM",
      icon: Award,
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Getting Started with Ansible",
      provider: "Skillup",
      icon: Award,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Getting Started with Jenkins",
      provider: "Skillup",
      icon: Award,
      color: "from-orange-500 to-yellow-500",
    },
  ]

  const experiences = [
    {
      company: "DigitechIO LLC",
      position: "Junior Front-End Developer",
      duration: "Current",
      type: "Full-time",
      location: "Remote",
      responsibilities: [
        "Frontend Development: Built responsive web interfaces with HTML, CSS, and JavaScript, enhancing user experience",
        "WordPress Development: Designed and customized WordPress sites, optimizing themes and plugins for functionality and performance",
        "Website Management: Managed live websites via cPanel and WordPress, ensuring optimal performance and uptime",
        "PHP Support: Assisted in PHP development, ensuring smooth integration with frontend features",
        "Responsive Design: Implemented mobile-friendly designs for improved accessibility",
        "Developed and Updated Landing Pages: Regularly updated and optimized landing pages to enhance user experience and drive conversions",
        "Leadership and Mentorship: Led a team of frontend developers, providing guidance, mentorship, and support to foster skill development and improve team performance",
      ],
      icon: Briefcase,
      color: "from-blue-500 to-purple-500",
    },
    {
      company: "Hypersols",
      position: "Front-End Developer Intern",
      duration: "3 months",
      type: "Internship",
      location: "Karachi, Sindh",
      responsibilities: [
        "Working on HTML, CSS, and JavaScript during internship",
        "Clone websites like Furor, US Bank with pixel-perfect accuracy",
        "Implemented interactive features and dynamic user interfaces using JavaScript, enhancing user engagement and experience",
        "Monitored website analytics to identify areas for improvement",
        "Performed cross-browser testing to ensure optimal performance across all platforms",
        "Resolved technical issues related to front-end development as needed",
      ],
      icon: Users,
      color: "from-green-500 to-teal-500",
    },
  ]

  const projects = [
    {
      id: 1,
      title: "FYP: Android App",
      description:
        "Final Year Project - A comprehensive Android application built using React Native, showcasing mobile development skills and modern app architecture.",
      tech: ["React Native", "JavaScript", "Android", "Mobile Development"],
      image: "/placeholder.svg?height=400&width=600",
      github: "#",
      live: "#",
      featured: true,
      category: "Mobile",
      stars: 45,
      views: "1.2k",
      status: "Completed",
    },
    {
      id: 2,
      title: "Allergy Counsellor System",
      description:
        "A comprehensive healthcare management system designed to help patients manage allergies and provide counseling services with appointment scheduling.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      image: "/placeholder.svg?height=400&width=600",
      github: "#",
      live: "#",
      featured: true,
      category: "Healthcare",
      stars: 32,
      views: "890",
      status: "Completed",
    },
    {
      id: 3,
      title: "Inventory Management System",
      description:
        "Desktop application for managing inventory with features like stock tracking, supplier management, and automated reporting using C# and MySQL.",
      tech: ["C#", "MySQL", "Windows Forms", ".NET"],
      image: "/placeholder.svg?height=400&width=600",
      github: "#",
      live: "#",
      featured: false,
      category: "Desktop",
      stars: 28,
      views: "650",
      status: "Completed",
    },
    {
      id: 4,
      title: "MAJU Portal",
      description:
        "University portal console application built with Java, featuring student management, course registration, and academic record keeping.",
      tech: ["Java", "Console Application", "OOP"],
      image: "/placeholder.svg?height=400&width=600",
      github: "#",
      live: "#",
      featured: false,
      category: "Education",
      stars: 19,
      views: "420",
      status: "Completed",
    },
    {
      id: 5,
      title: "Hotel Management System",
      description:
        "Console-based hotel management system in Java with room booking, customer management, and billing functionality.",
      tech: ["Java", "Console Application", "File Handling"],
      image: "/placeholder.svg?height=400&width=600",
      github: "#",
      live: "#",
      featured: false,
      category: "Management",
      stars: 15,
      views: "380",
      status: "Completed",
    },
    {
      id: 6,
      title: "Furor Website Clone",
      description:
        "Pixel-perfect clone of Furor website created during internship, demonstrating advanced HTML, CSS, and JavaScript skills.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "/placeholder.svg?height=400&width=600",
      github: "#",
      live: "#",
      featured: false,
      category: "Web Clone",
      stars: 22,
      views: "560",
      status: "Completed",
    },
    {
      id: 7,
      title: "US Bank Website Clone",
      description:
        "Professional banking website clone with interactive features and responsive design, showcasing frontend development expertise.",
      tech: ["HTML", "CSS", "JavaScript", "jQuery"],
      image: "/placeholder.svg?height=400&width=600",
      github: "#",
      live: "#",
      featured: false,
      category: "Web Clone",
      stars: 18,
      views: "490",
      status: "Completed",
    },
  ]

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1))
  }

  const scrollToProject = (index: number) => {
    setCurrentProjectIndex(index)
  }

  // Auto-scroll projects
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject()
    }, 5000) // Auto-scroll every 5 seconds

    return () => clearInterval(interval)
  }, [filteredProjects.length])

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden" ref={containerRef}>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

        {/* Floating 3D Cubes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 transform rotate-45 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              transform: `rotate3d(1, 1, 0, ${Math.random() * 360}deg)`,
            }}
          ></div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Glow Effects */}
        <div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-xl z-50 border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">
              <span className="text-blue-400">{"<"}</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Rahoul Khatri
              </span>
              <span className="text-blue-400">{" />"}</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "education", "experience", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 relative group ${
                    activeSection === item ? "text-blue-400" : "text-gray-300 hover:text-blue-400"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                      activeSection === item ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-blue-400 hover:text-purple-400 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50">
            <div className="px-6 py-4 space-y-2">
              {["home", "about", "skills", "education", "experience", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg capitalize transition-all duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <div
              className={`transition-all duration-1000 ${
                isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-4">
                  Available for Opportunities
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">Frontend</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Motivated Mid with a keen eye for design and a strong desire to create engaging
                user interfaces. Seeking opportunities to collaborate with experienced developers to deliver
                high-quality web applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Rocket className="mr-2 group-hover:animate-bounce" size={20} />
                    View Projects
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <a
  href="/rahoul.pdf"
  download="rahoul-resume.pdf"
  className="group inline-block px-8 py-4 border-2 border-gray-600 rounded-lg font-medium hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
>
  <span className="flex items-center justify-center text-gray-300 group-hover:text-blue-400">
    <Download className="mr-2 group-hover:animate-pulse" size={20} />
    Download CV
  </span>
</a>
              </div>

              {/* Contact Info */}
           

              {/* Social Links */}
              <div className="flex space-x-6">
                {[
                  { icon: Github, href: "https://github.com/Rahoulkhatri/", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/rahoul-khatri/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:rahoullkhatri@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="group p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110"
                    aria-label={label}
                  >
                    <Icon
                      className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
                      size={20}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side - 3D Card */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative group">
                {/* 3D Card Container */}
                <div className="relative transform-gpu transition-all duration-500 group-hover:rotate-y-12 group-hover:rotate-x-6 preserve-3d">
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 shadow-2xl">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-400/30 shadow-lg">
                        <img
                          src="me.png?height=128&width=128"
                          alt="Rahoul Khatri"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 animate-pulse"></div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <div className="text-2xl font-bold text-blue-400">2+</div>
                        <div className="text-xs text-gray-400">Years</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <div className="text-2xl font-bold text-purple-400">7+</div>
                        <div className="text-xs text-gray-400">Projects</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <div className="text-2xl font-bold text-pink-400">3</div>
                        <div className="text-xs text-gray-400">Certs</div>
                      </div>
                    </div>

                    {/* Current Status */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium text-gray-300 mb-3">Current Role</h3>
                      <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg">
                        <div className="text-sm font-medium text-blue-300">Mid Frontend Developer</div>
                        <div className="text-xs text-gray-400">DigitechIO LLC</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform rotate-45 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Terminal className="mr-3 text-blue-400" size={24} />
                    My Journey
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    I'm a motivated Mid with a keen eye for design and a strong desire to create
                    engaging user interfaces. My journey in software development began at Mohammad Ali Jinnah
                    University, where I completed my Bachelor's in Software Engineering in 2023.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    I specialize in modern web technologies including HTML, CSS, JavaScript, React.js, and have
                    experience with backend technologies like Node.js and PHP. I'm passionate about creating responsive,
                    user-friendly interfaces and continuously learning new technologies to improve user experience.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <Zap className="text-purple-400 mb-4" size={32} />
                    <h4 className="text-xl font-bold text-white mb-3">Frontend Focus</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Specialized in creating responsive web interfaces with modern technologies, ensuring optimal user
                      experience across all devices.
                    </p>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <Users className="text-green-400 mb-4" size={32} />
                    <h4 className="text-xl font-bold text-white mb-3">Team Leadership</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Experience leading frontend development teams, providing mentorship and guidance to foster skill
                      development and improve performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div className="space-y-6">
              <div className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-white mb-4">Quick Facts</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Experience</span>
                      <span className="text-blue-400 font-medium">2+ Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Education</span>
                      <span className="text-purple-400 font-medium">BS Software Eng.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Specialization</span>
                      <span className="text-green-400 font-medium">Frontend Dev</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Location</span>
                      <span className="text-pink-400 font-medium">Karachi, Sindh</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-white mb-4">Current Focus</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300 text-sm">React.js Development</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300 text-sm">WordPress Customization</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300 text-sm">Mobile App Development</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:rotate-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* 3D Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <skill.icon
                      className="text-blue-400 group-hover:scale-110 transition-transform duration-300"
                      size={24}
                    />
                    <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {skill.name}
                  </h3>

                  {/* 3D Progress Bar */}
                  <div className="relative w-full h-3 bg-gray-800/50 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      <div className="absolute top-0 left-0 w-full h-1 bg-white/30 rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-3">
                    <span className="text-sm text-gray-400">Proficiency</span>
                    <span className="text-sm font-bold text-blue-400">{skill.level}%</span>
                  </div>
                </div>

                {/* Floating Icon */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Education & Certifications
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <GraduationCap className="mr-3 text-blue-400" size={28} />
                Academic Background
              </h3>

              {education.map((edu, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color} bg-opacity-20`}>
                          <edu.icon className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {edu.degree}
                          </h4>
                          <p className="text-blue-400 font-medium">{edu.institution}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium">
                          {edu.year}
                        </span>
                        <p className="text-gray-400 text-sm mt-1">{edu.type}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Award className="mr-3 text-purple-400" size={28} />
                Professional Certifications
              </h3>

              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} bg-opacity-20`}>
                        <cert.icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {cert.title}
                        </h4>
                        <p className="text-purple-400 font-medium text-sm">Offered by {cert.provider}</p>
                      </div>
                      <Trophy className="text-yellow-400" size={20} />
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional Skills */}
              <div className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Terminal className="mr-2 text-green-400" size={20} />
                    Additional Technologies
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["Docker", "Ansible", "Jenkins", "MySQL", "C#", ".NET"].map((tech, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-orange-400/50 transition-all duration-500 hover:scale-[1.01]"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${exp.color} bg-opacity-20`}>
                        <exp.icon className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <p className="text-orange-400 font-medium text-lg">{exp.company}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="flex items-center text-gray-400 text-sm">
                            <Calendar className="mr-1" size={14} />
                            {exp.duration}
                          </span>
                          <span className="flex items-center text-gray-400 text-sm">
                            <MapPin className="mr-1" size={14} />
                            {exp.location}
                          </span>
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities & Achievements:</h4>
                    <div className="grid gap-3">
                      {exp.responsibilities.map((responsibility, i) => (
                        <div
                          key={i}
                          className="flex items-start space-x-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">{responsibility}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Horizontal Scroll */}
      <section id="projects" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">7+ Projects • Full Stack Development</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentProjectIndex(0)
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/50"
                }`}
              >
                <span className="flex items-center">
                  <Filter size={16} className="mr-2" />
                  {category}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Carousel */}
          <div className="relative" ref={projectsRef}>
            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-700/80 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-700/80 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Projects Container */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentProjectIndex * 100}%)`,
                  width: `${filteredProjects.length * 100}%`,
                }}
              >
                {filteredProjects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-4">
                    <div className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 overflow-hidden hover:scale-[1.02]">
                      {/* 3D Glow Effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8">
                        {/* Project Image */}
                        <div className="relative overflow-hidden rounded-xl">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                          {/* Status Badge */}
                          <div className="absolute top-4 left-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                project.status === "Completed"
                                  ? "bg-green-500/20 text-green-300 border border-green-400/30"
                                  : "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30"
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>

                          {/* Category Badge */}
                          <div className="absolute top-4 right-4">
                            <span className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-3 py-1 rounded-full text-sm font-medium text-blue-300">
                              {project.category}
                            </span>
                          </div>

                          {/* Stats */}
                          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                            <div className="flex items-center space-x-4 text-white/80">
                              <div className="flex items-center space-x-1">
                                <Star size={16} className="text-yellow-400" />
                                <span className="text-sm">{project.stars}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye size={16} className="text-blue-400" />
                                <span className="text-sm">{project.views}</span>
                              </div>
                            </div>
                          </div>

                          {/* Overlay Links */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                            <a
                              href={project.github}
                              className="p-4 bg-gray-900/80 backdrop-blur-sm rounded-full text-blue-400 hover:text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110"
                            >
                              <Github size={24} />
                            </a>
                            <a
                              href={project.live}
                              className="p-4 bg-gray-900/80 backdrop-blur-sm rounded-full text-purple-400 hover:text-white hover:bg-purple-500 transition-all duration-300 hover:scale-110"
                            >
                              <Play size={24} />
                            </a>
                            <a
                              href={project.live}
                              className="p-4 bg-gray-900/80 backdrop-blur-sm rounded-full text-green-400 hover:text-white hover:bg-green-500 transition-all duration-300 hover:scale-110"
                            >
                              <ExternalLink size={24} />
                            </a>
                          </div>
                        </div>

                        {/* Project Content */}
                        <div className="flex flex-col justify-center space-y-6">
                          {project.featured && (
                            <span className="inline-block w-fit px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
                              ⭐ Featured Project
                            </span>
                          )}

                          <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {project.title}
                          </h3>

                          <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>

                          <div className="flex flex-wrap gap-3">
                            {project.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-full text-sm font-medium text-gray-300 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex space-x-4 pt-4">
                            <a
                              href={project.github}
                              className="flex items-center space-x-2 px-6 py-3 bg-gray-800/50 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-all duration-300 group/link"
                            >
                              <Github size={20} className="group-hover/link:animate-pulse" />
                              <span>Source Code</span>
                            </a>
                            <a
                              href={project.live}
                              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white hover:shadow-lg transition-all duration-300 group/link"
                            >
                              <ExternalLink size={20} className="group-hover/link:animate-pulse" />
                              <span>Live Demo</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* 3D Corner Element */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProjectIndex ? "bg-blue-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            {/* Project Counter */}
            <div className="text-center mt-6">
              <span className="text-gray-400">
                {currentProjectIndex + 1} of {filteredProjects.length} projects
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to start your project?</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    I'm always excited to work on innovative projects and collaborate with experienced developers. Let's
                    create something amazing together!
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Mail,
                        text: "rahoullkhatri@gmail.com",
                        color: "text-red-400",
                        href: "mailto:rahoullkhatri@gmail.com",
                      },
                      { icon: Phone, text: "03352332623", color: "text-green-400", href: "tel:03352332623" },
                      { icon: MapPin, text: "Karachi, Sindh", color: "text-blue-400" },
                    ].map(({ icon: Icon, text, color, href }, index) => (
                      <div key={index} className="flex items-center space-x-4 group/item">
                        <div
                          className={`p-4 rounded-xl bg-gray-800/50 ${color} group-hover/item:scale-110 transition-transform duration-300`}
                        >
                          <Icon size={24} />
                        </div>
                        {href ? (
                          <a
                            href={href}
                            className="text-gray-300 group-hover/item:text-white transition-colors duration-300 hover:underline"
                          >
                            {text}
                          </a>
                        ) : (
                          <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                            {text}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Project Discussion"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                      placeholder="Tell me about your amazing project idea..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full group/btn relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  >
                    <span className="relative z-10 flex items-center justify-center text-white">
                      Send Message
                      <ArrowRight
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                        size={20}
                      />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              <span className="text-blue-400">{"<"}</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Rahoul Khatri
              </span>
              <span className="text-blue-400">{" />"}</span>
            </div>
            <p className="text-gray-400 mb-6">Frontend Developer • Building Amazing User Experiences</p>
            <div className="flex justify-center space-x-6 mb-6">
              {[
                { icon: Github, href: "https://github.com/Rahoulkhatri/" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/rahoul-khatri/" },
                { icon: Mail, href: "mailto:rahoullkhatri@gmail.com" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-gray-500 hover:text-blue-400 transition-all duration-300 p-2 rounded-full hover:bg-gray-800/50 hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Rahoul Khatri. Crafted with passion using React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
