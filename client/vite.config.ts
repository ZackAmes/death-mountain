import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), wasm(), topLevelAwait(), mkcert()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },

    server: {
        host: '0.0.0.0',
        port: 3000,
        allowedHosts: [process.env['DEPLOY_NAME'] + '.ponzis.fun'],

    },
});
