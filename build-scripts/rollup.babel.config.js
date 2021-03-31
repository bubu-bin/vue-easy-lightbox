export const createBabelConfig = (isES5 = false) => {
  return {
    babelrc: false,
    babelHelpers: 'runtime',
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          loose: false,
          useBuiltIns: 'usage',
          corejs: 3
        }
      ]
    ],
    targets: {
      browsers: isES5 ? 'defaults' : 'last 2 Chrome versions'
    },
    plugins: [
      ['@vue/babel-plugin-jsx'],
      [
        '@babel/plugin-transform-runtime',
        {
          regenerator: false,
          useESModules: true
        }
      ]
    ],
    include: [
      'src/**'
      // 'node_modules/vue-runtime-helpers/dist/inject-style/browser.mjs'
      // https://github.com/vuejs/rollup-plugin-vue/issues/340
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.mjs']
  }
}
