import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

/**
 * Налаштовує Vite для React і імпорту SVG як компонентів через SVGR.
 * Кореневий base зберігає абсолютні URL ресурсів під час розгортання застосунку.
 */
export default defineConfig({
  plugins: [react(), svgr()],
  base: '/',
});