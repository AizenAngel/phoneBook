可以用bundle.js作为一个功能js。
把entry js 和bundle js 打包成一个文件。 
在entry js 中通过require 把module js 引入。形成模块化
注意*  做完一步要执行命令 webpack *******相当于打包处理（这里运行：webpack entry.js bundle.js）
打包各类文件 需要下载加载器 （css：css-loader style-loader）
js中require书写注意：require('style-loader!css-loader!./module.css') 这是没有通过配置文件的方法

配置文件做好之后
在控制台直接输入webpack命令即可。 可以找到webpak.config.js中的配置（入口文件，出口文件，加载器等等）



vue-cli 在page文件夹里