import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
export default [
	{
		input: 'src/index.ts',
		plugins: [
			typescript(),
			terser(),
		]
	},
	{
		input: 'src/index.ts',
		output: {
      file: 'dist/index.d.ts',
      format: 'esm'
    },
		plugins: [dts({ respectExternal: true })]
	}
]
