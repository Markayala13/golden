"use client"

import { useState } from "react"
import { useLanguage } from "@/components/providers/language-provider"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface VideoCarouselProps {
  videoIds: string[]
}

export function VideoCarousel({ videoIds }: VideoCarouselProps) {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstVideo = currentIndex === 0
    const newIndex = isFirstVideo ? videoIds.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastVideo = currentIndex === videoIds.length - 1
    const newIndex = isLastVideo ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  if (!videoIds || videoIds.length === 0) {
    return null
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 md:mb-12 leading-tight text-center">
        {t("home.videos.title")}
      </h3>
      <div className="relative h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-xl bg-black">
        {videoIds.map((videoId, index) => (
          <div
            key={videoId}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 pointer-events-none"
            }`}
          >
            {index === currentIndex && (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1`}
                title={`YouTube video player ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            )}
          </div>
        ))}
      </div>
      {/* Desktop buttons */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 hidden md:block">
        <button
          onClick={goToPrevious}
          className="bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-md transition-all"
          aria-label="Previous video"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 hidden md:block">
        <button
          onClick={goToNext}
          className="bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-md transition-all"
          aria-label="Next video"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
       {/* Mobile buttons */}
      <div className="md:hidden flex justify-center gap-8 mt-4">
        <button
            onClick={goToPrevious}
            className="bg-gray-900/80 hover:bg-gray-900 text-white p-3 rounded-full shadow-md transition-all"
            aria-label="Previous video"
          >
            <ChevronLeft className="h-6 w-6" />
        </button>
        <button
            onClick={goToNext}
            className="bg-gray-900/80 hover:bg-gray-900 text-white p-3 rounded-full shadow-md transition-all"
            aria-label="Next video"
          >
            <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}