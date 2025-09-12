"use client"

import { useLanguage } from "@/components/providers/language-provider"
import Image from "next/image"

export default function OurServicesPage() {
  const { t } = useLanguage()

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
    }
  ]

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
      `}</style>
      
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal text-gray-900 mb-4 leading-tight tracking-normal animate-fade-up">
              {t("services.hero.title") || "Our Premium Services"}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-sans font-light max-w-2xl mx-auto animate-fade-up-delay">
              Explore our diverse range of services, where artistry meets functionality.
            </p>
          </div>
        </section>

        {/* ZIGZAG SERVICES */}
        <section className="py-12 md:py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="space-y-20 md:space-y-32">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`flex flex-row items-center gap-4 md:gap-16 ${
                    index % 2 === 1 ? 'flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="w-1/2 overflow-hidden animate-fade-up">
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
                  <div className="w-1/2 text-center animate-fade-up-delay">
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

        {/* Contact Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 md:mb-12 leading-tight animate-fade-up-delay">
              {t("services.cta.title")}
            </h3>
            <p className="text-lg md:text-xl font-light text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-up-delay">
              {t("services.cta.description")}
            </p>
            
            <a href="/contact" className="inline-block bg-gray-900 text-white hover:bg-gray-800 px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-light tracking-wide transition-all duration-300 animate-fade-up-delay">
              {t("services.cta.button")}
            </a>
          </div>
        </section>
      </main>
    </>
  )
}