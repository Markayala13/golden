"use client"

import Image from "next/image"
import { useLanguage } from "@/components/providers/language-provider"

type Service =
  | "pools"
  | "paving"
  | "walls"
  | "hardscaping"
  | "bbq"
  | "firepits"
  | "patio"
  | "excavation"
  | "rebar"
  | "plumbing"
  | "gunite"
  | "plaster"
  | "coping_tile"
  | "pool_deck"
  | "water_feature"
  | "pavers"
  | "erosion_control"

interface ServiceItem {
  id: Service
  title: string
  subtitle: string
  image: string
}

export function Services() {
  const { t } = useLanguage()

  const services: ServiceItem[] = [
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

  return (
    <section id="services" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-black mb-4 leading-tight tracking-normal animate-fade-up">
            {t("services.hero.title") || "Our Premium Services"}
          </h2>
          <p className="text-lg md:text-xl text-black font-sans font-light max-w-2xl mx-auto animate-fade-up-delay">
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
                <h3 className="text-sm md:text-lg font-sans font-light text-black tracking-widest uppercase">
                  {service.title}
                </h3>

                <h4 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-normal text-black my-2 md:my-3 leading-tight">
                  {service.subtitle}
                </h4>

                <p className="text-xs sm:text-sm md:text-base font-sans text-black leading-relaxed max-w-md mx-auto">
                  {t(`services.${service.id}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
