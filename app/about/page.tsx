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
    }
  ]

  const achievements = [
    { icon: Award, title: "50+ Dự án", description: "Thành công" },
    { icon: Users, title: "30+ Khách hàng", description: "Hài lòng" },
    { icon: Coffee, title: "1000+ Tách cà phê", description: "Đã uống" },
    { icon: Clock, title: "5+ Năm", description: "Kinh nghiệm" },
  ]

  return (
    <div>
      <PageHeader
        title="Về tôi"
        description="Tìm hiểu về tôi - lộ trình, kỹ năng, và sự đam mê trong việc tạo ra trải nghiệm số"
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
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Lộ trình</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    Xin chào! Tôi là một nhà phát triển phần mềm với hơn 5 năm kinh nghiệm trong việc tạo ra các giải pháp số
                    mà có thể làm khác biệt. Lộ trình của tôi bắt đầu với sự tò mò về cách các trang web hoạt động,
                    điều này nhanh chóng phát triển thành tình yêu sâu sắc đối với lập trình và giải quyết vấn đề.
                  </p>
                  <p>
                    Tôi chuyên về phát triển full-stack, với chuyên môn trong các framework hiện đại như React, Next.js,
                    và Node.js. Nhưng điều thực sự khiến tôi hài lòng là sự giao thoa giữa công nghệ và sáng tạo - xây
                    dựng các ứng dụng không chỉ đơn thuần là hàm năng, mà còn đẹp và trực quan.
                  </p>
                  <p>
                    Khi tôi không lập trình, bạn sẽ tìm thấy tôi đang khám phá các công nghệ mới, đóng góp cho các dự
                    án mã nguồn mở, hoặc chia sẻ kiến thức với cộng đồng lập trình viên. Tôi tin vào việc học liên
                    tục và luôn ở đầu để đối phó với sự thay đổi liên tục trong lĩnh vực này.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Kỹ năng</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tổng quan về kỹ năng và trình độ của tôi
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
                      {/* <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}% Proficiency</p> */}
                    </div>
                  </div>
                  {/* <Progress value={skill.level} className="h-2" /> */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Kinh nghiệm</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Lộ trình và kết quả đặc biệt trong công việc
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
