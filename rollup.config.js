import typescript from '@rollup/plugin-typescript'

module.exports = {
  input: './src/index.ts',
  output: [
    {
      file: './dist/isObjectType.iife.js',
      format: 'iife',
      name: 'isObjectType'
    },
    {
      file: './dist/isObjectType.cjs.js',
      format: 'cjs',
      name: 'isObjectType'
    },
    {
      file: './dist/isObjectType.umd.js',
      format: 'umd',
      name: 'isObjectType'
    }
  ],
  plugins: [
    typescript()
  ]
}
