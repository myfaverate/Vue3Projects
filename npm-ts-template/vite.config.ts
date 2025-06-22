import { defineConfig } from "vite"
export default defineConfig({
    root: "src",
    resolve: {
        alias: {
            // "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap")
        }
    }
})