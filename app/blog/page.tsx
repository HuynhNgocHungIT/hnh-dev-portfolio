import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Card3D } from "@/components/3d-card"
import { MagneticButton } from "@/components/magnetic-button"
import { Footer } from "@/components/footer"
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const categories = ["All", "Web Development", "Mobile", "UI/UX", "DevOps", "Career", "Tutorials"]

  const featuredPost = {
    id: "modern-react-patterns-2024",
    title: "Modern React Patterns and Best Practices in 2024",
    excerpt:
      "Explore the latest React patterns, hooks, and architectural decisions that will make your applications more maintainable and performant.",
    content:
      "React continues to evolve, and with it, the patterns and practices that define modern React development. In this comprehensive guide, we'll explore the most effective patterns for building scalable React applications in 2024.",
    image: "/placeholder.svg?height=400&width=800",
    category: "Web Development",
    author: "HNH Dev",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Frontend", "Best Practices"],
    featured: true,
  }

  const blogPosts = [
    {
      id: "nextjs-app-router-guide",
      title: "Complete Guide to Next.js App Router",
      excerpt:
        "Learn how to leverage the new App Router in Next.js 13+ for better performance and developer experience.",
      image: "/placeholder.svg?height=300&width=600",
      category: "Web Development",
      author: "HNH Dev",
      publishedAt: "2024-01-10",
      readTime: "12 min read",
      tags: ["Next.js", "React", "App Router"],
    },
    {
      id: "mobile-first-design-principles",
      title: "Mobile-First Design Principles That Actually Work",
      excerpt: "Practical strategies for creating responsive designs that prioritize mobile user experience.",
      image: "/placeholder.svg?height=300&width=600",
      category: "UI/UX",
      author: "HNH Dev",
      publishedAt: "2024-01-05",
      readTime: "6 min read",
      tags: ["Mobile Design", "UX", "Responsive"],
    },
    {
      id: "typescript-advanced-patterns",
      title: "Advanced TypeScript Patterns for Better Code",
      excerpt: "Discover advanced TypeScript techniques that will improve your code quality and developer experience.",
      image: "/placeholder.svg?height=300&width=600",
      category: "Web Development",
      author: "HNH Dev",
      publishedAt: "2023-12-28",
      readTime: "10 min read",
      tags: ["TypeScript", "JavaScript", "Programming"],
    },
    {
      id: "react-native-performance-tips",
      title: "React Native Performance Optimization Tips",
      excerpt: "Essential techniques to make your React Native apps faster and more responsive.",
      image: "/placeholder.svg?height=300&width=600",
      category: "Mobile",
      author: "HNH Dev",
      publishedAt: "2023-12-20",
      readTime: "9 min read",
      tags: ["React Native", "Performance", "Mobile"],
    },
    {
      id: "docker-development-workflow",
      title: "Streamlining Development with Docker",
      excerpt: "How to set up an efficient development workflow using Docker containers and compose.",
      image: "/placeholder.svg?height=300&width=600",
      category: "DevOps",
      author: "HNH Dev",
      publishedAt: "2023-12-15",
      readTime: "7 min read",
      tags: ["Docker", "DevOps", "Development"],
    },
    {
      id: "career-advice-developers",
      title: "Career Advice for Aspiring Developers",
      excerpt: "Practical tips and insights for building a successful career in software development.",
      image: "/placeholder.svg?height=300&width=600",
      category: "Career",
      author: "HNH Dev",
      publishedAt: "2023-12-10",
      readTime: "5 min read",
      tags: ["Career", "Advice", "Development"],
    },
  ]

  const popularTags = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Mobile",
    "UI/UX",
    "Performance",
    "DevOps",
    "Career",
    "Best Practices",
  ]

  return (
    <div>
      <PageHeader
        title="Blog"
        description="Insights, tutorials, and thoughts on modern web development, design, and technology"
        gradient="from-emerald-600 via-blue-600 to-purple-600"
      />

      {/* Search and Filter */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search articles..."
                className="pl-10 rounded-xl border-purple-200 focus:border-purple-400"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <MagneticButton
                  key={category}
                  variant="outline"
                  className="rounded-full border-purple-300 text-purple-600 hover:bg-purple-50 px-4 py-2 bg-transparent"
                >
                  {category}
                </MagneticButton>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Featured Article</h2>
            <p className="text-gray-600 dark:text-gray-400">Don't miss this week's highlighted content</p>
          </div>

          <Card3D>
            <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg hover-lift transition-all duration-300 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative group">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={800}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                      Featured
                    </Badge>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <Badge variant="outline" className="rounded-full">
                      {featuredPost.category}
                    </Badge>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/blog/${featuredPost.id}`}>
                    <MagneticButton className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </MagneticButton>
                  </Link>
                </div>
              </div>
            </Card>
          </Card3D>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Latest Articles</h2>
            <MagneticButton
              variant="outline"
              className="rounded-full border-purple-300 text-purple-600 hover:bg-purple-50"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </MagneticButton>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card3D key={post.id}>
                <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg hover-lift transition-all duration-300 overflow-hidden h-full">
                  <div className="relative group">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="rounded-full bg-white/90 text-gray-800">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-gray-800 dark:text-gray-100 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-700 dark:text-gray-300 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="rounded-full text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <MagneticButton
                        variant="outline"
                        className="w-full rounded-xl border-purple-300 text-purple-600 hover:bg-purple-50"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </MagneticButton>
                    </Link>
                  </CardContent>
                </Card>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar Content */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Popular Tags */}
            <Card3D>
              <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                  <Tag className="w-5 h-5 mr-2" />
                  Tags phổ biến
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="rounded-full hover:scale-105 transition-transform cursor-pointer"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Card3D>

            {/* Newsletter Signup */}
            <Card3D>
              <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Cập nhật</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Nhận các bài viết và bản tin mới nhất đến email của bạn.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Your email address" className="rounded-xl" />
                  <MagneticButton className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    Subscribe
                  </MagneticButton>
                </div>
              </Card>
            </Card3D>

            {/* About Author */}
            <Card3D>
              <Card className="glassmorphism-card rounded-3xl border-0 shadow-lg p-6 text-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Author"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">HNH Dev</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Nhà phát triển phần mềm với hơn 5 năm kinh nghiệm trong việc tạo ra các giải pháp số mà có thể làm khác biệt.
                </p>
                <Link href="/about">
                  <MagneticButton
                    variant="outline"
                    className="rounded-xl border-purple-300 text-purple-600 hover:bg-purple-50"
                  >
                    Tìm hiểu thêm
                  </MagneticButton>
                </Link>
              </Card>
            </Card3D>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card3D className="glassmorphism-card rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Muốn làm việc cùng nhau?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Nếu bạn thích đọc bài viết của tôi, hãy thảo luận về cách chúng ta có thể hợp tác trên dự án tiếp theo của bạn.
            </p>
            <Link href="/contact">
              <MagneticButton
                size="lg"
                className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 shadow-lg hover:shadow-xl"
              >
                Liên hệ
                <ArrowRight className="w-5 h-5 ml-2" />
              </MagneticButton>
            </Link>
          </Card3D>
        </div>
      </section>

      <Footer />
    </div>
  )
}
