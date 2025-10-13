/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Colores personalizados basados en tu paleta de tema
        primary: {
          light: '#0a7ea4',
          dark: '#fff',
          DEFAULT: '#0a7ea4', // Para modo claro por defecto
        },
        secondary: {
          light: '#11181C',
          dark: '#ECEDEE',
          DEFAULT: '#11181C',
        },
        background: {
          light: '#fff',
          dark: '#151718',
          DEFAULT: '#fff',
        },
        text: {
          light: '#ECEDEE',
          dark: '#11181C',
          DEFAULT: '#ECEDEE',
        },
        icon: {
          light: '#687076',
          dark: '#9BA1A6',
          DEFAULT: '#687076',
        },
        tabIcon: {
          default: {
            light: '#687076',
            dark: '#9BA1A6',
            DEFAULT: '#687076',
          },
          selected: {
            light: '#0a7ea4',
            dark: '#fff',
            DEFAULT: '#0a7ea4',
          },
        },
      }
    },
  },
  plugins: [],
}