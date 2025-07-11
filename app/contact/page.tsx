"use client"

import type React from "react"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card3D } from "@/components/3d-card"
import { MagneticButton } from "@/components/magnetic-button"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@hnh-dev.com",
      description: "Send me an email anytime",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      description: "Available for remote work worldwide",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "I'll get back to you quickly",
      color: "from-orange-400 to-red-400",
    },
  ]

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer:
        "Project timelines vary based on complexity, but most web projects take 2-8 weeks, while mobile apps typically require 6-16 weeks.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes! I work with clients worldwide and am comfortable with different time zones and communication preferences.",
    },
    {
      question: "What's included in your development services?",
      answer:
        "My services include planning, design, development, testing, deployment, and post-launch support. I provide comprehensive solutions from start to finish.",
    },
    {
      question: "How do you handle project communication?",
      answer:
        "I believe in transparent communication through regular updates, progress reports, and scheduled check-ins via your preferred communication method.",
    },
  ]

  if (isSubmitted) {
    return (
      <div>
        <PageHeader
          title="Thank You!"
          description="Your message has been sent successfully. I'll get back to you within 24 hours."
          gradient="from-green-600 via-blue-600 to-purple-600"
        />

        <section className="px-6 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <Card3D className="glassmorphism-card rounded-3xl p-8 md:p-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Message Sent Successfully!</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Thank you for reaching out. I've received your message and will respond within 24 hours. In the
                meantime, feel free to check out my recent projects or connect with me on social media.
              </p>
              <MagneticButton
                onClick={() => setIsSubmitted(false)}
                className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3"
              >
                Send Another Message
              </MagneticButton>
            </Card3D>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  return (
    <div>
      <PageHeader
        title="Get In Touch"
        description="Ready to start your project? Let's discuss how we can bring your ideas to life"
        gradient="from-cyan-600 via-purple-600 to-pink-600"
      />

      {/* Contact Info */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card3D key={index}>
                <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg hover-lift text-center p-6 h-full">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">{info.title}</h3>
                  <p className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-2">{info.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
                </Card>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <Card3D className="glassmorphism-card rounded-3xl border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-gray-800 dark:text-gray-100">Start Your Project</CardTitle>
              <CardDescription className="text-lg text-gray-700 dark:text-gray-300">
                Fill out the form below and I'll get back to you within 24 hours with a detailed proposal.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name *</label>
                    <Input
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="rounded-xl border-purple-200 focus:border-purple-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name *</label>
                    <Input
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="rounded-xl border-purple-200 focus:border-purple-400"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email *</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="rounded-xl border-purple-200 focus:border-purple-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
                    <Input
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="rounded-xl border-purple-200 focus:border-purple-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Company</label>
                  <Input
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="rounded-xl border-purple-200 focus:border-purple-400"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Service Needed *</label>
                    <Select onValueChange={(value) => handleInputChange("service", value)} required>
                      <SelectTrigger className="rounded-xl border-purple-200 focus:border-purple-400">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-development">Mobile App Development</SelectItem>
                        <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                        <SelectItem value="backend-development">Backend Development</SelectItem>
                        <SelectItem value="cloud-devops">Cloud & DevOps</SelectItem>
                        <SelectItem value="consulting">Consulting & Strategy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Budget Range</label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="rounded-xl border-purple-200 focus:border-purple-400">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="over-50k">Over $50,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Project Timeline</label>
                  <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger className="rounded-xl border-purple-200 focus:border-purple-400">
                      <SelectValue placeholder="When do you need this completed?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="2-3-months">2-3 months</SelectItem>
                      <SelectItem value="3-6-months">3-6 months</SelectItem>
                      <SelectItem value="flexible">Flexible timeline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Project Details *</label>
                  <Textarea
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="rounded-xl border-purple-200 focus:border-purple-400 min-h-[120px]"
                    required
                  />
                </div>

                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </MagneticButton>
              </form>
            </CardContent>
          </Card3D>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Common questions about working together</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card3D key={index}>
                <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg hover-lift">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800 dark:text-gray-100">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                  </CardContent>
                </Card>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
