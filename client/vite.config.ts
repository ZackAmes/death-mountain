import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), wasm(), mkcert()],
    worker: {
        format: 'es',
        plugins: () => [wasm()],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    optimizeDeps: {
        exclude: ['@dojoengine/core', '@dojoengine/sdk', '@dojoengine/utils'],
        esbuildOptions: {
            target: 'esnext',
        },
    },
    build: {
        target: 'esnext',
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
        allowedHosts: [process.env['DEPLOY_NAME'] + '.ponzis.fun'],

    },
});
