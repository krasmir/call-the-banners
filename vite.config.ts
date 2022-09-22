/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import macrosPlugin from "vite-plugin-babel-macros";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslint(), macrosPlugin()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./src.setupTests.ts"],
    },
});
