
### UI组件： tabs
技术栈： scss + jquery + es6
工程化： webpack + babel

实现过程
* 由html, css 和 JS 静态文件逐步工程化
* 将 scss 编译为 css：首先尝试使用file watcher, 即ruby + scss;
* 为了将 ES6 编译为 ES5 引入 Babel, Babel只能将浏览器不支持的 ES6 语法编译为 ES5，编译后可能仍然不能再浏览器中运行，例如使用 import 导入文件；
* 为解决模块依赖问题引入 Webpack, 使用 Webpack 的 loaders 对 scss 和 ES6 进行编译和打包；
* 因为没有使用 React, 不知道如何将 scss 因模块的方式引入 js 文件，所以回退，仍然使用 file watcher 编译 scss ;
* 引入 webpack-dev-server 和 server.js 

