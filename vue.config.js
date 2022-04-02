module.exports = {
  // 是否在开发环境下使用eslint-loader做语法检查
  lintOnSave: false,
  // 生成的生产环境构建文件的目录
  outputDir: 'dist',
  // 开发服务器设置
  devServer: {
    // 设置开发服务器的端口号
    port: 8080,
    // 开服务器开启后，直接打开
    open: true
  },
  // 设置Webpack的原始配置
  configureWebpack: {
  }
}
