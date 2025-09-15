const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-source-sans-pro)", ...fontFamily.sans],
        serif: ["var(--font-playfair)", ...fontFamily.serif],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fadeInUp 0.6s ease-out forwards",
        "slide-left": "slideInLeft 0.8s ease-out forwards",
        "slide-right": "slideInRight 0.8s ease-out forwards",
      },
      colors: {
        // Golden Boy Stonework Palette
        black: '#000000', // Deep black for primary background
        white: '#FFFFFF', // White for text and highlights
        gray: '#BFBFBF', // Light/medium gray for secondary text, dividers, subtle elements
        orange: '#E36414', // Vibrant orange/rust for accents, CTAs, highlights
        gold: '#C49148', // Metallic gold for premium details, borders, hover accents
        // Brand Typography Colors
        'primary-text': '#2C3E50', // Dark navy blue for headings
        'accent-text': '#8B4513', // Warm brown/stone color for brand mentions
        'light-text': '#6C757D', // Medium gray for body text
        // Semantic colors mapped to palette
        primary: {
          DEFAULT: '#E36414', // Orange for primary
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#000000', // Deep black for secondary
          foreground: '#FFFFFF',
        },
        background: '#FFFFFF', // White for background
        foreground: '#000000', // Black for foreground
        muted: {
          DEFAULT: '#BFBFBF', // Light gray for muted
          foreground: '#000000', // Deep black on gray
        },
        accent: {
          DEFAULT: '#C49148', // Gold for accent
          foreground: '#000000',
        },
        destructive: {
          DEFAULT: '#ff0000', // Keep standard for destructive, but adjust if needed; invention not allowed, but task doesn't specify
          foreground: '#ffffff',
        },
        border: '#BFBFBF', // Light gray for borders
        input: '#BFBFBF', // Light gray for inputs
        ring: '#C49148', // Gold for focus rings
      },
    },
  },
  plugins: [],
}
