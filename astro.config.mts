import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
    site: "https://nicolehoelting.de",
    trailingSlash: "always",
    vite: {
        resolve: {
            alias: {
                "@/": `${path.resolve(__dirname, "src")}/`,
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    // path to your scss variables
                    additionalData: `@import "@/styles/variables.scss";`,
                },
            },
        },
    },
    integrations: [
        sitemap({
            lastmod: new Date(),
        }),
        robotsTxt(),
        icon(),
    ],
});
