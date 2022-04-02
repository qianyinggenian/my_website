module.exports = {
  // 是否在开发环境下使用eslint-loader做语法检查
  lintOnSave: false,
  // 生成的生产环境构建文件的目录
  outputDir: 'dist',
  // 开发服务器设置
  devServer: {
    port: 8080,
    open: true
  }
}
