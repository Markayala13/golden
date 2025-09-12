"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/components/providers/language-provider"
import { VideoCarousel } from "@/components/sections/VideoCarousel"

export default function GalleryPage() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const videoIds = [
    "LlozCzcYbk0",
    "W1HLW-tKfkw",
    "ATNDKGHHVcw",
    "0sapS9_YOD4",
    "IiJxE0VTicU",
    "nNbDtCwD2sQ",
  ]

  // Array con TODAS las imágenes del proyecto
  const allImages = [
    "/pic/CapturePOOL.PNG",
    "/pic/CaptureExterior Paving.PNG", 
    "/pic/CaptureHARDSCAPING.PNG",
    "/pic/CaptureBBQ ISLAND.PNG",
    "/pic/CaptureStone Veneer Fire Pit.PNG",
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
    "/pic/CaptureExterior Paving.PNG",
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
    "/PIC2/6161639059872361854.JPG.jpeg",
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
    "/PIC2/IMG_3922.JPEG"
  ]

  // Carousel automático - cambiar imagen cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [allImages.length])

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-up {
          animation: fadeInUp 0.6s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animate-fade-up-delay {
          animation: fadeInUp 0.6s ease-out forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animate-fade-up-delay-2 {
          animation: fadeInUp 0.6s ease-out forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>

      <main className="min-h-screen pt-20">
        {/* Hero Section - Company Mission */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-row items-center gap-8 md:gap-16">
              {/* Company Mission Image */}
              <div className="w-1/2 overflow-hidden animate-fade-up">
                <img 
                  src="/pic/Capture4.PNG" 
                  alt="Texas Pool & Pavers Mission"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
              </div>
              
              {/* Company Description */}
              <div className="w-1/2 text-left animate-fade-up-delay">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 md:mb-8 leading-tight tracking-tight">
                  TEXAS POOL<br />& PAVERS
                </h1>
                
                <p className="text-base md:text-lg lg:text-xl font-light text-gray-600 leading-relaxed mb-6">
                  {t("gallery.vision")}
                </p>
                
                <p className="text-base md:text-lg lg:text-xl font-light text-gray-600 leading-relaxed">
                  {t("gallery.commitment")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Projects Title */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight animate-fade-up-delay">
              {t("gallery.projects.title")}
            </h3>
            <p className="text-lg md:text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-up-delay-2">
              {t("gallery.projects.description")}
            </p>
          </div>
        </section>

        {/* Automatic Carousel */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden">
              {/* Main Carousel Container */}
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentImageIndex * (100 / 2)
                  }%)`,
                }}
              >
                {allImages.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-1/2 px-2">
                    <div className="overflow-hidden">
                      <img
                        src={image}
                        alt={`Proyecto ${index + 1}`}
                        className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {allImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-gray-900"
                        : "bg-gray-300 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video Carousel Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <VideoCarousel videoIds={videoIds} />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xs md:text-sm font-light tracking-widest uppercase text-gray-500 mb-6 md:mb-8 animate-fade-up">
              {t("contact.subtitle")}
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 md:mb-12 leading-tight animate-fade-up-delay">
              {t("gallery.cta.title")}
            </h3>
            <p className="text-lg md:text-xl font-light text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-up-delay">
              {t("gallery.cta.description")}
            </p>

            <a href="/contact" className="inline-block bg-gray-900 text-white hover:bg-gray-800 px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-light tracking-wide transition-all duration-300 animate-fade-up-delay">
              {t("gallery.cta.button")}
            </a>
          </div>
        </section>
      </main>
    </>
  )
} 