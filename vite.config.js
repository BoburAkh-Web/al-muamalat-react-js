import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url"; // Buni qo'shishni unutmang

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // path.resolve va __dirname ishlatmasdan yozish:
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url),
      ),
    },
  },
});
