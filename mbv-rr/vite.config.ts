import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      federation({
        name: "mbv",
        remotes: {
          cognitive: {
            external: `Promise.resolve("${env.VITE_COGNITIVE_URL}/assets/remoteEntry.js")`,
            from: "vite",
            externalType: "promise",
          },
        },
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
    build: {
      target: "esnext",
    },
  };
});
