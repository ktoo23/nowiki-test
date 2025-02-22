import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import {} from "./src/utils/test/setupTests";
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // 브라우저 환경에서 테스트할 수 있도록 설정
    setupFiles: "./src/utils/test/setupTests.js",
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
