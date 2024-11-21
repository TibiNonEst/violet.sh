import { defineConfig } from "astro/config";

export default defineConfig({
    build: {
        inlineStylesheets: "always"
    },
    image: {
        domains: [ "static.tibs.gay" ]
    }
});
