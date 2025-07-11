import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/projects", label: "Projects" },
      { href: "/services", label: "Services" },
    ],
    resources: [
      { href: "/blog", label: "Blog" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
  }

  return (
    <footer className="relative z-10 px-6 py-12 border-t border-purple-100 dark:border-purple-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              hnh-dev-portfolio
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Creating beautiful, functional, and user-centered digital experiences through innovative code and creative
              problem-solving.
            </p>
            <div className="flex space-x-4">
              <MagneticButton
                variant="outline"
                size="icon"
                className="rounded-full border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 bg-transparent"
              >
                <Github className="w-5 h-5" />
              </MagneticButton>
              <MagneticButton
                variant="outline"
                size="icon"
                className="rounded-full border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 bg-transparent"
              >
                <Linkedin className="w-5 h-5" />
              </MagneticButton>
              <MagneticButton
                variant="outline"
                size="icon"
                className="rounded-full border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 bg-transparent"
              >
                <Twitter className="w-5 h-5" />
              </MagneticButton>
              <MagneticButton
                variant="outline"
                size="icon"
                className="rounded-full border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 bg-transparent"
              >
                <Mail className="w-5 h-5" />
              </MagneticButton>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-100 dark:border-purple-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} hnh-dev-portfolio. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
