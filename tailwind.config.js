import {
  yumaColors,
  yumaSurface,
  yumaRadius,
  yumaShadow,
  yumaFont,
  yumaFontSize,
  yumaGradient,
  refColors,
  refShadow,
} from "./design/tailwind.tokens.js";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        // shadcn semantic (invariati)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // YUMA brand scales (design/tailwind.tokens.js)
        viola: yumaColors.viola,
        fucsia: yumaColors.fucsia,
        teal: yumaColors.teal,
        neutral: yumaColors.neutral,
        surface: yumaSurface,
        ref: refColors,
      },
      fontFamily: {
        sans: yumaFont.sans,
      },
      fontSize: yumaFontSize,
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        input: yumaRadius.input,
        btn: yumaRadius.btn,
        card: yumaRadius.card,
        pill: yumaRadius.pill,
      },
      boxShadow: {
        card: yumaShadow.card,
        panel: yumaShadow.panel,
        glow: yumaShadow.glow,
        subtle: refShadow.subtle,
        "subtle-2": refShadow.subtle2,
        "subtle-3": refShadow.subtle3,
      },
      backgroundImage: {
        "gradient-primary": yumaGradient.primary,
        "gradient-brand": yumaGradient.brand,
        "gradient-dark": yumaGradient.dark,
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
