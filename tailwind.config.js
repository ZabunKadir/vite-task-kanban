/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "360px", // Küçük telefonlar (iPhone SE, eski Android telefonlar)
        xs: "480px", // Küçük telefonlar (daha büyük ekranlı Android & iPhone Mini)
        sm: "640px", // Küçük tabletler & büyük telefonlar
        md: "768px", // Tabletler (iPad, Galaxy Tab)
        lg: "1024px", // Küçük dizüstü bilgisayarlar
        xl: "1280px", // Büyük ekranlar
        "2xl": "1536px", // Ultra geniş ekranlar
        "3xl": "1800px", // 2K çözünürlüğe sahip monitörler
        "4xl": "2100px", // Geniş 2K ekranlar
        "5xl": "2560px", // 4K ekranlar
        "6xl": "3200px", // Geniş ultra-wide ekranlar
      },
      colors: {
        "primary-main": "#2A7F62",
        "secondary-main": "#5E239D",
        gray: {
          900: "#111827",
          800: "#1f2937",
          700: "#374151",
          600: "#4b5563",
          500: "#6b7280",
          400: "#9ca3af",
          300: "#d1d5db",
          200: "#e5e7eb",
          100: "#f3f4f6",
          50: "#f9fafb",
          25: "#fcfcfd",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
