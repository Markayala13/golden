"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/providers/language-provider"

export default function HomePage() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const services = [
    {
      id: "pools",
      title: "CUSTOM",
      subtitle: "POOLS",
      image: "/optimized-services/CUSTOMEPOOLS.webp",
    },
    {
      id: "paving",
      title: "PAVER",
      subtitle: "DRIVEWAYS",
      image: "/optimized-services/PAVERDRIVEWAYS.webp",
    },
    {
      id: "walls",
      title: "RETAINING",
      subtitle: "WALLS",
      image: "/optimized-services/RETAININGWALLS.webp",
    },
    {
      id: "hardscaping",
      title: "OUTDOOR",
      subtitle: "HARDSCAPING",
      image: "/optimized-services/OUTDOORHARDSCAIPING.webp",
    },
    {
      id: "bbq",
      title: "BBQ",
      subtitle: "ISLANDS",
      image: "/optimized-services/BBQISLAND.webp",
    },
    {
      id: "firepits",
      title: "STONE",
      subtitle: "FIRE PITS",
      image: "/optimized-services/STONEFIREPITS.webp",
    },
    {
      id: "patio",
      title: "COVERED",
      subtitle: "PATIOS",
      image: "/optimized-services/COVERPATIOS.webp",
    },
    {
      id: "excavation",
      title: "EXCAVATION",
      subtitle: "",
      image: "/optimized-services/excavation.webp",
    },
    {
      id: "rebar",
      title: "FORMS",
      subtitle: "REBAR",
      image: "/optimized-services/formsAndRebar.webp",
    },
    {
      id: "plumbing",
      title: "PLUMBING",
      subtitle: "",
      image: "/optimized-services/plumbing.webp",
    },
    {
      id: "gunite",
      title: "GUNITE",
      subtitle: "",
      image: "/optimized-services/genite.webp",
    },
    {
      id: "plaster",
      title: "PLASTER",
      subtitle: "",
      image: "/optimized-services/plaster.webp",
    },
    {
      id: "coping_tile",
      title: "COPING",
      subtitle: "& TILE",
      image: "/optimized-services/coping&title.webp",
    },
    {
      id: "pool_deck",
      title: "POOL",
      subtitle: "DECK",
      image: "/optimized-services/poolDeck.webp",
    },
    {
      id: "water_feature",
      title: "WATER",
      subtitle: "FEATURE",
      image: "/optimized-services/TranquiPoolOasis.webp",
    },
    {
      id: "pavers",
      title: "CUSTOM",
      subtitle: "PAVERS",
      image: "/optimized-services/CUSTOMEPAVERS.webp",
    },
    {
      id: "erosion_control",
      title: "EROSION",
      subtitle: "CONTROL",
      image: "/optimized-services/EROSIONCONTROL.webp",
    },
  ]

  // Array con las OTRAS imágenes para el carousel (SIN NINGUNA de las imágenes de servicios)
  const carouselImages = [
    "/pic/CapturePOOL.PNG",
    "/pic/CaptureRoof Patio Cover.PNG",
    "/pic/Capture2.PNG",
    "/pic/Capture3.PNG",
    "/pic/Capture4.PNG",
    "/pic/Capture5.PNG",
    "/pic/Capture6.PNG",
    "/pic/Capture7.PNG",
    "/pic/Capture9.PNG",
    "/pic/Capture10.PNG",
    "/pic/Capture11.PNG",
    "/pic/Capture12.PNG",
    "/pic/Capture13.PNG",
    "/pic/Capture14.PNG",
    "/pic/Capture15.PNG",
    "/pic/Capture16.PNG",
    "/pic/Capture17.PNG",
    "/pic/CaptureCHI.PNG",
    "/pic/CapturePutting green installation.PNG",
    "/pic/pool.PNG",
    "/PIC2/1149300343803596628.JPG.jpeg",
    "/PIC2/1279236777416248543.JPG.jpeg",
    "/PIC2/1461283888647072929.JPG.jpeg",
    "/PIC2/1530805180661866338.JPG.jpeg",
    "/PIC2/2968672153266996369.jpeg",
    "/PIC2/369636544481623943.JPG.jpeg",
    "/PIC2/3783280118891404743.jpeg",
    "/PIC2/4670276120140729302.jpeg",
    "/PIC2/5618633722740195667.JPG.jpeg",
    "/PIC2/6161639059872361854.JPG (1).jpeg",
    "PIC2/6161639059872361854.JPG.jpeg",
    "/PIC2/6782619962157245086.JPG (1).jpeg",
    "/PIC2/698484005983074106.jpeg",
    "/PIC2/7711364407365262370.JPG.jpeg",
    "/PIC2/8527807503362877378.JPG.jpeg",
    "/PIC2/BEVERLY.png",
    "/PIC2/IMG_0012.jpeg",
    "/PIC2/IMG_1704 (1).jpeg",
    "/PIC2/IMG_2049.JPEG",
    "/PIC2/IMG_3245.JPG.jpeg",
    "/PIC2/IMG_3246.JPG (1).jpeg",
    "/PIC2/IMG_3247.JPG.jpeg",
    "/PIC2/IMG_3922.JPEG",
  ]

  // Carousel automático MÁS RÁPIDO Y SUAVE - cambiar imagen cada 1.5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      )
    }, 1500) // MÁS RÁPIDO: 1.5 segundos

    return () => clearInterval(interval)
  }, [carouselImages.length])

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
                className="hidden md:block w-full h-auto max-h-[95vh] object-contain"
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
                href="/#services"
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

        {/* ZIGZAG SERVICES */}
        <section id="services" className="py-12 md:py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-gray-900 mb-4 leading-tight tracking-normal animate-fade-up">
                {t("services.hero.title") || "Our Premium Services"}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-sans font-light max-w-2xl mx-auto animate-fade-up-delay">
                Explore our diverse range of services, where artistry meets
                functionality.
              </p>
            </div>
            <div className="space-y-20 md:space-y-32">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`flex flex-row items-center gap-4 md:gap-16 ${
                    index % 2 === 1 ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="w-1/2 overflow-hidden animate-fade-up opacity-0">
                    <Image
                      src={service.image}
                      alt={`${service.title} ${service.subtitle}`}
                      width={800}
                      height={600}
                      className="w-full h-auto max-h-[500px] object-cover transition-all duration-500 hover:scale-105 brightness-110 contrast-125"
                      unoptimized={true}
                    />
                  </div>

                  {/* Content */}
                  <div className="w-1/2 text-center animate-fade-up [animation-delay:0.2s] opacity-0">
                    <h3 className="text-sm md:text-lg font-sans font-light text-gray-500 tracking-widest uppercase">
                      {service.title}
                    </h3>

                    <h4 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-normal text-gray-900 my-2 md:my-3 leading-tight">
                      {service.subtitle}
                    </h4>

                    <p className="text-xs sm:text-sm md:text-base font-sans text-gray-600 leading-relaxed max-w-md mx-auto">
                      {t(`services.${service.id}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 md:py-32 bg-gray-100">
          <div className="container mx-auto px-4">
            {/* OUR PROJECTS - Patio Image + Fast Carousel */}
            <div className="flex flex-row items-center gap-8 md:gap-16 mb-20 md:mb-32">
              {/* Company Description with Patio - Left Side */}
              <div className="w-1/2 text-left animate-slide-left opacity-0">
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-gray-900 mb-6 leading-tight tracking-tight">
                  OUR<br />PROJECTS
                </h3>

                <p className="text-base md:text-lg font-sans font-light text-gray-600 leading-relaxed">
                  At Texas Pavers & Patios, we specialize in professional pool excavation that sets the foundation for your perfect backyard escape. Whether it's a custom gunite masterpiece or a sleek fiberglass installation, we handle every step — from the first scoop to the final splash.
                </p>
              </div>

              {/* Fast Carousel - Right Side */}
              <div className="w-1/2 overflow-hidden animate-slide-right opacity-0">
                <div className="relative">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${currentImageIndex * 100}%)`,
                    }}
                  >
                    {carouselImages.map((image, index) => (
                      <div key={index} className="flex-shrink-0 w-full px-1">
                        <img
                          src={image}
                          alt={`Proyecto ${index + 1}`}
                          className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-gray-900 mb-8 leading-tight animate-fade-up [animation-delay:0.4s] opacity-0">
              {t("cta.title")}
            </h3>
            <p className="text-lg md:text-xl font-sans font-light text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up [animation-delay:0.4s] opacity-0">
              {t("cta.subtitle")}
            </p>

            <a
              href="/contact"
              className="inline-block bg-gray-900 text-white hover:bg-gray-800 px-10 py-3 text-base font-sans font-normal tracking-wider uppercase transition-all duration-300 animate-fade-up [animation-delay:0.4s] opacity-0"
            >
              {t("cta.button")}
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
