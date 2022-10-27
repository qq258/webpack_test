// 编译js代码，将高版本的语法编译为较低版本的语法，以便在旧版的浏览器中可用
// 主要配置内容为preset
module.exports = {
    // babel预设，简单来说就是一组babel插件，用来扩展babel功能
    // @babel/preset-env  一个智能预设，允许使用最新的javascript
    // @babel/preset-react  一个用来编译react的jsx语法的预设
    // @babel/preset-typescript  一个用来编译ts的预设
    presets: [
        "@babel/preset-env",
        // "@babel/preset-react",
        // "@babel/preset-typescript"
    ]
}