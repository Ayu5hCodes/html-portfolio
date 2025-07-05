"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Moon,
  Sun,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Code,
  Cloud,
  Server,
  GitBranch,
  Monitor,
  Award,
  GraduationCap,
  User,
  Send,
  ChevronDown,
} from "lucide-react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [visibleSkills, setVisibleSkills] = useState<string[]>([])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === "skills") {
            setTimeout(() => {
              setVisibleSkills(["aws", "docker", "git", "cicd", "linux"])
            }, 300)
          }
        })
      },
      { threshold: 0.3 },
    )

    const skillsSection = document.getElementById("skills")
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    { name: "AWS (EC2, S3, Lambda, Cognito, Route 53, CloudWatch)", level: 85, id: "aws" },
    { name: "Docker, Kubernetes", level: 80, id: "docker" },
    { name: "Git & GitHub, Jenkins, Ansible, Terraform", level: 90, id: "git" },
    { name: "CI/CD pipelines, REST APIs", level: 85, id: "cicd" },
    { name: "Linux & CLI proficiency", level: 88, id: "linux" },
  ]

  const projects = [
    {
      title: "Cloud-Based VPN with Monitoring",
      description:
        "Built a secure cloud-hosted VPN with Java backend, integrated AWS CloudWatch for real-time performance metrics, used Docker and GitHub Actions for CI/CD automation, secured with AWS Cognito-based auth and MongoDB Atlas.",
      technologies: ["Java", "AWS", "Docker", "GitHub Actions", "MongoDB"],
      link: "#",
    },
    {
      title: "Medilocker – Cloud-Based Health Record System",
      description:
        "Designed a HIPAA-inspired medical record vault, deployed using Terraform, EC2, and S3 for secure file storage, used Jenkins and Ansible for automated deployment, enabled secure access via API Gateway & JWT.",
      technologies: ["Terraform", "AWS EC2", "S3", "Jenkins", "Ansible"],
      link: "#",
    },
  ]

  const certifications = [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", link: "#" },
    { name: "Java", issuer: "SoloLearn", link: "#" },
    { name: "Git & GitHub", issuer: "Coursera", link: "#" },
  ]

  const technologies = [
    { name: "Java", icon: Code },
    { name: "Python", icon: Code },
    { name: "HTML/CSS", icon: Code },
    { name: "JavaScript", icon: Code },
    { name: "AWS", icon: Cloud },
    { name: "Docker", icon: Server },
    { name: "Git", icon: GitBranch },
    { name: "Linux", icon: Monitor },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Ayush Gade</h1>
            <div className="flex items-center gap-6">
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() =>
                  document.getElementById("skills")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Skills
              </button>
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Contact
              </button>
              <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="ml-4">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-20 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Hello, I'm <span className="text-blue-600 dark:text-blue-400">Ayush Gade</span>
                </h1>
                <p className="text-2xl text-gray-600 dark:text-gray-300">A DevOps Engineer</p>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
                  Building efficient systems and solving reliability problems with modern DevOps practices and cloud
                  technologies.
                </p>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open("mailto:ayushgadework@gmail.com", "_blank")}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open("https://github.com/your-github-username", "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-2">
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <User className="w-32 h-32 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <ChevronDown className="w-6 h-6 animate-bounce text-gray-400" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a DevOps and Cloud enthusiast with a strong foundation in infrastructure automation, CI/CD
                pipelines, and scalable cloud deployments. I build efficient systems and love solving reliability
                problems.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                    <div>
                      <CardTitle className="text-xl">BTech in Computer Engineering</CardTitle>
                      <CardDescription className="text-lg">
                        GH Raisoni College Pune • Currently in Final Year
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">CGPA:</span>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        8.5/10
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Computer Architecture</Badge>
                        <Badge variant="outline">DevOps Fundamentals</Badge>
                        <Badge variant="outline">Cloud Computing & Virtualization</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2"
                >
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full group-hover:bg-blue-600 transition-colors">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2">
                  <CardHeader>
                    <Award className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      View Certificate
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <tech.icon className="w-12 h-12 text-blue-600 mb-3" />
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 scroll-mt-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Skills & Tools</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: visibleSkills.includes(skill.id) ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">ayushgadework@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+91 9822043398</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open("https://linkedin.com/in/your-linkedin-username", "_blank")}
                    className="hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open("https://github.com/your-github-username", "_blank")}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900/20"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>I'd love to hear from you!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Your Email" type="email" />
                  </div>
                  <Textarea placeholder="Your Message" rows={4} />
                  <Button className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-400">© 2025 Ayush Gade. Built with Next.js and Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
