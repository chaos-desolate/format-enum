import { defineConfig } from 'vite';
import { terser } from 'rollup-plugin-terser';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		dts({
			outDir: 'lib/types'
		})
	],
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'format-enum'
		},
		rollupOptions: {
			external: [],
			output: [
				{
					format: 'es',
					dir: 'lib',
					entryFileNames: '[name].mjs',
					plugins: [terser()]
				},
				{
					format: 'umd',
					dir: 'lib',
					entryFileNames: '[name].js',
					name: 'createEnum',
					plugins: [terser()]
				},
				{
					format: 'cjs',
					dir: 'lib',
					entryFileNames: '[name].cjs',
					plugins: [terser()]
				}
			]
		}
	}
});
