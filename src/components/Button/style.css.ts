import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";
import { shimmer, pulse } from "~/styles/keyframes.css";

export const button = style({
  cursor: "pointer",
  borderRadius: "0.375rem",
});

export const variants = {
  variants: {
    size: {
      small: style({ padding: "0.25rem 0.5rem", fontSize: "0.875rem" }),
      large: style({ padding: "0.375rem 0.625rem", fontSize: "1rem" }),
    },
    variant: {
      primary: style({
        position: "relative",
        overflow: "hidden",
        color: vars.color.surface,
        background: vars.color.primary,
        border: "2px solid transparent",
        borderRadius: "0.375rem",
        boxShadow: `0 0 0.25rem ${ vars.color.primary }80 inset`,
        transition: "background 0.2s ease, box-shadow 0.3s ease, transform 0.2s ease",
        selectors: {
          '&:hover': {
            boxShadow: `0 0 0.5rem ${ vars.color.primary }, 0 0 1rem ${ vars.color.primary }`,
            transform: "translateY(-1px)",
          },
          '&:hover::before': {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: "none",
            backgroundImage: `linear-gradient(110deg, transparent 0%, ${vars.color.primary}33 50%, transparent 100%)`,
            backgroundSize: "200% 100%",
            animation: `${ shimmer } 2.5s linear infinite`,
          },
          '&:active': {
            transform: "scale(0.98)",
            boxShadow: `0 0 0.25rem ${ vars.color.primary }`,
          },
          '&:focus-visible': {
            outline: `2px solid ${ vars.color.primary }`,
            outlineOffset: "2px",
          },
        },
      }),
      secondary: style({
        color: vars.color.primary,
        background: "transparent",
        border: `2px solid ${ vars.color.primary }`,
        transition: "background 0.2s ease, transform 0.2s ease",

        selectors: {
          '&:hover': {
            background: `${ vars.color.primary }10`,
            transform: "translateY(-1px)",
            animation: `${ pulse } 1.6s ease-out infinite`,
          },
          '&:active': {
            transform: "scale(0.98)",
            boxShadow: `0 0 0.25rem ${ vars.color.primary }`,
          },
          '&:focus-visible': {
            outline: `2px solid ${ vars.color.primary }`,
            outlineOffset: "2px",
          },
        },
      }),
    }
  },
  defaultVariants: {
    size: "small" as const,
    variant: "primary" as const,
  }
};