import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/image-key',
	build: {
		outDir: 'docs', // Ändert den Ausgabeordner auf "docs"
	},
})
