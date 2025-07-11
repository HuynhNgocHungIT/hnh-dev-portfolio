"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Card3D } from "@/components/3d-card"
import { MagneticButton } from "@/components/magnetic-button"
import { Footer } from "@/components/footer"
import { Star, Quote, Building, MapPin, Calendar, Search, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedRating, setSelectedRating] = useState("All")

  const categories = ["All", "Web Development", "Mobile App", "UI/UX Design", "Consulting", "E-commerce"]
  const ratings = ["All", "5 Stars", "4 Stars", "3+ Stars"]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      location: "San Francisco, CA",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      category: "Web Development",
      project: "E-commerce Platform",
      date: "2024-01-15",
      content:
        "Working with HNH Dev was an absolute pleasure. The attention to detail and creative problem-solving approach exceeded our expectations. Our new e-commerce platform has significantly improved user engagement and conversion rates. The project was delivered on time and within budget.",
      highlights: ["On-time delivery", "Excellent communication", "High-quality code", "Great design"],
      projectValue: "$15,000",
      duration: "3 months",
      featured: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateCorp",
      location: "New York, NY",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      category: "Mobile App",
      project: "Task Management App",
      date: "2023-12-20",
      content:
        "The mobile app development was flawless. HNH Dev understood our requirements perfectly and delivered a solution that our users love. The app's performance is outstanding, and the user interface is intuitive and beautiful.",
      highlights: ["User-friendly design", "Excellent performance", "Cross-platform compatibility", "Great support"],
      projectValue: "$25,000",
      duration: "4 months",
      featured: false,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "CreativeStudio",
      location: "Los Angeles, CA",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      category: "UI/UX Design",
      project: "Website Redesign",
      date: "2023-11-30",
      content:
        "The website redesign transformed our online presence completely. The new design is not only visually stunning but also significantly improved our conversion rates. HNH Dev's understanding of user experience is exceptional.",
      highlights: ["Beautiful design", "Improved conversions", "Mobile responsive", "SEO optimized"],
      projectValue: "$8,000",
      duration: "2 months",
      featured: true,
    },
    {
      id: 4,
      name: "David Kim",
      role: "Founder",
      company: "StartupLab",
      location: "Austin, TX",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      category: "Web Development",
      project: "SaaS Platform",
      date: "2023-10-15",
      content:
        "HNH Dev helped us build our SaaS platform from the ground up. The technical expertise and architectural decisions made have allowed us to scale efficiently. The code quality is exceptional and well-documented.",
      highlights: ["Scalable architecture", "Clean code", "Technical expertise", "Great collaboration"],
      projectValue: "$35,000",
      duration: "6 months",
      featured: false,
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Operations Manager",
      company: "RetailPlus",
      location: "Seattle, WA",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4,
      category: "E-commerce",
      project: "Online Store",
      date: "2023-09-25",
      content:
        "Our online store has never looked better or performed faster. The integration with our existing systems was seamless, and the admin dashboard makes managing our inventory a breeze. Highly recommended!",
      highlights: ["Fast performance", "Easy integration", "User-friendly admin", "Mobile optimized"],
      projectValue: "$12,000",
      duration: "2.5 months",
      featured: false,
    },
    {
      id: 6,
      name: "James Thompson",
      role: "CTO",
      company: "FinanceFlow",
      location: "Chicago, IL",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      category: "Consulting",
      project: "Technical Architecture Review",
      date: "2023-08-10",
      content:
        "The technical consulting provided was invaluable. HNH Dev identified several performance bottlenecks and provided clear solutions that improved our application's speed by 60%. The recommendations were practical and well-explained.",
      highlights: ["Expert analysis", "Practical solutions", "Performance improvement", "Clear documentation"],
      projectValue: "$5,000",
      duration: "1 month",
      featured: false,
    },
    {
      id: 7,
      name: "Maria Garcia",
      role: "Design Lead",
      company: "ArtisticVision",
      location: "Miami, FL",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      category: "UI/UX Design",
      project: "Portfolio Website",
      date: "2023-07-20",
      content:
        "The portfolio website created for our design agency perfectly captures our brand essence. The animations and interactions are smooth, and the overall user experience is exceptional. Our client inquiries have increased by 40%.",
      highlights: ["Brand alignment", "Smooth animations", "Great UX", "Increased inquiries"],
      projectValue: "$6,500",
      duration: "1.5 months",
      featured: true,
    },
    {
      id: 8,
      name: "Robert Anderson",
      role: "Business Owner",
      company: "LocalBiz",
      location: "Denver, CO",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4,
      category: "Web Development",
      project: "Business Website",
      date: "2023-06-15",
      content:
        "As a small business owner, I needed a professional website that wouldn't break the bank. HNH Dev delivered exactly what I needed - a beautiful, functional website that represents my business perfectly. The ongoing support has been excellent.",
      highlights: ["Affordable pricing", "Professional design", "Ongoing support", "Local SEO"],
      projectValue: "$3,500",
      duration: "1 month",
      featured: false,
    },
  ]

  const filteredTestimonials = testimonials.filter((testimonial) => {
    const categoryMatch = selectedCategory === "All" || testimonial.category === selectedCategory
    const ratingMatch =
      selectedRating === "All" ||
      (selectedRating === "5 Stars" && testimonial.rating === 5) ||
      (selectedRating === "4 Stars" && testimonial.rating === 4) ||
      (selectedRating === "3+ Stars" && testimonial.rating >= 3)
    return categoryMatch && ratingMatch
  })

  const featuredTestimonials = filteredTestimonials.filter((t) => t.featured)
  const regularTestimonials = filteredTestimonials.filter((t) => !t.featured)

  const stats = [
    { label: "Happy Clients", value: "30+", icon: "😊" },
    { label: "5-Star Reviews", value: "95%", icon: "⭐" },
    { label: "Projects Completed", value: "50+", icon: "🚀" },
    { label: "Client Retention", value: "90%", icon: "🔄" },
  ]

  return (
    <div>
      <PageHeader
        title="Client Testimonials"
        description="Real feedback from satisfied clients who trusted me with their projects"
        gradient="from-rose-600 via-purple-600 to-blue-600"
      />

      {/* Stats Section */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card3D key={index}>
                <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg hover-lift text-center p-6">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
                </Card>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search testimonials..."
                className="pl-10 rounded-xl border-purple-200 focus:border-purple-400"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48 rounded-xl border-purple-200">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedRating} onValueChange={setSelectedRating}>
                <SelectTrigger className="w-full sm:w-48 rounded-xl border-purple-200">
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  {ratings.map((rating) => (
                    <SelectItem key={rating} value={rating}>
                      {rating}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      {featuredTestimonials.length > 0 && (
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Featured Reviews</h2>
              <p className="text-gray-600 dark:text-gray-400">Highlighted testimonials from recent projects</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {featuredTestimonials.map((testimonial) => (
                <Card3D key={testimonial.id}>
                  <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg hover-lift h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="rounded-full"
                          />
                          <div>
                            <CardTitle className="text-lg text-gray-800 dark:text-gray-100">
                              {testimonial.name}
                            </CardTitle>
                            <CardDescription className="text-purple-600 dark:text-purple-400 font-medium">
                              {testimonial.role}
                            </CardDescription>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                              <Building className="w-4 h-4 mr-1" />
                              {testimonial.company}
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <MapPin className="w-4 h-4 mr-1" />
                              {testimonial.location}
                            </div>
                          </div>
                        </div>
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                          Featured
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(testimonial.date).toLocaleDateString()}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="mb-4">
                        <Quote className="w-8 h-8 text-purple-400 mb-2" />
                        <p className="text-gray-700 dark:text-gray-300 italic">{testimonial.content}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Project</p>
                          <p className="font-semibold text-gray-800 dark:text-gray-100">{testimonial.project}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                          <p className="font-semibold text-gray-800 dark:text-gray-100">{testimonial.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Category</p>
                          <Badge variant="outline" className="rounded-full">
                            {testimonial.category}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Value</p>
                          <p className="font-semibold text-gray-800 dark:text-gray-100">{testimonial.projectValue}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-2">Key Highlights:</p>
                        <div className="flex flex-wrap gap-2">
                          {testimonial.highlights.map((highlight, i) => (
                            <Badge key={i} variant="secondary" className="rounded-full text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Card3D>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Testimonials */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">All Reviews</h2>
            <p className="text-gray-600 dark:text-gray-400">
              {filteredTestimonials.length} testimonial{filteredTestimonials.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularTestimonials.map((testimonial) => (
              <Card3D key={testimonial.id}>
                <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg hover-lift h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <CardTitle className="text-lg text-gray-800 dark:text-gray-100">{testimonial.name}</CardTitle>
                        <CardDescription className="text-purple-600 dark:text-purple-400 font-medium">
                          {testimonial.role}
                        </CardDescription>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Building className="w-3 h-3 mr-1" />
                          {testimonial.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Badge variant="outline" className="rounded-full text-xs">
                        {testimonial.category}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-4">{testimonial.content}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Project:</span>
                        <span className="font-medium text-gray-800 dark:text-gray-100">{testimonial.project}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                        <span className="font-medium text-gray-800 dark:text-gray-100">{testimonial.duration}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {testimonial.highlights.slice(0, 3).map((highlight, i) => (
                        <Badge key={i} variant="secondary" className="rounded-full text-xs">
                          {highlight}
                        </Badge>
                      ))}
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
              Ready to Join These Happy Clients?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. I'm committed to delivering the same
              level of excellence that my clients rave about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <MagneticButton
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </MagneticButton>
              </Link>
              <Link href="/services">
                <MagneticButton
                  variant="outline"
                  size="lg"
                  className="rounded-full border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 bg-transparent shadow-lg hover:shadow-xl"
                >
                  View Services
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
