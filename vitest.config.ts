import * as path from "path";
import { VitePWA } from "vite-plugin-pwa";
import WindiCSS from "vite-plugin-windicss";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: path.resolve(__dirname, "config/setupTests.ts"),
    clearMocks: true,
    coverage: {
      reporter: ["cobertura", "html", "lcov", "text-summary", "text"],
    },
  },
  plugins: [
    react({
      babel: {
        babelrc: true,
      },
    }),
    tsconfigPaths(),
    WindiCSS(),
    VitePWA(),
  ],
});
