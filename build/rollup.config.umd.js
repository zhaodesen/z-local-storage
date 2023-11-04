import base from './rollup.config.base.js'

const config = Object.assign({}, base[0], {
	output: {
		name: 'EasyLocalStorage',
    file: 'dist/z-local-storage.umd.js',
    format: 'umd',
		sourcemap: true,
  },
})

export default config
