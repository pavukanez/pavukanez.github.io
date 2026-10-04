import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

mkdirSync("public", { recursive: true });
if (existsSync("profile_picture.jpg")) {
  copyFileSync("profile_picture.jpg", "public/profile_picture.jpg");
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
