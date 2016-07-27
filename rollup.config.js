import { rollup } from 'rollup'
import babel from 'rollup-plugin-babel'


export default {
  // tell rollup our main entry point
  entry: 'src/index.js',
  dest: 'static/rollup-bundle.js',
  format: 'es',
  plugins: [
    babel({
      presets: 'es2015-rollup'
    })
  ]
}