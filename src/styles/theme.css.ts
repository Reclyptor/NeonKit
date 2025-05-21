import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    background: null,
    surface: null,
    glass: null,
    primary: null,
    glow: null,
    text: null,
    textMuted: null,
    danger: null,
  },
  borderRadius: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
  spacing: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
  },
  fontSize: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
});

export const theme = createTheme(vars, {
  color: {
    background: "#0C0F0C",
    surface: "#141914",
    glass: "rgba(16, 24, 16, 0.65)",
    primary: "#A4C639",
    glow: "#A4C63933",
    text: "#89B66F",
    textMuted: "#5F774A",
    danger: "#8A1E1E",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
  },
  fontSize: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
  },
});