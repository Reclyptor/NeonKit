import { keyframes } from "@vanilla-extract/css";

export const shimmer = keyframes({
  "0%": { backgroundPosition: "-200% 0" },
  "100%": { backgroundPosition: "200% 0" },
});

export const pulse = keyframes({
  "0%": { boxShadow: "0 0 0 0 rgba(164, 198, 57, 0.4)" },
  "70%": { boxShadow: "0 0 0 0.5rem rgba(164, 198, 57, 0)" },
  "100%": { boxShadow: "0 0 0 0 rgba(164, 198, 57, 0)" },
});

export const flicker = keyframes({
  "0%": { opacity: 1 },
  "10%": { opacity: 0.85 },
  "20%": { opacity: 1 },
  "30%": { opacity: 0.9 },
  "40%": { opacity: 1 },
  "50%": { opacity: 0.75 },
  "60%": { opacity: 1 },
  "70%": { opacity: 0.95 },
  "80%": { opacity: 1 },
  "90%": { opacity: 0.88 },
  "100%": { opacity: 1 },
});

export const progress = keyframes({
  "0%": { width: "0%" },
  "100%": { width: "100%" }
});

export const timeout = keyframes({
  "0%": { width: "100%" },
  "100%": { width: "0%" }
});
