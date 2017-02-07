## 构建最简webpack前端工程： Webpack下使用babel转换es6, react

### 参见： Deep_Understanding_of_React项目 02/2.1

### 待解决的问题：
* css 和 image 的打包

### 创建项目目录，在目录下创建js, css, img三个子目录；
```
 js 目录下创建 app.js 为主文件，其他是组件；
 项目目录下创建 index.html 文件，引用bundle.js 文件
```


### 创建package.json文件: 除scripts之外使用默认设置
```
npm init --yes

"scripts": {
  "start": "webpack-dev-server --inline --content-base ."
}
```

### 创建.babelrc文件

```
{
  "presets": ["env"]
}
```

### 创建webpack.config.js文件
```javascript
module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        publicPath: ""
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: "babel-loader?presets[]=es2015&presets[]=react"
            }
        ]
    }
};
```

### 安装webpack相关

```
npm install --save-dev webpack
npm install --save-dev webpack-dev-server
```


### 安装babel相关
```
npm install --save-dev babel-core
npm install --save-dev babel-loader
npm install --save-dev babel-preset-env
# ES2015转码规则
$ npm install --save-dev babel-preset-es2015

# react转码规则
$ npm install --save-dev babel-preset-react

# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
```


### 安装react
```
npm install --save react react-dom
```
### 使用： 
```
npm install
``` 
