"use client"

import { useLanguage } from "@/components/providers/language-provider"
import Image from "next/image"
import Head from "next/head"

export default function OurServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      id: "pools",
      title: "CUSTOM",
      subtitle: "POOLS",
      image: "/img/1 (1).jpg",
    },
    {
      id: "paving",
      title: "PAVER",
      subtitle: "DRIVEWAYS",
      image: "/img/1 (20).jpg",
    },
    {
      id: "walls",
      title: "RETAINING",
      subtitle: "WALLS",
      image: "/img/1 (7).jpg",
    },
    {
      id: "hardscaping",
      title: "OUTDOOR",
      subtitle: "HARDSCAPING",
      image: "/img/1 (6).jpg",
    },
    {
      id: "bbq",
      title: "BBQ",
      subtitle: "ISLANDS",
      image: "/img/1 (8).jpg",
    },
    {
      id: "firepits",
      title: "STONE",
      subtitle: "FIRE PITS",
      image: "/img/1 (9).jpg",
    },
    {
      id: "patio",
      title: "COVERED",
      subtitle: "PATIOS",
      image: "/img/20250913_1928_Elegant Texan Outdoor Patio_simple_compose_01k52sy5x1f04sgqxdaayzqrm7.jpg",
    },
    {
      id: "excavation",
      title: "",
      subtitle: "EXCAVATION",
      image: "/img/1 (11).jpg",
    },
    {
      id: "rebar",
      title: "FORMS",
      subtitle: "REBAR",
      image: "/img/1 (12).jpg",
    },
    {
      id: "plumbing",
      title: "",
      subtitle: "PLUMBING",
      image: "/img/1 (13).jpg",
    },
    {
      id: "gunite",
      title: "",
      subtitle: "GUNITE",
      image: "/img/Capture genuite.PNG",
    },
    {
      id: "plaster",
      title: "",
      subtitle: "PLASTER",
      image: "/img/plaster.PNG",
    },
    {
      id: "coping_tile",
      title: "COPING",
      subtitle: "& TILE",
      image: "/img/1 (15).jpg",
    },
    {
      id: "pool_deck",
      title: "POOL",
      subtitle: "DECK",
      image: "/img/1 (18).jpg",
    },
    {
      id: "water_feature",
      title: "WATER",
      subtitle: "FEATURE",
      image: "/img/1 (17).jpg",
    },
    {
      id: "pavers",
      title: "CUSTOM",
      subtitle: "PAVERS",
      image: "/img/1 (3).jpg",
    },
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal text-primary-text mb-4 leading-tight tracking-normal animate-fade-up">
              {t("services.hero.title") || "Our Premium Services"}
            </h1>
            <p className="text-lg md:text-xl text-light-text font-serif font-light max-w-2xl mx-auto animate-fade-up-delay">
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
                    <h3 className="text-sm md:text-lg font-serif font-light text-light-text tracking-widest uppercase">
                      {service.title}
                    </h3>
                    
                    <h4 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-normal text-primary-text my-2 md:my-3 leading-tight">
                      {service.subtitle}
                    </h4>
                    
                    <p className="text-xs sm:text-sm md:text-base font-serif text-light-text leading-relaxed max-w-md mx-auto">
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
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-primary-text mb-8 md:mb-12 leading-tight animate-fade-up-delay">
              {t("services.cta.title")}
            </h3>
            <p className="text-lg md:text-xl font-serif font-light text-light-text mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-up-delay">
              {t("services.cta.description")}
            </p>
            
            <a href="/contact" className="inline-block bg-orange text-black hover:bg-gold hover:text-black px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-light tracking-wide transition-all duration-300 animate-fade-up-delay">
              {t("services.cta.button")}
            </a>
          </div>
        </section>
      </main>
    </>
  )
}