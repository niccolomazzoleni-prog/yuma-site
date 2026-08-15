// Fonte: yuma-brand.md §2-§6. Consumato da tailwind.config.js.
// Namespacing: viola (primario), fucsia (accento), teal (stati positivi),
// neutral (superfici/testo) — per non collidere con i semantic color shadcn.
export const yumaColors = {
  viola: {
    50: "#F4ECFF",
    100: "#E9DCFF",
    200: "#D6BBFF",
    300: "#B98CFF",
    400: "#9A5CFF",
    500: "#6C0FF2",
    600: "#5A0FD6",
    700: "#4A0BB0",
    800: "#3B0A73",
    900: "#26064D",
  },
  fucsia: {
    400: "#FF6FB0",
    500: "#FF4D9D",
    600: "#E01F7C",
  },
  teal: {
    50: "#E7F6F3",
    500: "#14B8A6",
    600: "#0F9488",
  },
  neutral: {
    0: "#FFFFFF",
    50: "#F7F8FC",
    100: "#EEF0F7",
    200: "#E2E5F0",
    300: "#C9CEE0",
    400: "#9AA0BC",
    500: "#6B7290",
    600: "#4A4F6B",
    700: "#333756",
    800: "#22243F",
    900: "#170B2E",
  },
}

// Superfici semantiche. "bianco caldo" dalla direzione estetica; ink = neutral-900.
export const yumaSurface = {
  page: "#FFFFFF",
  warm: "#FBFAF8",
  alt: "#F7F8FC",
  sunken: "#EEF0F7",
  ink: "#170B2E",
}

// Raggi (yuma-brand.md §6): input 8 · bottoni 12-13 · card 16 · pill 999.
export const yumaRadius = {
  input: "8px",
  btn: "12px",
  card: "16px",
  pill: "9999px",
}

// Ombre lunghe e quasi invisibili (yuma-brand.md §6 + direzione "morbida premium").
export const yumaShadow = {
  card: "0 20px 40px -32px rgba(23,11,46,0.40)",
  panel: "0 24px 46px -28px rgba(23,11,46,0.55)",
  glow: "0 12px 26px -12px rgba(108,15,242,0.60)",
  hairline: "0 0 0 1px #E2E5F0",
}

// Un solo carattere (yuma-brand.md §3).
export const yumaFont = {
  sans: [
    "Plus Jakarta Sans",
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "sans-serif",
  ],
}

// Scala tipografica a 6 livelli (yuma-brand.md §3). [size, {lineHeight, letterSpacing, fontWeight}]
export const yumaFontSize = {
  display: ["clamp(2.875rem, 5vw, 3.625rem)", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "800" }],
  h2: ["clamp(1.875rem, 3vw, 2.125rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
  h3: ["1.375rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "700" }],
  body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
  label: ["0.9375rem", { lineHeight: "1.2", fontWeight: "600" }],
  caption: ["0.8125rem", { lineHeight: "1.3", letterSpacing: "0.02em", fontWeight: "500" }],
}

export const yumaGradient = {
  brand: "linear-gradient(135deg, #6C0FF2, #FF4D9D)",
  primary: "linear-gradient(135deg, #6C0FF2, #5A0FD6)",
  dark: "linear-gradient(150deg, #170B2E, #3B0A73 55%, #6C0FF2)",
}
