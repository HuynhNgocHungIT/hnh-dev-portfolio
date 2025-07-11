import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Card3D } from "@/components/3d-card"
import { MagneticButton } from "@/components/magnetic-button"
import { Footer } from "@/components/footer"
import {
  Code2,
  Palette,
  Smartphone,
  Database,
  Globe,
  Zap,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Implementation",
        "Cross-browser Compatibility",
        "Progressive Web Apps",
        "API Integration",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      startingPrice: "$2,500",
      timeline: "2-6 weeks",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "Cross-platform Development",
        "Native Performance",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "Third-party Integrations",
      ],
      technologies: ["React Native", "Flutter", "Firebase", "Redux"],
      startingPrice: "$5,000",
      timeline: "6-12 weeks",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and engagement",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems",
        "Accessibility Compliance",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      startingPrice: "$1,500",
      timeline: "1-4 weeks",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable server-side solutions and API development for robust applications",
      features: [
        "RESTful API Development",
        "Database Design & Optimization",
        "Authentication & Security",
        "Third-party Integrations",
        "Performance Monitoring",
        "Documentation",
      ],
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
      startingPrice: "$3,000",
      timeline: "3-8 weeks",
      color: "from-orange-400 to-red-400",
    },
    {
      icon: Globe,
      title: "Cloud & DevOps",
      description: "Cloud infrastructure setup and deployment automation for scalable applications",
      features: [
        "Cloud Infrastructure Setup",
        "CI/CD Pipeline Implementation",
        "Container Orchestration",
        "Monitoring & Logging",
        "Security Configuration",
        "Performance Optimization",
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
      startingPrice: "$2,000",
      timeline: "1-3 weeks",
      color: "from-indigo-400 to-purple-400",
    },
    {
      icon: Zap,
      title: "Consulting & Strategy",
      description: "Technical consulting and strategic planning for your digital transformation",
      features: [
        "Technical Architecture Review",
        "Technology Stack Selection",
        "Performance Audits",
        "Code Reviews",
        "Team Training",
        "Project Planning",
      ],
      technologies: ["Various based on needs"],
      startingPrice: "$150/hour",
      timeline: "Flexible",
      color: "from-pink-400 to-rose-400",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your goals, requirements, and target audience to create a comprehensive project plan.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description:
        "Creating wireframes, mockups, and interactive prototypes to visualize the final product before development.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Building your solution using best practices, with continuous testing to ensure quality and performance.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploying your project and providing ongoing support, maintenance, and optimization as needed.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "The web application exceeded our expectations. Professional, timely, and exactly what we needed.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      content: "Outstanding mobile app development. Great communication throughout the entire process.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content: "The UI/UX design transformed our user engagement. Highly recommend their services.",
      rating: 5,
    },
  ]

  return (
    <div>
      <PageHeader
        title="Services"
        description="Comprehensive digital solutions tailored to your business needs - from concept to deployment"
        gradient="from-green-600 via-blue-600 to-purple-600"
      />

      {/* Services Grid */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card3D key={index}>
                <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg hover-lift transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-gray-800 dark:text-gray-100">{service.title}</CardTitle>
                    <CardDescription className="text-gray-700 dark:text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="rounded-full text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-purple-100 dark:border-purple-800">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Starting at</p>
                        <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
                          {service.startingPrice}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Timeline</p>
                        <p className="font-semibold text-gray-800 dark:text-gray-100">{service.timeline}</p>
                      </div>
                    </div>

                    <MagneticButton className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </MagneticButton>
                  </CardContent>
                </Card>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">My Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card3D key={index}>
                <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg hover-lift text-center p-6 h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </Card>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              What clients say about working with me
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card3D key={index}>
                <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg hover-lift h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
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
              Let's discuss your requirements and create a custom solution that perfectly fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <MagneticButton
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 shadow-lg hover:shadow-xl"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get Free Quote
                </MagneticButton>
              </Link>
              <Link href="/contact">
                <MagneticButton
                  variant="outline"
                  size="lg"
                  className="rounded-full border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 bg-transparent shadow-lg hover:shadow-xl"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Schedule Call
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
