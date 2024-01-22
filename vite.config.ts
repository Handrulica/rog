import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    resolve: {
      alias: {
        src: "/src",
        public: "/public",
      },
    },
    define: {
      'process.env': env
    },
    plugins: [react()],
  };
});
