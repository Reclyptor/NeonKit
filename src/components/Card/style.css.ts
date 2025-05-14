import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";

export const card = style({
  position: "relative",
  padding: "1rem",
  fontSize: "1rem",
  borderRadius: "0.375rem",
  background: `${ vars.color.surface }B3`,
  color: vars.color.primary,
  border: `.0625rem solid ${ vars.color.primary }`,
  boxShadow: `0 0 0.5rem ${ vars.color.primary }33 inset, 0 0 1rem ${ vars.color.primary }11`,
  transition: "box-shadow 0.3s ease, background 0.3s ease",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
});

export const underlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: "0.375rem",
  background: `linear-gradient(to top, ${ vars.color.surface }, ${ vars.color.background })`,
  zIndex: -1,
});

export const header = style({
  paddingBottom: "0.5rem",
  marginBottom: "1rem",
  background: `linear-gradient(to bottom, transparent 90%, ${ vars.color.primary }33 100%)`,
});

export const footer = style({
  paddingTop: "0.5rem",
  marginTop: "1rem",
  background: `linear-gradient(to top, transparent 90%, ${ vars.color.primary }33 100%)`,
});