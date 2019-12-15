import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import url from 'rollup-plugin-url'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default {
	input: 'src/main.js',
	plugins: [
		external(),
		postcss({
			modules: true,
		}),
		url(),
		babel({
			exclude: 'node_modules/**',
				presets: [
				["@babel/env", { "modules": false }],
				"@babel/preset-react"
				]
		}),
		resolve(), // so Rollup can find `ms`
		commonjs() // so Rollup can convert `ms` to an ES module
	],
	output: [
		{
			name: pkg.name,
			file: pkg.main,
			format: 'cjs',
			exports: 'auto',
		},
		{
			name: pkg.name,
			file: pkg.module,
			format: 'es',
			exports: 'auto',
		}
	]
};
