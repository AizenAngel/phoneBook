// var str = 'hello webpack';

var str = require('./module.js');
// require('style-loader!css-loader!./module.css')//没有通过配置文件的方法
require('./module.css')

window.onload = function(){
	var div = document.createElement('div');
	div.innerHTML = str;
	document.body.appendChild(div)
}