"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/components/providers/language-provider"
import { VideoCarousel } from "@/components/sections/VideoCarousel"

export default function GalleryPage() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const videoIds = [
    "V7jLrPJ7of4",
    "GVGOovo-Usk",
    "lLxrvGWY3vI",
    "IC5eykDEhBQ",
    "z-nm1sy18Ek",
  ]

  // Array con TODAS las imágenes del proyecto
  const allImages = [
    "/img/done/14 Perfect Swimming Pool Coping and Tile Ideas (1).jpg",
    "/img/done/area-de-parrilla-en-la-villa-junto-al-mar-un-gran-patio-con-una-parrilla-de-piedra-y-una-piedra-blanca-abierta (1).jpg",
    "/img/done/carreteras-y-caminos (2).jpg",
    "/img/done/casa-de-piso-de-madera-en-el-parque-qingdao-china (1).jpg",
    "/img/done/estructura-construida-en-la-playa-contra-el-cielo-en-un-dia-soleado (1).jpg",
    "/img/done/mujer-sentada-la-orilla-de-la-piscina (1).jpg",
    "/img/done/paseo-en-un-hermoso-jardin (1).jpg",
    "/img/done/piscina-junto-las-palmeras (1).jpg",
    "/img/done/un-pozo-de-fuego-con-un-pozo-del-fuego-en-el-fondo (1).jpg",
    "/img/done/una-elegante-zona-de-bar-al-aire-libre-con-taburetes-altos-un-mini-refrigerador-y-un-dosel-para-la-sombra (1) (1).jpg",
    "/img/done/vista-de-angulo-alto-de-las-piedras-en-el-campo (1).jpg",
    "/img/done/vista-exterior-del-edificio (1).jpg"
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
                  src="/img/1 (17).jpg"
                  alt="Golden Boy Stonework Mission"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
              </div>
              
              {/* Company Description */}
              <div className="w-1/2 text-left animate-fade-up-delay">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-primary-text mb-6 md:mb-8 leading-tight tracking-normal">
                  GOLDEN BOY STONEWORK
                </h1>

                <p className="text-base md:text-lg lg:text-xl font-serif font-light text-light-text leading-relaxed mb-6">
                  Our vision as a family business is to build spaces that the community recognizes as essential and beautiful, always promising the best prices and the highest quality.
                </p>

                <p className="text-base md:text-lg lg:text-xl font-serif font-light text-light-text leading-relaxed">
                  We use only premium, top-of-the-line materials and apply the most demanding quality standards in every project. Our commitment is to transform your outdoor spaces with artisanal excellence and exceptional durability
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Projects Title */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-orange mb-8 leading-tight animate-fade-up-delay">
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
                        ? "bg-orange"
                        : "bg-gold hover:bg-orange"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video Carousel Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <VideoCarousel videoIds={videoIds} />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xs md:text-sm font-serif font-light tracking-widest uppercase text-black mb-6 md:mb-8 animate-fade-up">
              {t("contact.subtitle")}
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal text-black mb-8 md:mb-12 leading-tight animate-fade-up-delay">
              {t("gallery.cta.title")}
            </h3>
            <p className="text-lg md:text-xl font-serif font-light text-black mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-up-delay">
              {t("gallery.cta.description")}
            </p>

            <a href="/contact" className="inline-block bg-orange text-black hover:bg-gold px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-light tracking-wide transition-all duration-300 animate-fade-up-delay">
              {t("gallery.cta.button")}
            </a>
          </div>
        </section>
      </main>
    </>
  )
} 