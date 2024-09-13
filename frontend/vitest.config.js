import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue"
export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        dir:'test',
        setupFiles: './vitest.setup.ts',
    },
    plugins: [vue()]
})