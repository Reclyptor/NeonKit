import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";

export const card = style({
  position: "relative",
  padding: vars.spacing.md,
  fontSize: vars.fontSize.md,
  borderRadius: vars.borderRadius.md,
  background: vars.color.glass,
  color: vars.color.text,
  border: `1px solid ${ vars.color.glow }`,
  boxShadow: `0 0 0.5rem ${ vars.color.glow } inset, 0 0 1.2rem ${ vars.color.glow }`,
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  transition: "background 0.3s ease, box-shadow 0.3s ease",
});

export const underlay = style({
  position: "absolute",
  inset: 0,
  borderRadius: vars.borderRadius.md,
  background: `linear-gradient(to top, ${ vars.color.surface }CC, ${ vars.color.glass })`,
  zIndex: -1,
});

export const header = style({
  paddingBottom: vars.spacing.sm,
  marginBottom: vars.spacing.md,
  background: `linear-gradient(to bottom, transparent 85%, ${ vars.color.glow } 100%)`,
});

export const footer = style({
  paddingTop: vars.spacing.sm,
  marginTop: vars.spacing.md,
  background: `linear-gradient(to top, transparent 85%, ${ vars.color.glow } 100%)`,
});