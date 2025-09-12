"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/providers/language-provider"
import { Services } from "@/components/sections/Services"
import { Hammer, Home, Sparkles, Award, Heart, ChevronLeft, ChevronRight } from "lucide-react"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="h-auto md:h-screen overflow-hidden flex flex-col items-center justify-center bg-black text-white pt-16 md:pt-0">
          {/* Title */}
          <div className="text-center"></div>

          {/* Video Container */}
          <div className="w-full relative">
            <div className="overflow-hidden">
              {/* Desktop/Tablet video */}
              <video
                className="hidden md:block w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/desktop.mp4" type="video/mp4" />
              </video>
              {/* Mobile video */}
              <video
                className="block md:hidden w-full h-[60vh] object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/mobile.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Buttons Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col gap-4 items-center justify-end pb-12 md:flex-row md:items-center md:justify-center md:pb-0">
              <a
                href="/our-services"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-2 w-64 text-center text-sm font-sans font-normal tracking-wider uppercase transition-all duration-300"
              >
                {t("hero.services")}
              </a>
              <a
                href="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-2 w-64 text-center text-sm font-sans font-normal tracking-wider uppercase transition-all duration-300"
              >
                {t("hero.contact")}
              </a>
            </div>
          </div>
        </section>

        {/* After Video Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Mobile: centered */}
            <div className="text-center md:hidden">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-gray-900 leading-tight tracking-normal animate-fade-up">
                Turn your backyard into the place where memories are made, not forgotten.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-serif font-light max-w-2xl mx-auto animate-fade-up-delay mt-4">
                In Texas, the backyard is more than just space — it’s where life happens. At Golden Boy Stonework, we turn ordinary yards into extraordinary escapes. From custom pools that sparkle under the sun, to stone patios, firepits, and cabanas that bring people together—every project is built to inspire, to gather, and to last.
              </p>
              <p className="text-lg md:text-xl text-gray-600 font-serif font-light max-w-2xl mx-auto animate-fade-up-delay mt-4">
                Your backyard should feel like freedom, a sanctuary crafted from stone, water, and light. With Golden Boy Stonework, outdoor living isn’t just design—it’s a lifestyle.
              </p>
              <div className="mt-8 max-w-xs mx-auto aspect-square bg-gray-200 flex items-center justify-center">
                {/* Placeholder for 1:1 video on mobile */}
                <p className="text-gray-500">Video Placeholder</p>
              </div>
            </div>
            {/* Desktop/Tablet: text left, video space right */}
            <div className="hidden md:flex flex-row items-center gap-8">
              <div className="w-1/2 text-left animate-fade-up opacity-0">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-gray-900 leading-tight tracking-normal">
                  Turn your backyard into the place where memories are made, not forgotten.
                </h1>
                <p className="text-lg md:text-xl text-gray-600 font-serif font-light mt-4">
                  In Texas, the backyard is more than just space — it’s where life happens. At Golden Boy Stonework, we turn ordinary yards into extraordinary escapes. From custom pools that sparkle under the sun, to stone patios, firepits, and cabanas that bring people together—every project is built to inspire, to gather, and to last.
                </p>
                <p className="text-lg md:text-xl text-gray-600 font-serif font-light mt-4">
                  Your backyard should feel like freedom, a sanctuary crafted from stone, water, and light. With Golden Boy Stonework, outdoor living isn’t just design—it’s a lifestyle.
                </p>
              </div>
              <div className="w-1/2 aspect-square bg-gray-200 flex items-center justify-center">
                {/* Placeholder for 1:1 video */}
                <p className="text-gray-500">Video Placeholder</p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-gray-900 leading-tight tracking-normal animate-fade-up">
                Because Your Home Deserves the Best
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-sans font-light max-w-2xl mx-auto animate-fade-up-delay mt-4">
                Experience the pinnacle of craftsmanship and design, where every detail is crafted to perfection, creating spaces that inspire and endure.
              </p>
            </div>

            <PremiumBlocks />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-gray-900 leading-tight tracking-normal animate-fade-up">
                Stories From Homeowners Who Chose Golden Boy Stonework
              </h2>
            </div>

            <TestimonialsCarousel />
          </div>
        </section>
      </div>
    </>
  )
}

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const testimonials = [
    {
      quote: "Our backyard feels like a private retreat now. The stonework and pool design are stunning, and the team made everything so smooth and stress-free.",
      name: "Sarah M.",
      image: "/placeholder/testimonial1.jpg" // Placeholder for b&w photo
    },
    {
      quote: "Golden Boy Stonework completely transformed our patio. The fire pit became the heart of our family gatherings, and the quality is just unbeatable.",
      name: "James & Laura",
      image: "/placeholder/testimonial2.jpg"
    },
    {
      quote: "From the first design meeting to the final touch, they treated our project like their own home. We finally have the luxury space we always dreamed of.",
      name: "Ricardo G.",
      image: "/placeholder/testimonial3.jpg"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <blockquote className="text-xl md:text-2xl font-serif text-gray-900 leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-lg font-sans text-gray-600 font-light">
                  — {testimonial.name}
                </cite>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center" style={{ filter: 'grayscale(100%)' }}>
                  {/* Placeholder for b&w editorial photo */}
                  <span className="text-gray-500 text-sm">Photo</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors duration-200">
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors duration-200">
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === current ? 'bg-gray-900' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function PremiumBlocks() {
  const blocksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (blocksRef.current) {
      const blocks = blocksRef.current.children
      Array.from(blocks).forEach((block) => {
        observer.observe(block)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-12" ref={blocksRef}>
      <div className="text-center opacity-0 transition-opacity duration-700 ease-out">
        <div className="w-16 h-16 mx-auto mb-4 bg-gold-100 rounded-full flex items-center justify-center">
          <Hammer className="w-8 h-8 text-gold-600" />
        </div>
        <h3 className="text-xl font-serif font-normal text-gray-900 mb-2">
          Timeless Craftsmanship
        </h3>
        <p className="text-sm font-sans text-gray-600 leading-relaxed">
          Every build is engineered to endure, with precision in every cut and joint.
        </p>
      </div>

      <div className="text-center opacity-0 transition-opacity duration-700 ease-out">
        <div className="w-16 h-16 mx-auto mb-4 bg-gold-100 rounded-full flex items-center justify-center">
          <Home className="w-8 h-8 text-gold-600" />
        </div>
        <h3 className="text-xl font-serif font-normal text-gray-900 mb-2">
          Custom Outdoor Living
        </h3>
        <p className="text-sm font-sans text-gray-600 leading-relaxed">
          Spaces shaped to your vision—never cookie-cutter, always personal.
        </p>
      </div>

      <div className="text-center opacity-0 transition-opacity duration-700 ease-out">
        <div className="w-16 h-16 mx-auto mb-4 bg-gold-100 rounded-full flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-gold-600" />
        </div>
        <h3 className="text-xl font-serif font-normal text-gray-900 mb-2">
          Luxury in Every Detail
        </h3>
        <p className="text-sm font-sans text-gray-600 leading-relaxed">
          From pools to fire pits and cabanas, refinement drives every decision.
        </p>
      </div>

      <div className="text-center opacity-0 transition-opacity duration-700 ease-out">
        <div className="w-16 h-16 mx-auto mb-4 bg-gold-100 rounded-full flex items-center justify-center">
          <Award className="w-8 h-8 text-gold-600" />
        </div>
        <h3 className="text-xl font-serif font-normal text-gray-900 mb-2">
          Trusted in Texas
        </h3>
        <p className="text-sm font-sans text-gray-600 leading-relaxed">
          A seamless experience focused on quality, value, and honest communication.
        </p>
      </div>

      <div className="text-center opacity-0 transition-opacity duration-700 ease-out">
        <div className="w-16 h-16 mx-auto mb-4 bg-gold-100 rounded-full flex items-center justify-center">
          <Heart className="w-8 h-8 text-gold-600" />
        </div>
        <h3 className="text-xl font-serif font-normal text-gray-900 mb-2">
          A Personal Sanctuary
        </h3>
        <p className="text-sm font-sans text-gray-600 leading-relaxed">
          We turn empty yards into retreats where memories are made.
        </p>
      </div>
    </div>
  )
}
