import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        setupFiles: "__tests__/setupTests.ts",
    },
    plugins: [
        tsconfigPaths(),
        react()
    ],
})