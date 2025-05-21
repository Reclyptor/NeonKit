import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";
import { timeout } from "~/styles/keyframes.css";

export const button = style({
  position: "relative",
  cursor: "pointer",
  borderRadius: vars.borderRadius.md,
  overflow: "hidden",
});

export const variants = {
  variants: {
    size: {
      small: style({
        padding: `${ vars.spacing.xs } ${ vars.spacing.sm }`,
        fontSize: vars.fontSize.sm,
      }),
      large: style({
        padding: `${ vars.spacing.sm } ${ vars.spacing.md }`,
        fontSize: vars.fontSize.md,
      }),
    },
    variant: {
      primary: style({
        color: vars.color.text,
        background: "rgba(164, 198, 57, 0.08)", // softened Matrix green
        border: `1px solid ${ vars.color.glow }`,
        borderRadius: vars.borderRadius.md,
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        boxShadow: `0 0 0.25rem ${ vars.color.glow } inset, 0 0 0.6rem ${ vars.color.glow }`,
        transition: "all 0.2s ease",
        selectors: {
          '&:hover': {
            background: "rgba(164, 198, 57, 0.12)", // slightly brighter on hover
            boxShadow: `0 0 0.4rem ${ vars.color.glow }, 0 0 1.1rem ${ vars.color.glow }`,
            transform: "translateY(-1px)",
          },
          '&:active': {
            transform: "scale(0.98)",
            boxShadow: `0 0 0.3rem ${ vars.color.glow }`,
          },
          '&:focus-visible': {
            outline: `1px solid ${ vars.color.primary }`,
            outlineOffset: "2px",
          },
        },
      }),

      secondary: style({
        color: vars.color.text,
        background: "transparent",
        border: `1px solid ${ vars.color.glow }`,
        transition: "all 0.2s ease",

        selectors: {
          '&:hover': {
            background: `${ vars.color.primary }10`,
            boxShadow: `0 0 0.75rem ${ vars.color.glow }`,
            transform: "translateY(-1px)",
          },
          '&:active': {
            transform: "scale(0.98)",
            boxShadow: `0 0 0.3rem ${ vars.color.glow }`,
          },
          '&:focus-visible': {
            outline: `1px solid ${ vars.color.primary }`,
            outlineOffset: "2px",
          },
        },
      }),
    },
  },

  defaultVariants: {
    size: "small" as const,
    variant: "primary" as const,
  },
};

export const bar = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  inset: 0,
  borderRadius: vars.borderRadius.md,
  pointerEvents: "none",
  opacity: 0.6,
  background: `linear-gradient(
    to right,
    transparent 0%,
    ${ vars.color.glow } 15%,
    ${ vars.color.primary } 50%,
    ${ vars.color.glow } 85%,
    transparent 100%
  )`,
  backgroundSize: "200% 100%",
  animation: `${ timeout } 1500ms linear`,
  mixBlendMode: "screen", // subtle overlay effect
});

export const content = style({
  position: "relative",
  zIndex: 1,
});