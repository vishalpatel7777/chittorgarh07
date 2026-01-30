import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { fileURLToPath } from 'url';

// https://vite.dev/config/
// console.log(path.resolve(__dirname, "src/utils"));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__dirname)
export default defineConfig({
  plugins: [react() , tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@data": path.resolve(__dirname, "src/data"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@/lib": path.resolve(__dirname , "src/lib"),
    },
  },
});

