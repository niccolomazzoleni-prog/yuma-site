// YUMA design tokens (da yuma-tokens.json). Non hardcodare altri valori:
// usa solo queste variabili nei componenti della sezione credibilità.
export const yuma = {
  font: '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif',

  primary500: "#6C0FF2",
  primary900: "#26064D",

  neutral900: "#170B2E",
  neutral700: "#333756",
  neutral600: "#4A4F6B",
  neutral500: "#6B7290",
  neutral400: "#9AA0BC",
  neutral200: "#E2E5F0",
  neutral100: "#EEF0F7",
  neutral50: "#F7F8FC",
  neutral0: "#FFFFFF",

  // Fondo sezione credibilità (non bianco puro).
  surface: "#FDFCFA",

  gradientDark: "linear-gradient(150deg, #170B2E, #3B0A73 55%, #6C0FF2)",
} as const
