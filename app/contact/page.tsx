"use client"

import { useLanguage } from "@/components/providers/language-provider"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-serif font-normal text-black mb-12 leading-tight tracking-normal">
            {t("contact.title")}
          </h1>
          <p className="text-xl font-serif font-light text-black max-w-4xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-serif font-light text-white mb-6 tracking-wide">
                {t("contact.phone.title")}
              </h3>
              <p className="text-3xl font-serif font-light text-white mb-4">
                (469) 478-6051 / (214) 478-6051
              </p>
              <p className="text-white font-serif font-light">
                {t("contact.phone.schedule")}
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-serif font-light text-white mb-6 tracking-wide">
                {t("contact.email.title")}
              </h3>
              <p className="text-xl font-serif font-light text-white mb-4">
                eliasbulmaro5@gmail.com / lopezbriana841@gmail.com
              </p>
              <p className="text-white font-serif font-light">
                {t("contact.email.response")}
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-serif font-light text-white mb-6 tracking-wide">
                {t("contact.address.title")}
              </h3>
              <p className="text-xl font-serif font-light text-white mb-4">
                Austin TX
              </p>
              <p className="text-white font-serif font-light">
                {t("contact.address.area")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220749.58312043262!2d-97.9383829!3d30.2671530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Serving Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-light text-white mb-12">
            {t("contact.serving.title")}
          </h2>
          <p className="text-lg font-serif font-light text-white max-w-4xl mx-auto leading-relaxed">
            {t("contact.serving.areas")}
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-serif font-normal text-black mb-8 leading-tight">
                {t("contact.form.title")}
              </h2>
              <p className="text-xl font-serif font-light text-black max-w-3xl mx-auto leading-relaxed">
                {t("contact.form.subtitle")}
              </p>
            </div>

            <form action="https://formspree.io/f/mblkyeqn" method="POST" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-serif font-light tracking-wide text-black mb-3 uppercase">
                    {t("contact.form.firstName")}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-lg font-light placeholder-gray-400 transition-colors"
                    placeholder={t("contact.form.firstNamePlaceholder")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-serif font-light tracking-wide text-black mb-3 uppercase">
                    {t("contact.form.lastName")}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-lg font-light placeholder-gray-400 transition-colors"
                    placeholder={t("contact.form.lastNamePlaceholder")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-serif font-light tracking-wide text-black mb-3 uppercase">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-lg font-light placeholder-gray-400 transition-colors"
                  placeholder={t("contact.form.emailPlaceholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-serif font-light tracking-wide text-black mb-3 uppercase">
                  {t("contact.form.phone")}
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-lg font-light placeholder-gray-400 transition-colors"
                  placeholder="(210) 374-2779"
                />
              </div>

              <div>
                <label className="block text-sm font-serif font-light tracking-wide text-black mb-3 uppercase">
                  {t("contact.form.service.label")}
                </label>
                <select name="service" className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-lg font-light text-gray-600 transition-colors">
                  <option value="">{t("contact.form.service.select")}</option>
                  <option value="pools">{t("contact.form.service.pools")}</option>
                  <option value="paving">{t("contact.form.service.paving")}</option>
                  <option value="hardscaping">{t("contact.form.service.hardscaping")}</option>
                  <option value="bbq">{t("contact.form.service.bbq")}</option>
                  <option value="firepits">{t("contact.form.service.firepits")}</option>
                  <option value="patios">{t("contact.form.service.patios")}</option>
                  <option value="other">{t("contact.form.service.other")}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-serif font-light tracking-wide text-black mb-3 uppercase">
                  {t("contact.form.description.label")}
                </label>
                <textarea
                  rows={6}
                  name="description"
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-lg font-light placeholder-gray-400 resize-none transition-colors"
                  placeholder={t("contact.form.description.placeholder")}
                ></textarea>
              </div>

              <div className="text-center pt-12">
                <button
                  type="submit"
                  className="bg-orange text-black hover:bg-gold px-16 py-4 text-lg font-light tracking-wide transition-all duration-300"
                >
                  {t("contact.form.button")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-16 leading-tight">
              {t("contact.hours.title")}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide">
                  {t("contact.hours.weekdays.days")}
                </h3>
                <p className="text-2xl font-light text-gray-600">
                  {t("contact.hours.weekdays.hours")}
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide">
                  {t("contact.hours.saturday.day")}
                </h3>
                <p className="text-2xl font-light text-gray-600">
                  {t("contact.hours.saturday.hours")}
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide">
                  {t("contact.hours.sunday.day")}
                </h3>
                <p className="text-2xl font-light text-gray-600">
                  {t("contact.hours.sunday.status")}
                </p>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-gray-200">
              <p className="text-lg font-light text-gray-600 mb-8">
                {t("contact.social.follow")}
              </p>
              <div className="flex justify-center space-x-8">
                <a
                  href="https://www.facebook.com/profile.php?id=61560989897082&mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light tracking-wide uppercase"
                >
                  {t("contact.social.facebook")}
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light tracking-wide uppercase"
                >
                  {t("contact.social.instagram")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 