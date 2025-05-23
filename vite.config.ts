import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		// Set this for slightly smaller bundle size
		__VUE_OPTIONS_API__: 'false',
	},
	plugins: [
		vue(),
		visualizer({
			filename: 'dist/stats.html',
			gzipSize: true,
			brotliSize: true,
		}),
	],
});
