import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },

  e2e: {
    chromeWebSecurity: false,
    baseUrl: "http://localhost:8080",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
