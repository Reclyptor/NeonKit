import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css.ts";

export const container = style({
  width: "fit-content",
  height: "fit-content"
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: vars.spacing.md,
  borderBottom: `1px solid ${ vars.color.glow }`,
});

export const title = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.text,
  fontWeight: "bold",
  textTransform: "uppercase",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: vars.spacing.xs,
  padding: vars.spacing.md,
});

export const weekday = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "24px",
  height: "24px",
  margin: "0 auto",
  padding: `0 ${ vars.spacing.xs }`,
  color: vars.color.textMuted,
  fontSize: vars.fontSize.sm,
  fontWeight: "bold",
});

export const day = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "24px",
  height: "24px",
  margin: "0 auto",
  padding: `0 ${ vars.spacing.xs }`,
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted
});