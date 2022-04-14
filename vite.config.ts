import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import * as path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: path.resolve(__dirname, ".env"),
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "src/main.prod.tsx"),
    },
  },
  plugins: [tsconfigPaths(), reactRefresh(), react()],
});
