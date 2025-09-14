"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/components/providers/language-provider"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/our-services", label: t("nav.services") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-t-2 border-gold ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logos/logobg.png"
              alt="GOLDEN BOY STONEWORK"
              width={120}
              height={120}
              className="h-16 md:h-20 w-auto"
            />
            <span className="text-xl font-bold text-orange">
              GOLDEN BOY STONEWORK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-sm font-normal text-gray tracking-wider uppercase transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-1 bg-black rounded-lg p-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage("en")}
              className={`p-1 rounded transition-all duration-200 ${
                language === "en"
                  ? "bg-orange text-white shadow-md"
                  : "text-white hover:bg-gold hover:text-black"
              }`}
            >
              <img src="/flags/us.png" alt="English" className="w-5 h-3 object-cover rounded" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage("es")}
              className={`p-1 rounded transition-all duration-200 ${
                language === "es"
                  ? "bg-orange text-white shadow-md"
                  : "text-white hover:bg-gold hover:text-black"
              }`}
            >
              <img src="/flags/mx.png" alt="Español" className="w-5 h-3 object-cover rounded" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray hover:text-gold"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-gold"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray font-sans text-base font-normal tracking-wider uppercase text-center py-2 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gold">
                  <div className="flex items-center justify-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setLanguage("en")
                        setIsOpen(false)
                      }}
                      className={`p-2 rounded transition-all ${
                        language === "en"
                          ? "bg-orange text-white shadow-md"
                          : "text-white hover:bg-gold hover:text-black"
                      }`}
                    >
                      <img src="/flags/us.png" alt="English" className="w-6 h-4 object-cover rounded" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setLanguage("es")
                        setIsOpen(false)
                      }}
                      className={`p-2 rounded transition-all ${
                        language === "es"
                          ? "bg-orange text-white shadow-md"
                          : "text-white hover:bg-gold hover:text-black"
                      }`}
                    >
                      <img src="/flags/mx.png" alt="Espa\\xf1ol" className="w-6 h-4 object-cover rounded" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
