import * as path from "path";
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
  envDir: path.resolve(__dirname, ".env"),
  plugins: [tsconfigPaths(), react()],
});
