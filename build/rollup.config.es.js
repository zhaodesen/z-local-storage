import base from './rollup.config.base.js'

const config = Object.assign({}, base[0], {
	output: {
		name: 'EasyLocalStorage',
    file: 'dist/z-local-storage.esm.js',
    format: 'es',
		sourcemap: true,
  },
})

export default config