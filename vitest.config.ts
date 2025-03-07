/// <reference types="vitest/config" />

import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/utils/test/setupTests.ts",
    },
  }),
);

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: "jsdom", // 브라우저 환경에서 테스트할 수 있도록 설정
//     setupFiles: "./src/utils/test/setupTests.ts",
//   },
//   resolve: {
//     alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
//   },
// });
