"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/providers/language-provider"
import { Services } from "@/components/sections/Services"

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
      </div>
    </>
  )
}
