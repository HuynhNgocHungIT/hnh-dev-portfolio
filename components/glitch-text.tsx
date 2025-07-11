"use client"

import { useState, useEffect } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"

  const triggerGlitch = () => {
    if (isGlitching) return

    setIsGlitching(true)
    let iterations = 0
    const maxIterations = 10

    const glitchInterval = setInterval(() => {
      setGlitchText(
        text
          .split("")
          .map((char, index) => {
            if (index < iterations) return text[index]
            return glitchChars[Math.floor(Math.random() * glitchChars.length)]
          })
          .join(""),
      )

      iterations += 1

      if (iterations >= maxIterations) {
        clearInterval(glitchInterval)
        setGlitchText(text)
        setIsGlitching(false)
      }
    }, 50)
  }

  useEffect(() => {
    const randomGlitch = setInterval(() => {
      if (Math.random() < 0.1) {
        triggerGlitch()
      }
    }, 3000)

    return () => clearInterval(randomGlitch)
  }, [])

  return (
    <span
      className={`${className} cursor-pointer select-none`}
      onClick={triggerGlitch}
      style={{
        textShadow: isGlitching ? "2px 0 #ff0000, -2px 0 #00ff00, 0 2px #0000ff" : "none",
      }}
    >
      {glitchText}
    </span>
  )
}
