/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary-fixed-dim": "#f2f0f0",
        "on-secondary-fixed": "#3f3f3f",
        "background": "#ededed",
        "primary": "#EAB308", // From the image
        "secondary-fixed-dim": "#d6d4d3",
        "on-primary-fixed-variant": "#EAB308",
        "outline": "#767777",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#e1e3e3",
        "on-error": "#ffefec",
        "on-secondary-container": "#525151",
        "on-primary-fixed": "#474700",
        "primary-container": "#fce068", // Brighter yellow container
        "error": "#b02500",
        "secondary": "#5c5b5b",
        "inverse-primary": "#fce068",
        "surface-bright": "#ededed",
        "surface-dim": "#c7cbaf",
        "inverse-on-surface": "#9c9d9d",
        "tertiary-dim": "#4f5050",
        "on-error-container": "#520c00",
        "secondary-fixed": "#e4e2e1",
        "surface-container-low": "#e8e9e9",
        "secondary-dim": "#504f4f",
        "primary-fixed": "#EAB308",
        "on-primary": "#ffffff",
        "secondary-container": "#e4e2e1",
        "on-tertiary-fixed": "#505050",
        "tertiary-container": "#ffffff",
        "on-primary-container": "#5a5a00",
        "surface": "#ededed",
        "on-surface": "#2d2f2f",
        "outline-variant": "#acadad",
        "on-tertiary-container": "#626262",
        "on-tertiary-fixed-variant": "#6d6d6d",
        "on-secondary-fixed-variant": "#5c5b5b",
        "primary-dim": "#c29406",
        "error-container": "#f95630",
        "on-secondary": "#f5f2f1",
        "surface-container": "#dfdfdf",
        "inverse-surface": "#0c0f0f",
        "error-dim": "#b92902",
        "tertiary": "#5b5b5b",
        "on-tertiary": "#f4f2f2",
        "tertiary-fixed": "#ffffff",
        "on-background": "#2d2f2f",
        "surface-tint": "#EAB308",
        "surface-container-highest": "#dbdddd",
        "on-surface-variant": "#5a5c5c",
        "surface-variant": "#dbdddd",
        "primary-fixed-dim": "#EAB308"
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Space Grotesk", "sans-serif"],
        "label": ["Space Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}
