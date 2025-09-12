"use client"

import { useLanguage } from "@/components/providers/language-provider"
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Texas Pool and Pavers</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61560989897082&mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2">
              <li><Link href="/our-services" className="text-gray-300 hover:text-white transition-colors">{t("footer.services.pools")}</Link></li>
              <li><Link href="/our-services" className="text-gray-300 hover:text-white transition-colors">{t("footer.services.paving_hardscaping")}</Link></li>
              <li><Link href="/our-services" className="text-gray-300 hover:text-white transition-colors">{t("footer.services.decks_patios")}</Link></li>
              <li><Link href="/our-services" className="text-gray-300 hover:text-white transition-colors">{t("footer.services.fire_water")}</Link></li>
              <li><Link href="/our-services" className="text-gray-300 hover:text-white transition-colors">{t("footer.services.kitchens")}</Link></li>
              <li><Link href="/our-services" className="text-gray-300 hover:text-white transition-colors">{t("footer.services.full_construction")}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{t("footer.phone")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{t("footer.email")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{t("footer.location")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
} 