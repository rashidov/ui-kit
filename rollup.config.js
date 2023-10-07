const typescript = require('@rollup/plugin-typescript')
const postcss = require('rollup-plugin-postcss')
const terser = require('@rollup/plugin-terser')
const dts = require('rollup-plugin-dts')
const packageJson = require('./package.json')

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'cjs'
      },
      {
        file: packageJson.main,
        format: 'esm'
      }
    ],
    external: ['react'],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json'
      }),
      postcss({
        extract: 'index.css',
        modules: true,
        use: ['sass'],
        minimize: true,
      }),
      terser(),
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    external: [/\.(css|scss)$/],
    plugins: [dts.default()]
  }
];