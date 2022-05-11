/// <reference types="vitest" />

import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import react from "@vitejs/plugin-react";

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      viteCommonjs(),
      tsconfigPaths(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: env.VITE_APP_TITLE,
            description: env.VITE_APP_DESCRIPTION,
          },
        },
      }),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
        workbox: {
          cleanupOutdatedCaches: false,
        },
        manifest: {
          name: env.VITE_APP_TITLE,
          description: env.VITE_APP_DESCRIPTION,
          short_name: "VUC",
          theme_color: "#1F9CDA",
          background_color: "#1F9CDA",
          display: "standalone",
          orientation: "portrait",
          start_url: "/",
          scope: "/",
          categories: ["medical"],
          screenshots: [],
          related_applications: [],
          shortcuts: [
            {
              name: "Home",
              url: "/",
              icons: [],
            },
            {
              name: "Screening",
              url: "/screening",
              icons: [],
            },
          ],
          icons: [
            {
              src: "/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
      }),
    ],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: [resolve(__dirname, "config/tests/setup.ts")],
      coverage: {
        reporter: ["cobertura", "html", "lcov", "text-summary", "text"],
      },
    },
  };
});
