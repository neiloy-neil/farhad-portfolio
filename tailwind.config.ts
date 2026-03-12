import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0a0118",
        "midnight-soft": "#120427",
        ink: "#070112",
        accent: "#7127ba",
        lavender: "#a362ff",
        "lavender-soft": "#c9a7ff",
        cyan: "#7ce7ff",
        peach: "#ffb38a"
      },
      boxShadow: {
        glow: "0 0 80px rgba(113, 39, 186, 0.32)",
        card: "0 24px 60px rgba(7, 2, 20, 0.48)",
        panel: "0 30px 100px rgba(0, 0, 0, 0.45)",
        neon: "0 0 40px rgba(163, 98, 255, 0.35)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top, rgba(163,98,255,0.18), transparent 30%), linear-gradient(180deg, rgba(10,1,24,0.97) 0%, rgba(8,1,17,1) 100%)",
        "orbital-glow":
          "radial-gradient(circle, rgba(145,104,231,0.55) 0%, rgba(145,104,231,0.16) 40%, transparent 72%)",
        "card-sheen":
          "linear-gradient(135deg, rgba(118,60,200,0.32), rgba(20,9,44,0.08) 50%, rgba(118,60,200,0.28))",
        "mesh-glow":
          "radial-gradient(circle at 20% 20%, rgba(124,231,255,0.16), transparent 26%), radial-gradient(circle at 80% 25%, rgba(255,179,138,0.16), transparent 24%), radial-gradient(circle at 50% 80%, rgba(163,98,255,0.18), transparent 34%)",
        "section-panel":
          "linear-gradient(180deg, rgba(18,4,39,0.88), rgba(8,2,18,0.92))"
      },
      fontFamily: {
        display: ["Preahvihear", "Trebuchet MS", "sans-serif"],
        sans: ["Plus Jakarta Sans", "Arial", "sans-serif"]
      },
      screens: {
        xs: "480px"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        orbit: "orbit 16s linear infinite",
        pulseSoft: "pulseSoft 5s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.08)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
