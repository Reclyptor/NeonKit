import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    primary: null,
    surface: null,
    background: null,
  },
});

export const theme = createTheme(vars, {
  color: {
    primary: "#A4C639",
    surface: "#151A15",
    background: "#0C0F0C",
  }
});
