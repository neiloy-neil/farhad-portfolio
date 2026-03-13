import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./animations/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem"
      }
    },
    extend: {
      colors: {
        border: "rgba(var(--border-rgb), <alpha-value>)",
        input: "rgba(var(--border-rgb), <alpha-value>)",
        ring: "rgb(var(--ring-rgb))",
        background: "rgb(var(--bg-rgb))",
        foreground: "rgb(var(--foreground-rgb))",
        primary: {
          DEFAULT: "rgb(var(--primary-rgb))",
          foreground: "rgb(var(--primary-foreground-rgb))"
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary-rgb))",
          foreground: "rgb(var(--secondary-foreground-rgb))"
        },
        muted: {
          DEFAULT: "rgb(var(--muted-rgb))",
          foreground: "rgb(var(--muted-foreground-rgb))"
        },
        accent: {
          DEFAULT: "rgb(var(--accent-rgb))",
          foreground: "rgb(var(--accent-foreground-rgb))"
        },
        card: {
          DEFAULT: "rgba(var(--card-rgb), 0.7)",
          foreground: "rgb(var(--foreground-rgb))"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"]
      },
      boxShadow: {
        glow: "0 30px 120px rgba(73, 154, 255, 0.18)",
        floating: "0 20px 60px rgba(11, 18, 35, 0.22)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.25)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseRing: {
          "0%": { transform: "scale(0.95)", opacity: "0.35" },
          "70%, 100%": { transform: "scale(1.08)", opacity: "0" }
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseRing: "pulseRing 3.5s ease-out infinite",
        marquee: "marquee 26s linear infinite"
      },
      screens: {
        xs: "480px"
      }
    }
  },
  plugins: []
};

export default config;
