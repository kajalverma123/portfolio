const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Black and white theme
        primary: "#000000",
        secondary: "#ffffff", 
        background: "#ffffff",
        foreground: "#000000",
        muted: "#f5f5f5",
        accent: "#000000",
        border: "#e5e5e5",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out",
        slideInLeft: "slideInLeft 0.6s ease-out", 
        slideInRight: "slideInRight 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
        scroll: "scroll 20s linear infinite",
        gradient: 'gradient 8s ease infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'Poppins', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'Poppins', 'sans-serif'],
        body: ['Inter', 'Montserrat', 'Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      clipPath: {
        'hexagon': 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#000000",
            foreground: "#ffffff",
          },
          secondary: {
            DEFAULT: "#ffffff", 
            foreground: "#000000",
          },
          background: "#ffffff",
          foreground: "#000000",
          content1: "#ffffff",
          content2: "#f5f5f5",
          content3: "#e5e5e5",
          content4: "#d4d4d4",
        },
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: "#ffffff",
            foreground: "#000000",
          },
          secondary: {
            DEFAULT: "#000000",
            foreground: "#ffffff", 
          },
          background: "#000000",
          foreground: "#ffffff",
          content1: "#000000",
          content2: "#1a1a1a",
          content3: "#2a2a2a",
          content4: "#3a3a3a",
        },
      },
    },
  })],
}
