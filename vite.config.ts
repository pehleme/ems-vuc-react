import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: path.resolve(__dirname, ".env"),
  plugins: [
    tsconfigPaths(),
    react({
      babel: {
        babelrc: true,
      }
    })
  ],
});
