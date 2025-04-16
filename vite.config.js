import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/AkashSinghPortfolio/', // ✅ Just the string, no quotes around key:value
});
