import { defineConfig } from "vite"
const path = require('path') 
console.log(`dirname: ${__dirname}, src: ${path.resolve(__dirname, "src")}, bootstrap: ${path.resolve(__dirname, "node_modules/bootstrap")}`)
export default defineConfig({
    root: path.resolve(__dirname, "src"),
    resolve: {
        alias: {
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap")
        }
    }
})