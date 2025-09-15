"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000) // Show after 1 second

    return () => clearTimeout(timer)
  }, [])

  const phoneNumber = "14694786051" // (469) 478-6051 in international format
  const message = "Howdy! 🤠 I'm interested in learning more about your premium pool construction and stonework services. Could y'all help me transform my backyard into something special?"

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const handleClick = () => {
    window.open(whatsappUrl, '_blank')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Contact us on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6" />

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Chat with us on WhatsApp!
          <div className="absolute top-full right-4 border-4 border-transparent border-t-black"></div>
        </div>

        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange rounded-full animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange rounded-full"></div>
      </button>
    </div>
  )
}