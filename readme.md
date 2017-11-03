## 搭建TypeScript开发环境
1.安装TypeScript: ```npm install -g typescript``` 全局安装

2.初始化根目录: ```npm init```生成 **package.json**

3.初始化TypeScript配置:```tsc --init```生成**tsconfig.json**  

* 创建index.html,引用编译后的js   
* 执行 tsc 编译
* 打开index.html
* 或者使用 node *.js 直接运行
* 或者package.json，在scripts添加运行命令直接在终端运行
* 或是通过vscode的调试模式启动

## tsconfig的配置
* "watch:true", 自动检测编译
* "outDir",编译后生成的js路径
* "rootDir",ts路径
* "include/exclude", 编译时需要包含/剔除的文件夹。

## 一些包的说明
* **@types/node** : 由于typescript自身的机制，需要一份xx.d.ts声明文件，来说明模块对外公开的方法和属性的类型以及内容。