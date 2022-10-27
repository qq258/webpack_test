// eslint配置，校验代码规范
module.exports = {
    env: {
        node: true, // 启用node中全局变量
        browser: true // 启用浏览器中全局变量
    },
    // 解析选项
    parserOptions: {
        ecmaVersion: 6, // ES语法版本 6
        sourceType: "module", // ES模块化
        ecmaFeatures: { // ES 其他特性
            jsx: false // 是否开启jsx，开发react时需要设置为true
        }
    },
    // 继承
    // Eslint官方规则：eslint:recommended
    // Vue Cli官方规则：plugin:vue/essential
    // React Cli官方规则：react-app
    extends: ["eslint:recommended"],
    // 校验规则配置
    // 优先级高于继承，自定义的校验规则会覆盖继承来的规则
    // 以键值对的方式配置
    // "off" 或 "0" - 关闭规则
    // "warn" 或 "1" - 开启规则，启用警告级别的错误，报错不会影响程序运行
    // "error" 或 "2" - 开启规则，启用错误级别的错误，报错会直接退出程序
    // 规则：eslint.bootcss.com/docs/rules/
    rules: {
        "no-var": 2,
        semi: "off", // 禁止使用分号
        // "no-console": "error", // 禁止使用console
        "no-debugger": "error", // 禁止使用debugger
        "default-case": [
            "warn", // 要求switch语句必须有default分支，否则警告
            { commentPattern: "^no default$" } // 允许在最后注释“no default”，这样就不会警告了
        ],
    }
}