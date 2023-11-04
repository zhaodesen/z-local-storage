import base from './rollup.config.base.js'

const config = Object.assign({}, base[0], {
	output: {
		name: 'ZLocalStorage',
    file: 'dist/z-local-storage.esm.js',
    format: 'es',
  },
})

export default config
