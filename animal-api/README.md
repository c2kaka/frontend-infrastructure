如果编译和产出为两种不同环境的资源，还得需要设置 package.json 中的相关字段。事实上，如果一个 npm 需要在不同环境下加载 npm 包不同的入口文件，就会牵扯到main字段、module以及browser字段。简单来说：

- main定义了npm包的入口文件，Browser 环境和 Node 环境均可使用；
- module定义npm包的 ESM 规范的入口文件，Browser 环境和 Node 环境均可使用；
- browser定义npm包在 Browser 环境下的入口文件。

而这三个字段也需要区分优先级，打包工具对于不同环境适配不同入口的字段在选择上还是要以实际情况为准。经我测试后，在目前状态，Webpack 在 Web 浏览器环境配置下，优先选择：browser > module > main，在 Node.js 环境下 module > main。

