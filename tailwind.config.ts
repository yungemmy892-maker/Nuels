import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0b0e14",
        panel: "#11151d",
        panel2: "#141924",
        line: "#232936",
        "line-bright": "#343d4f",
        ink: "#e3e8ef",
        dim: "#7d879a",
        faint: "#4b5568",
        mint: {
          DEFAULT: "#6ee7b7",
          dim: "#3fa584",
        },
        amber: {
          DEFAULT: "#e3b567",
          dim: "#a9834c",
        },
        violet: {
          DEFAULT: "#a48cf2",
          dim: "#7c68b8",
        },
        danger: "#e37878",
      },
      fontFamily: {
        mono: [
          '"JetBrains Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.8125rem", { lineHeight: "1.6" }],
        base: ["0.9375rem", { lineHeight: "1.75" }],
        lg: ["1.0625rem", { lineHeight: "1.6" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
        "2xl": ["1.625rem", { lineHeight: "1.35" }],
        "3xl": ["2.1rem", { lineHeight: "1.25" }],
        "4xl": ["2.75rem", { lineHeight: "1.15" }],
        "5xl": ["3.5rem", { lineHeight: "1.08" }],
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "3px",
        md: "4px",
        lg: "6px",
      },
      maxWidth: {
        content: "920px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(110,231,183,0.15), 0 0 24px -4px rgba(110,231,183,0.25)",
        "glow-amber": "0 0 0 1px rgba(227,181,103,0.15), 0 0 24px -4px rgba(227,181,103,0.2)",
        panel: "0 1px 0 0 rgba(255,255,255,0.02) inset",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scan: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 -8px" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
