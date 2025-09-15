"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/providers/language-provider"
import { Services } from "@/components/sections/Services"
import { FloatingChat } from "@/components/ui/floating-chat"
import { Hammer, Home, Sparkles, Award, Heart, ChevronLeft, ChevronRight, Play } from "lucide-react"

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
                <source src="/videos/video hero/0913.mp4" type="video/mp4" />
              </video>
              {/* Mobile video */}
              <video
                className="block md:hidden w-full h-[60vh] object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/video hero/0914.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Buttons Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col gap-4 items-center justify-end pb-12 md:flex-row md:items-center md:justify-center md:pb-0">
              <a
                href="/our-services"
                className="bg-black border-2 border-gold text-white hover:bg-gold hover:text-white px-8 py-2 w-64 text-center text-sm font-sans font-normal tracking-wider uppercase transition-all duration-300"
              >
                {t("hero.services")}
              </a>
              <a
                href="/contact"
                className="bg-orange text-white hover:bg-gold px-8 py-2 w-64 text-center text-sm font-sans font-normal tracking-wider uppercase transition-all duration-300"
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
              <h1 className="pt-16 pb-8 text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-primary-text leading-tight tracking-normal animate-fade-up">
                Turn your backyard into where memories are made.
              </h1>
              <p className="text-lg md:text-xl text-light-text font-sans font-light max-w-2xl mx-auto animate-fade-up-delay mt-4 mb-12">
                At <span className="text-accent-text">Golden Boy Stonework</span>, we create extraordinary Texas escapes with custom pools, stone patios, and gathering spaces built to last.
              </p>
              <p className="text-lg md:text-xl text-light-text font-sans font-light max-w-2xl mx-auto animate-fade-up-delay mt-4 mb-12">
                Your backyard should feel like freedom—a sanctuary of stone, water, and light.
              </p>
              <div className="mt-12 w-[95%] mx-auto aspect-square overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/img/Backyard Pool and Patio Ideas - AUNONNO.jpeg"
                  alt="Beautiful backyard pool and patio design"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Desktop/Tablet: text left, video space right */}
            <div className="hidden md:flex flex-row items-center gap-8">
              <div className="w-1/2 text-left animate-fade-up opacity-0">
                <h1 className="pt-16 pb-8 text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-primary-text leading-tight tracking-normal">
                  Turn your backyard into where memories are made.
                </h1>
                <p className="text-lg md:text-xl text-light-text font-sans font-light mt-4 mb-12">
                  At <span className="text-accent-text">Golden Boy Stonework</span>, we create extraordinary Texas escapes with custom pools, stone patios, and gathering spaces built to last.
                </p>
                <p className="text-lg md:text-xl text-light-text font-sans font-light mt-4 mb-12">
                  Your backyard should feel like freedom—a sanctuary of stone, water, and light.
                </p>
              </div>
              <div className="w-1/2 aspect-square overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/img/Backyard Pool and Patio Ideas - AUNONNO.jpeg"
                  alt="Beautiful backyard pool and patio design"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Premium Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="pt-16 pb-8 text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-primary-text leading-tight tracking-normal animate-fade-up mb-12">
                Because Your Home Deserves the Best
              </h2>
              <p className="text-lg md:text-xl text-light-text font-sans font-light max-w-2xl mx-auto animate-fade-up-delay mt-4 mb-12">
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
              <h2 className="pt-16 pb-8 text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-primary-text leading-tight tracking-normal animate-fade-up mb-12">
                Stories From Homeowners Who Chose <span className="text-accent-text">Golden Boy Stonework</span>
              </h2>
            </div>

            <TestimonialsCarousel />
          </div>
        </section>

        {/* Vision to Reality Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="pt-16 pb-8 text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-primary-text leading-tight tracking-normal animate-fade-up mb-12">
              From Vision to Reality
            </h2>
            <p className="text-lg md:text-xl text-light-text font-sans font-light max-w-2xl mx-auto animate-fade-up-delay mb-12">
              Every project tells a story. Watch how we bring stone, water, and fire together to create backyards that inspire and endure.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/eOVdVbcqT4o?si=YOUR_EMBED_ID"
                  title="From Vision to Reality - Golden Boy Stonework"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="aspect-video w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FloatingChat />
    </>
  )
}

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const testimonials = [
    {
      quote: "From the first design meeting to the final touch, they treated our project like their own home. We finally have the luxury space we always dreamed of.",
      name: "Ricardo",
      image: "/reviws/ricardo.jpg"
    },
    {
      quote: "Our backyard feels like a private retreat now. The stonework and pool design are stunning, and the team made everything so smooth and stress-free.",
      name: "Sarah M., Austin",
      image: "/reviws/sara.png"
    },
    {
      quote: "Golden Boy Stonework completely transformed our patio. The fire pit became the heart of our family gatherings, and the quality is just unbeatable.",
      name: "James & Laura, Dallas",
      image: "/reviws/james.jpg"
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
                <blockquote className="text-xl md:text-2xl font-serif text-black leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="mt-4 text-lg font-serif text-black font-light">
                  — {testimonial.name}
                </cite>
              </div>
              <div className="flex-shrink-0">
                <div className="w-28 h-28 md:w-32 md:h-32 overflow-hidden flex items-center justify-center" style={{ borderRadius: '50%' }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gold shadow-lg rounded-full p-2 hover:bg-orange transition-colors duration-200">
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gold shadow-lg rounded-full p-2 hover:bg-orange transition-colors duration-200">
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === current ? 'bg-black' : 'bg-gray-800'
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 md:gap-16" ref={blocksRef}>
      <div className="text-center opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg p-6">
        <div className="w-20 h-20 mx-auto mb-6 bg-gold rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:rotate-12">
          <Hammer className="w-10 h-10 text-white" />
        </div>
        <h3 className="mt-4 text-xl font-serif font-normal text-black mb-3 tracking-wide">
          Timeless Craftsmanship
        </h3>
        <p className="text-sm font-serif text-black leading-relaxed mb-12">
          Every build is engineered to endure, with precision in every cut and joint.
        </p>
      </div>

      <div className="text-center opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg p-6">
        <div className="w-20 h-20 mx-auto mb-6 bg-gold rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:rotate-12">
          <Home className="w-10 h-10 text-white" />
        </div>
        <h3 className="mt-4 text-xl font-serif font-normal text-black mb-3 tracking-wide">
          Custom Outdoor Living
        </h3>
        <p className="text-sm font-serif text-black leading-relaxed mb-12">
          Spaces shaped to your vision—never cookie-cutter, always personal.
        </p>
      </div>

      <div className="text-center opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg p-6">
        <div className="w-20 h-20 mx-auto mb-6 bg-gold rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:rotate-12">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <h3 className="mt-4 text-xl font-serif font-normal text-black mb-3 tracking-wide">
          Luxury in Every Detail
        </h3>
        <p className="text-sm font-serif text-black leading-relaxed mb-12">
          From pools to fire pits and cabanas, refinement drives every decision.
        </p>
      </div>

      <div className="text-center opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg p-6">
        <div className="w-20 h-20 mx-auto mb-6 bg-gold rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:rotate-12">
          <Award className="w-10 h-10 text-white" />
        </div>
        <h3 className="mt-4 text-xl font-serif font-normal text-black mb-3 tracking-wide">
          Trusted in Texas
        </h3>
        <p className="text-sm font-serif text-black leading-relaxed mb-12">
          A seamless experience focused on quality, value, and honest communication.
        </p>
      </div>

      <div className="text-center opacity-0 transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg p-6">
        <div className="w-20 h-20 mx-auto mb-6 bg-gold rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:rotate-12">
          <Heart className="w-10 h-10 text-white" />
        </div>
        <h3 className="mt-4 text-xl font-serif font-normal text-black mb-3 tracking-wide">
          A Personal Sanctuary
        </h3>
        <p className="text-sm font-serif text-black leading-relaxed mb-12">
          We turn empty yards into bénéf retreats where memories are made.
        </p>
      </div>
    </div>
  )
}
