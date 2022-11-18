module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-preset-env': {},
    cssnano: {
      preset: ['advanced', { discardUnused: { fontFace: false } }],
    },
  },
}
