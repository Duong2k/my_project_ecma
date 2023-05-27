import { defineConfig } from "vite";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
    build: {
        outDir: "dist",
        assetsDir: "assets",
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "./index.html"),
                css: path.resolve(__dirname, "/assets/css/style.css"),
            },
        },
    },
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    include: ['**/*.png'],
                    src: 'assets/img'
                }
            ]
        })
    ]
});