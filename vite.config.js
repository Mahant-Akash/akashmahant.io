import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/personal-portfolio/",
  resolve: {
    alias: {
      "@": path.resolve(__dir, "./src"),
    },
  },
});
