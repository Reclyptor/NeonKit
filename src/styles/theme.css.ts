import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    background: null,
    surface: null,
    surfaceGlass: null,
    primary: null,
    primarySoft: null,
    primaryGlow: null,
    secondary: null,
    secondaryGlow: null,
    accent: null,
    error: null,
    warning: null,
    outline: null,
    text: null,
  },
  borderRadius: {
    small: null,
    medium: null,
    large: null,
  },
  spacing: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
  },
  fontSize: {
    sm: null,
    base: null,
    lg: null,
    xl: null,
  },
});

export const theme = createTheme(vars, {
  color: {
    background: "#0C0F0C",           // near-black
    surface: "#141914",              // slightly lighter black/green mix
    surfaceGlass: "rgba(16, 24, 16, 0.65)", // frosted dark green layer
    primary: "#A4C639",              // Matrix glyph green
    primarySoft: "#7CA529",          // dimmed green for borders or disabled
    primaryGlow: "#A4C63933",        // 20% opacity for glows
    secondary: "#5AA85F",            // desaturated green (muted, not neon)
    secondaryGlow: "#5AA85F33",
    accent: "#2F5E2F",               // deep green-gray (used for shadows or tertiary UI)
    error: "#8A1E1E",                // deep crimson, if needed
    warning: "#996600",              // muted amber-brown
    outline: "#A4C63922",            // faint green for edges
    text: "#B8E6B8",                 // soft neon text — readable but not blinding
  },
  borderRadius: {
    small: "0.25rem",
    medium: "0.375rem",
    large: "0.5rem",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
  },
  fontSize: {
    sm: "0.875rem",
    base: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
  },
});