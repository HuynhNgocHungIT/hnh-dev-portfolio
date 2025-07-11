import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card3D } from "@/components/3d-card"
import { Footer } from "@/components/footer"
import { Code2, Palette, Smartphone, Database, Globe, Award, Users, Coffee, Clock } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const skills = [
    { name: "Frontend Development", level: 95, icon: Code2, color: "from-purple-400 to-pink-400" },
    { name: "Backend Development", level: 90, icon: Database, color: "from-blue-400 to-cyan-400" },
    { name: "UI/UX Design", level: 85, icon: Palette, color: "from-green-400 to-emerald-400" },
    { name: "Mobile Development", level: 80, icon: Smartphone, color: "from-orange-400 to-red-400" },
    { name: "Cloud & DevOps", level: 88, icon: Globe, color: "from-indigo-400 to-purple-400" },
  ]

  const experience = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description:
        "Leading development of enterprise-level web applications using React, Node.js, and AWS. Mentoring junior developers and architecting scalable solutions.",
      achievements: ["Led team of 5 developers", "Reduced load times by 40%", "Implemented CI/CD pipeline"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Inc.",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications and collaborated with design teams to create exceptional user experiences.",
      achievements: ["Built 15+ client projects", "Improved user engagement by 60%", "Mentored 3 junior developers"],
    },
    {
      title: "Junior Web Developer",
      company: "StartupHub",
      period: "2019 - 2020",
      description: "Started my professional journey building websites and learning modern development practices.",
      achievements: ["Completed 20+ projects", "Learned React & Node.js", "Contributed to open source"],
    },
  ]

  const achievements = [
    { icon: Award, title: "50+ Projects", description: "Successfully completed projects" },
    { icon: Users, title: "30+ Clients", description: "Satisfied clients worldwide" },
    { icon: Coffee, title: "1000+ Cups", description: "Of coffee consumed while coding" },
    { icon: Clock, title: "5+ Years", description: "Of professional experience" },
  ]

  return (
    <div>
      <PageHeader
        title="About Me"
        description="Get to know the person behind the code - my journey, skills, and passion for creating digital experiences"
        gradient="from-purple-600 via-blue-600 to-cyan-600"
      />

      {/* Personal Story */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <Card3D className="glassmorphism-card rounded-3xl p-8">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Profile"
                width={500}
                height={500}
                className="rounded-2xl mx-auto float-animation"
              />
            </Card3D>
            <div className="space-y-6">
              <Card3D className="glassmorphism-card rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">My Journey</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    Hello! I'm a passionate software engineer with over 5 years of experience in creating digital
                    solutions that make a difference. My journey began with a curiosity about how websites work, which
                    quickly evolved into a deep love for coding and problem-solving.
                  </p>
                  <p>
                    I specialize in full-stack development, with expertise in modern frameworks like React, Next.js, and
                    Node.js. But what truly drives me is the intersection of technology and creativity - building
                    applications that are not just functional, but beautiful and intuitive.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                    projects, or sharing knowledge with the developer community. I believe in continuous learning and
                    staying ahead of the curve in this ever-evolving field.
                  </p>
                </div>
              </Card3D>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <Card3D key={index}>
                <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg hover-lift text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
                </Card>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Technical Skills</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card3D key={index}>
                <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg hover-lift p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center mr-4`}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100">{skill.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}% Proficiency</p>
                    </div>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </Card>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Work Experience</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card3D key={index}>
                <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg hover-lift">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl text-gray-800 dark:text-gray-100">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-purple-600 dark:text-purple-400">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="rounded-full mt-2 md:mt-0 w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <Badge key={i} variant="secondary" className="rounded-full">
                          {achievement}
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

      <Footer />
    </div>
  )
}
