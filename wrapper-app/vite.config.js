import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    https: true,
    host: "localhost",
    port: 3001,
  },
  plugins: [basicSsl({ name: "wrapper", domains: ["localhost"] }), react()],
});
