export const plugins = [
  require('tailwindcss'),
  require('autoprefixer'),
  process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
    content: [
      'index.html',
      'index.js'
    ],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  }),
  require('cssnano')({
    preset: 'default',
})
];