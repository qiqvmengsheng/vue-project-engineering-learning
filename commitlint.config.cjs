module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 自定义规则
  // @see https://commitlint.js.org/#/reference-rules
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复
        'docs', // 文档
        'style', // 代码格式
        'refactor', // 代码重构
        'perf', // 性能优化
        'test', // 增加或改动测试
        'revert', // 回滚
        'build', // 构建
        'ci', // ci 配置、脚本
        'chore', // 其他，对构建过程或辅助工具的更改（不影响源文件、测试用例）
        'wip' // wip
      ]
    ]
  }
}
