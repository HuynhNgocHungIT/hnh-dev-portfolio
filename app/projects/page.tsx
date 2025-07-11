import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Card3D } from "@/components/3d-card"
import { MagneticButton } from "@/components/magnetic-button"
import { Footer } from "@/components/footer"
import { ExternalLink, Github, Calendar, Users, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      description:
        "A comprehensive e-commerce solution with modern UI, secure payment processing, inventory management, and admin dashboard. Built with performance and scalability in mind.",
      longDescription:
        "This full-stack e-commerce platform features a modern, responsive design with advanced functionality including real-time inventory tracking, secure payment processing via Stripe, comprehensive admin dashboard, and mobile-optimized shopping experience.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Vercel"],
      category: "Full-Stack",
      status: "Completed",
      duration: "3 months",
      team: "Solo Project",
      year: "2024",
      features: [
        "Responsive design across all devices",
        "Secure payment processing with Stripe",
        "Real-time inventory management",
        "Admin dashboard with analytics",
        "SEO optimized product pages",
        "Advanced search and filtering",
      ],
      github: "https://github.com/username/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
      rating: 5,
    },
    {
      id: "task-management",
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface for efficient workflow management.",
      longDescription:
        "This collaborative task management application enables teams to organize projects, assign tasks, track progress, and communicate effectively. Features include real-time updates, file sharing, time tracking, and comprehensive reporting.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Material-UI"],
      category: "Web App",
      status: "Completed",
      duration: "4 months",
      team: "3 developers",
      year: "2023",
      features: [
        "Real-time collaboration",
        "Drag-and-drop task management",
        "Team chat and file sharing",
        "Time tracking and reporting",
        "Custom project templates",
        "Mobile responsive design",
      ],
      github: "https://github.com/username/task-management",
      demo: "https://taskmanager-demo.vercel.app",
      rating: 5,
    },
    {
      id: "ai-analytics",
      title: "AI-Powered Analytics Dashboard",
      description:
        "Advanced data visualization platform with machine learning insights, predictive analytics, and interactive dashboards for data-driven decision making.",
      longDescription:
        "This AI-powered analytics platform processes large datasets to provide actionable insights through machine learning algorithms. Features include predictive modeling, automated reporting, and customizable visualization components.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "TensorFlow", "React", "D3.js", "FastAPI", "PostgreSQL"],
      category: "AI/ML",
      status: "Completed",
      duration: "6 months",
      team: "5 developers",
      year: "2023",
      features: [
        "Machine learning predictions",
        "Interactive data visualizations",
        "Automated report generation",
        "Custom dashboard builder",
        "Real-time data processing",
        "API integration capabilities",
      ],
      github: "https://github.com/username/ai-analytics",
      demo: "https://ai-analytics-demo.vercel.app",
      rating: 5,
    },
    {
      id: "mobile-fitness",
      title: "Mobile Fitness App",
      description:
        "Cross-platform fitness tracking application with social features, personalized workout plans, and integration with popular health platforms.",
      longDescription:
        "A comprehensive fitness application that helps users track workouts, monitor progress, and stay motivated through social challenges. Includes AI-powered workout recommendations and health data synchronization.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Firebase", "HealthKit", "Redux", "Expo"],
      category: "Mobile",
      status: "In Progress",
      duration: "5 months",
      team: "4 developers",
      year: "2024",
      features: [
        "Workout tracking and planning",
        "Social challenges and leaderboards",
        "Health data synchronization",
        "AI-powered recommendations",
        "Progress analytics",
        "Offline mode support",
      ],
      github: "https://github.com/username/fitness-app",
      demo: "https://fitness-app-demo.com",
      rating: 4,
    },
    {
      id: "portfolio-website",
      title: "Creative Portfolio Website",
      description:
        "A stunning portfolio website for a creative agency featuring smooth animations, interactive elements, and optimized performance.",
      longDescription:
        "This creative portfolio showcases the agency's work through immersive storytelling, smooth animations, and interactive elements. Built with performance optimization and SEO best practices in mind.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Framer Motion", "GSAP", "Sanity CMS", "Tailwind CSS"],
      category: "Frontend",
      status: "Completed",
      duration: "2 months",
      team: "Solo Project",
      year: "2024",
      features: [
        "Smooth scroll animations",
        "Interactive project showcases",
        "CMS integration",
        "Performance optimized",
        "SEO friendly",
        "Mobile responsive",
      ],
      github: "https://github.com/username/creative-portfolio",
      demo: "https://creative-portfolio-demo.vercel.app",
      rating: 5,
    },
    {
      id: "blockchain-voting",
      title: "Blockchain Voting System",
      description:
        "Secure and transparent voting system built on blockchain technology ensuring vote integrity and transparency in democratic processes.",
      longDescription:
        "A decentralized voting platform that leverages blockchain technology to ensure vote security, transparency, and immutability. Features include voter verification, real-time results, and audit trails.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask", "IPFS"],
      category: "Blockchain",
      status: "Completed",
      duration: "4 months",
      team: "3 developers",
      year: "2023",
      features: [
        "Blockchain-based vote storage",
        "Voter identity verification",
        "Real-time result tracking",
        "Immutable audit trails",
        "MetaMask integration",
        "Decentralized architecture",
      ],
      github: "https://github.com/username/blockchain-voting",
      demo: "https://blockchain-voting-demo.vercel.app",
      rating: 4,
    },
  ]

  const categories = ["All", "Full-Stack", "Frontend", "Mobile", "AI/ML", "Blockchain"]

  return (
    <div>
      <PageHeader
        title="My Projects"
        description="Explore my portfolio of innovative solutions, creative applications, and technical achievements"
        gradient="from-blue-600 via-purple-600 to-pink-600"
      />

      {/* Filter Categories */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <MagneticButton
                key={category}
                variant="outline"
                className="rounded-full border-purple-300 text-purple-600 hover:bg-purple-50 px-6 py-2 bg-transparent"
              >
                {category}
              </MagneticButton>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card3D key={project.id}>
                <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg hover-lift transition-all duration-300 overflow-hidden h-full">
                  <div className="relative group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <MagneticButton
                        size="sm"
                        variant="secondary"
                        className="rounded-full bg-white/80 backdrop-blur-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </MagneticButton>
                      <MagneticButton
                        size="sm"
                        variant="secondary"
                        className="rounded-full bg-white/80 backdrop-blur-sm"
                      >
                        <Github className="w-4 h-4" />
                      </MagneticButton>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="rounded-full bg-white/90 text-gray-800">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-800 dark:text-gray-100 mb-2">{project.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.year}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {project.team}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <CardDescription className="text-gray-700 dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
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

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100">Key Features:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-3">
                      <Link href={`/projects/${project.id}`} className="flex-1">
                        <MagneticButton className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                          View Details
                        </MagneticButton>
                      </Link>
                      <MagneticButton
                        variant="outline"
                        size="icon"
                        className="rounded-xl border-purple-300 text-purple-600 hover:bg-purple-50"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </MagneticButton>
                    </div>
                  </CardContent>
                </Card>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card3D className="glassmorphism-card rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your ideas to life with innovative solutions and cutting-edge technology.
            </p>
            <Link href="/contact">
              <MagneticButton
                size="lg"
                className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 shadow-lg hover:shadow-xl"
              >
                Start a Conversation
              </MagneticButton>
            </Link>
          </Card3D>
        </div>
      </section>

      <Footer />
    </div>
  )
}
