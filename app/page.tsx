"use client"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Zap, Rocket, Heart, ArrowRight } from "lucide-react"
import Image from "next/image"
import { AnimatedCounter } from "@/components/animated-counter"
import { TypingAnimation } from "@/components/typing-animation"
import { Card3D } from "@/components/3d-card"
import { MagneticButton } from "@/components/magnetic-button"
import { MorphingBlob } from "@/components/morphing-blob"
import { SkillOrbit } from "@/components/skill-orbit"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const typingTexts = [
    "Creative Software Engineer",
    "Full-Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Innovation Enthusiast",
  ]

  const orbitSkills = [
    { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-700" },
    { name: "Node.js", icon: "🟢", color: "bg-green-100 text-green-700" },
    { name: "Python", icon: "🐍", color: "bg-yellow-100 text-yellow-700" },
    { name: "TypeScript", icon: "📘", color: "bg-blue-100 text-blue-700" },
    { name: "Next.js", icon: "▲", color: "bg-gray-100 text-gray-700" },
    { name: "AWS", icon: "☁️", color: "bg-orange-100 text-orange-700" },
    { name: "Docker", icon: "🐳", color: "bg-cyan-100 text-cyan-700" },
    { name: "GraphQL", icon: "🔗", color: "bg-pink-100 text-pink-700" },
  ]

  const featuredProjects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      href: "/projects/ecommerce-platform",
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Socket.io", "MongoDB"],
      href: "/projects/task-management",
    },
    {
      title: "AI-Powered Analytics",
      description: "Advanced data visualization platform with machine learning insights and predictive analytics.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Python", "TensorFlow", "D3.js"],
      href: "/projects/ai-analytics",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "Exceptional work! The attention to detail and creative problem-solving approach exceeded our expectations.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      content: "A true professional who delivers high-quality solutions on time. The user experience is outstanding.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, CreativeStudio",
      content: "Incredible creativity combined with technical expertise. Significantly boosted our conversion rates.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ]

  return (
    <div className="overflow-x-hidden">
      <MorphingBlob />

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <Card3D className="glassmorphism-card rounded-3xl p-8 md:p-12 mb-8">
            <div className="mb-6">
              <div className="text-lg md:text-xl text-purple-600 dark:text-purple-400 mb-4 font-medium">
                Hello, I'm a
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 min-h-[1.2em]">
                <TypingAnimation
                  texts={typingTexts}
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
                />
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Crafting beautiful, functional, and user-centered digital experiences through innovative code and creative
              problem-solving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <MagneticButton
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 shadow-lg hover:shadow-xl"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  View My Work
                </MagneticButton>
              </Link>
              <Link href="/contact">
                <MagneticButton
                  variant="outline"
                  size="lg"
                  className="rounded-full border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 bg-transparent shadow-lg hover:shadow-xl"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Get In Touch
                </MagneticButton>
              </Link>
            </div>
          </Card3D>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card3D className="text-center glassmorphism-card rounded-3xl p-6 hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </Card3D>
            <Card3D className="text-center glassmorphism-card rounded-3xl p-6 hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                <AnimatedCounter end={5} suffix="+" />
              </div>
              <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
            </Card3D>
            <Card3D className="text-center glassmorphism-card rounded-3xl p-6 hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
            </Card3D>
            <Card3D className="text-center glassmorphism-card rounded-3xl p-6 hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="text-gray-600 dark:text-gray-400">Technologies</p>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Skills Orbit Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Skills & Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern digital experiences
            </p>
          </div>
          <SkillOrbit skills={orbitSkills} />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card3D key={index}>
                <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg hover-lift transition-all duration-300 overflow-hidden h-full">
                  <div className="relative group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <MagneticButton
                        size="sm"
                        variant="secondary"
                        className="rounded-full bg-white/80 backdrop-blur-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </MagneticButton>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-gray-100">{project.title}</CardTitle>
                    <CardDescription className="text-gray-700 dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="rounded-full hover:scale-105 transition-transform"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Card3D>
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <MagneticButton
                variant="outline"
                size="lg"
                className="rounded-full border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 bg-transparent"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">What Clients Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Testimonials from satisfied clients and collaborators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card3D key={index}>
                <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg hover-lift h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <CardTitle className="text-lg text-gray-800 dark:text-gray-100">{testimonial.name}</CardTitle>
                        <CardDescription className="text-gray-700 dark:text-gray-300">
                          {testimonial.role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </Card3D>
            ))}
          </div>

          <div className="text-center">
            <Link href="/testimonials">
              <MagneticButton
                variant="outline"
                size="lg"
                className="rounded-full border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 bg-transparent"
              >
                View All Testimonials
                <ArrowRight className="w-5 h-5 ml-2" />
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card3D className="glassmorphism-card rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life with innovative solutions and creative design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <MagneticButton
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 shadow-lg hover:shadow-xl"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start a Project
                </MagneticButton>
              </Link>
              <Link href="/services">
                <MagneticButton
                  variant="outline"
                  size="lg"
                  className="rounded-full border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 bg-transparent shadow-lg hover:shadow-xl"
                >
                  View Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </MagneticButton>
              </Link>
            </div>
          </Card3D>
        </div>
      </section>

      <Footer />
    </div>
  )
}
