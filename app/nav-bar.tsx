"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrendingUp, Menu } from "lucide-react"
import { useState, useEffect } from "react"

interface NavBarProps {
  activePage?: string
}

export default function NavBar({ activePage }: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "faq", "contact", "about"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <TrendingUp className="h-6 w-6" />
          <span>FundedIn</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <button
            onClick={() => scrollToSection("home")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "home" ? "active-nav-link" : "text-muted-foreground"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "about" ? "active-nav-link" : "text-muted-foreground"
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "features" ? "active-nav-link" : "text-muted-foreground"
            }`}
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "faq" ? "active-nav-link" : "text-muted-foreground"
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "contact" ? "active-nav-link" : "text-muted-foreground"
            }`}
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/auth/login">
            <Button variant="ghost" size="sm" className="text-white hover:text-primary">
              Log in
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button size="sm" className="bg-white text-black hover:bg-gray-200">
              Sign up
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-secondary py-4">
          <nav className="container flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-sm font-medium transition-colors hover:text-primary px-2 py-1 text-left ${
                activeSection === "home" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-sm font-medium transition-colors hover:text-primary px-2 py-1 text-left ${
                activeSection === "about" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className={`text-sm font-medium transition-colors hover:text-primary px-2 py-1 text-left ${
                activeSection === "features" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className={`text-sm font-medium transition-colors hover:text-primary px-2 py-1 text-left ${
                activeSection === "faq" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm font-medium transition-colors hover:text-primary px-2 py-1 text-left ${
                activeSection === "contact" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
