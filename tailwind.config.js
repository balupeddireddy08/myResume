/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60a5fa', // blue-400
          dark: '#3b82f6',  // blue-500
        },
        secondary: {
          light: '#a78bfa', // purple-400
          dark: '#8b5cf6',  // purple-500
        },
        background: {
          light: '#f9fafb', // gray-50
          dark: '#111827',  // gray-900
        },
        surface: {
          light: '#ffffff', // white
          dark: '#1f2937',  // gray-800
        },
        text: {
          light: '#111827', // gray-900
          dark: '#f9fafb',  // gray-50
        }
      },
    },
  },
  plugins: [],
} 