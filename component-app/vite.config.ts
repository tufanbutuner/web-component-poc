import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

const componentDir = path.resolve(__dirname, "src", "components");
const entries: Record<string, string> = {};

fs.readdirSync(componentDir).forEach((folder) => {
  const entryPath = path.join(componentDir, folder, `${folder}.tsx`);
  if (fs.existsSync(entryPath)) {
    // Preserve relative paths like: BannerComponent/BannerComponent.tsx
    const relativePath = path.relative(
      path.resolve(__dirname, "src"),
      entryPath
    );
    entries[relativePath] = entryPath;
  }
});

export default defineConfig({
  plugins: [react()],
  css: {
    modules: false,
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  build: {
    target: "esnext",
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: entries,
      output: {
        preserveModules: true,
        preserveModulesRoot: path.resolve(__dirname, "src"),
        format: "es",
        entryFileNames: "[name].js".replace(/\.tsx$/, ""),
        chunkFileNames: "shared/[name]-[hash].js",
        assetFileNames: "[name][extname]",
      },
      preserveEntrySignatures: "strict",
    },
  },
});
