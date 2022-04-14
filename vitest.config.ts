import react from "@vitejs/plugin-react";
import * as path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

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
  plugins: [tsconfigPaths(), react()],
});
