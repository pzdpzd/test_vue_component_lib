const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  devServer: {
    port: 8083
  },
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  // vscode启动vue
  chainWebpack: config => {
    config.module
      .rule("js")
      .include.add(resolve("packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        return options;
      });
  }
  // 选项...
};
