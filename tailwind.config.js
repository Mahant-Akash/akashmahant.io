/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* Surface */
        bg: "#ffffff",
        canvas: "#f5f5f5",
        "canvas-soft": "#fafafa",
        surface: "#f5f5f5",
        "surface-card": "#ffffff",
        "surface-strong": "#f0efed",

        /* Ink — ElevenLabs warm near-black */
        ink: "#292524",
        "ink-active": "#0c0a09",
        text: "var(--color-ink)",
        "text-active": "var(--color-ink-active)",

        /* Text */
        muted: "#777169",
        "muted-soft": "#a8a29e",
        subtle: "var(--color-muted)",

        /* Hairlines */
        border: "#e7e5e4",
        "border-soft": "#f0efed",
        "border-strong": "#d6d3d1",

        /* Atmospheric gradient stops */
        mint: "#a7e5d3",
        peach: "#f4c5a8",
        lavender: "#c8b8e0",
        sky: "#a8c8e8",
        rose: "#e8b8c4",

        /* Semantic */
        success: "#16a34a",
        error: "#dc2626",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "'Waldenburg'", "serif"],
        body: ["'DM Sans'", "'Inter'", "sans-serif"],
        mono: ["'Geist Mono'", "'ui-monospace'", "monospace"],
      },
      fontWeight: {
        display: "300",
        body: "400",
        "body-md": "500",
        displayBold: "700",
      },
      fontSize: {
        display: [
          "48px",
          { lineHeight: "1.08", letterSpacing: "-0.96px" },
        ],
        "display-lg": [
          "36px",
          { lineHeight: "1.17", letterSpacing: "-0.72px" },
        ],
        "display-md": [
          "32px",
          { lineHeight: "1.13", letterSpacing: "-0.48px" },
        ],
        "body-xl": ["20px", { lineHeight: "1.35" }],
        "body-lg": ["18px", { lineHeight: "1.60", letterSpacing: "0.18px" }],
        body: ["16px", { lineHeight: "1.50", letterSpacing: "0.16px" }],
        "body-md": ["14px", { lineHeight: "1.43", letterSpacing: "0.14px" }],
        nav: ["15px", { lineHeight: "1.47", letterSpacing: "0.15px" }],
        btn: ["15px", { lineHeight: "1.00", letterSpacing: "0px" }],
        caption: ["14px", { lineHeight: "1.50", letterSpacing: "0.14px" }],
        small: ["13px", { lineHeight: "1.38" }],
        micro: ["12px", { lineHeight: "1.33" }],
        tiny: ["10px", { lineHeight: "1.60" }],
        mono: ["13px", { lineHeight: "1.85" }],
      },
      letterSpacing: {
        display: "-0.96px",
        body: "0.16px",
        btn: "0",
        micro: "0.14px",
      },
      lineHeight: {
        display: "1.08",
        "display-lg": "1.17",
        "display-md": "1.13",
        "body-xl": "1.35",
        "body-lg": "1.60",
        mono: "1.85",
        micro: "1.33",
        tiny: "1.60",
      },
      borderRadius: {
        warm: "30px",
        pill: "9999px",
        card: "16px",
        section: "24px",
      },
      boxShadow: {
        card:
          "0 0 0 0.5px rgba(0,0,0,0.075) inset, 0 0 0 1px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.04)",
        "card-lg":
          "0 0 0 0.5px rgba(0,0,0,0.075) inset, 0 0 0 1px rgba(0,0,0,0.06), 0 4px 4px rgba(0,0,0,0.04)",
        btn:
          "0 0 1px rgba(0,0,0,0.4), 0 4px 4px rgba(0,0,0,0.04)",
        warm: "0 6px 16px rgba(78,50,23,0.04)",
        warm-lg: "0 8px 24px rgba(78,50,23,0.05)",
        section:
          "0 0 0 0.5px rgba(0,0,0,0.05) inset, 0 0 0 1px rgba(0,0,0,0.06), 0 4px 4px rgba(0,0,0,0.04)",
      },
      spacing: {
        section: "120px",
        "section-sm": "80px",
      },
      maxWidth: {
        container: "1200px",
        "container-sm": "960px",
      },
      transitionProperty: {
        shadow: "box-shadow",
      },
    },
  },
  plugins: [],
};
