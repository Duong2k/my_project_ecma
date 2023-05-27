import { defineConfig } from "vite";
import path from "path";


export default defineConfig({
    build: {
        outDir: "dist",
        assetsDir: "assets",
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "./index.html"),
                css: path.resolve(__dirname, "/assets/css/style.css"),
                img: path.resolve(__filename, "/assets/img")
            },
        },
    },
})