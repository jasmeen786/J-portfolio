import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: "/portfolio/", // 👈 This must match your repo name
=======
>>>>>>> de9dda31e096998618f435dc4a823f5c9ba0d37f
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
