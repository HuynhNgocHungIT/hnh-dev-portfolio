"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"

interface Skill {
  name: string
  icon: string
  color: string
}

interface SkillOrbitProps {
  skills: Skill[]
  radius?: number
  speed?: number
}

export function SkillOrbit({ skills, radius = 150, speed = 0.5 }: SkillOrbitProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const skillElements = container.querySelectorAll(".skill-item")
    let angle = 0

    const animate = () => {
      skillElements.forEach((element, index) => {
        const skillAngle = angle + index * (360 / skills.length) * (Math.PI / 180)
        const x = Math.cos(skillAngle) * radius
        const y = Math.sin(skillAngle) * radius
        ;(element as HTMLElement).style.transform = `translate(${x}px, ${y}px)`
      })

      angle += speed * 0.01
      requestAnimationFrame(animate)
    }

    animate()
  }, [skills, radius, speed])

  return (
    <div ref={containerRef} className="relative w-96 h-96 mx-auto flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-300/30 animate-spin-slow"></div>
      {skills.map((skill, index) => (
        <div key={skill.name} className="skill-item absolute transition-transform duration-100">
          <Badge
            variant="secondary"
            className={`rounded-full px-4 py-2 ${skill.color} shadow-lg hover:scale-110 transition-transform cursor-pointer`}
          >
            <span className="mr-2">{skill.icon}</span>
            {skill.name}
          </Badge>
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
          <span className="text-white font-bold text-lg">ME</span>
        </div>
      </div>
    </div>
  )
}
