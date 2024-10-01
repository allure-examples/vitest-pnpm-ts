import { defineConfig } from "vitest/config";


export default defineConfig({
  test: {
    setupFiles: [require.resolve("allure-vitest/setup")],
    reporters: [
      "default",
      ["allure-vitest/reporter", { resultsDir: "./out/allure-results" }],
    ],
  },
});
