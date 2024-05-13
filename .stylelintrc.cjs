module.exports = {
  // 引入继承推荐规范配置
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-html/vue',
    'stylelint-config-recess-order'
  ],
  //
  overrides: [
    { files: ['**/*.{vue,html}'], customSyntax: 'postcss-html' },
    { files: ['**/*.{css,scss}'], customSyntax: 'postcss-scss' }
  ]
}
