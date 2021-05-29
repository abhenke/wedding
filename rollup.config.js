import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import typescript from 'rollup-plugin-typescript';
import image from '@rollup/plugin-image';
import scss from 'rollup-plugin-scss';

export default {
	plugins: [
		typescript(),
		nodeResolve({
			browser: true,
		}),
		commonjs(),
		image(),
		scss(),
		babel({
			babelrc: false,
			presets: [['@babel/env', { modules: false }], '@babel/react'],
		}),
		replace({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
	],
};
