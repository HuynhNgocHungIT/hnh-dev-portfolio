import { Card3D } from "@/components/3d-card"

interface PageHeaderProps {
  title: string
  description: string
  gradient?: string
}

export function PageHeader({
  title,
  description,
  gradient = "from-purple-600 via-pink-600 to-blue-600",
}: PageHeaderProps) {
  return (
    <section className="px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto text-center">
        <Card3D className="glassmorphism-card rounded-3xl p-8 md:p-12">
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
          >
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{description}</p>
        </Card3D>
      </div>
    </section>
  )
}
