import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css.ts";

export const container = style({
  display: "flex",
  alignItems: "center",
  padding: vars.spacing.sm,
  fontSize: vars.fontSize.md,
  borderRadius: vars.borderRadius.md,
  background: vars.color.glass,
  color: vars.color.text,
  border: `1px solid ${ vars.color.glow }`,
  boxShadow: `0 0 0.5rem ${ vars.color.glow } inset, 0 0 1.2rem ${ vars.color.glow }`,
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  transition: "background 0.3s ease, box-shadow 0.3s ease",
  selectors: {
    '&:focus-visible': {
      outline: `1px solid ${ vars.color.primary }`,
      outlineOffset: "2px",
    },
  }
});

export const input = style({
  all: "unset",
  flexGrow: 1,
});