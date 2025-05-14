import { defineConfig } from "vite"
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from "@vitejs/plugin-react"
import path from "path";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin({ identifiers: "short" })],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    }
  }
})