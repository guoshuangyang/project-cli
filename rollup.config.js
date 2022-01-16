import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'

const defaultConfig = {
    input: './src/vite.ts',
    output: {
      file: './bin/vite.js',
      format: 'cjs',
      banner: '#!/usr/bin/env node'
    },
    plugins: [
      json(),
      terser()
    ]
  }
  
  export default defaultConfig