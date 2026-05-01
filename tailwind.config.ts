import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#020617",
        "ink-soft": "#0f172a",
        "panel-dark": "#11162a",
        line: "rgba(148, 163, 184, 0.18)",
        neon: "#38bdf8",
        violetglow: "#8b5cf6"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56, 189, 248, 0.2), 0 24px 60px rgba(2, 6, 23, 0.45)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 32%), radial-gradient(circle at 80% 10%, rgba(139, 92, 246, 0.16), transparent 26%)"
      }
    }
  },
  plugins: []
};

export default config;
