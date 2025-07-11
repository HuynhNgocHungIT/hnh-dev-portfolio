import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { ScrollProgress } from "@/components/scroll-progress"
import { ParticleBackground } from "@/components/particle-background"
import { FloatingNav } from "@/components/floating-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HNH Dev Portfolio - Creative Software Engineer",
  description:
    "Portfolio of a creative software engineer specializing in modern web applications and innovative digital solutions.",
  keywords: ["portfolio", "software engineer", "web developer", "react", "next.js", "typescript"],
  authors: [{ name: "HNH Dev" }],
  creator: "HNH Dev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hnh-dev-portfolio.vercel.app",
    title: "HNH Dev Portfolio - Creative Software Engineer",
    description:
      "Portfolio of a creative software engineer specializing in modern web applications and innovative digital solutions.",
    siteName: "HNH Dev Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "HNH Dev Portfolio - Creative Software Engineer",
    description:
      "Portfolio of a creative software engineer specializing in modern web applications and innovative digital solutions.",
    creator: "@hnhdev",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 transition-colors duration-300">
            <ParticleBackground />
            <ScrollProgress />
            <Navigation />
            <FloatingNav />
            <main className="relative z-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
