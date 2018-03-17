var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={

	// 配置文件
	entry:'./entry.js',//入口
	output:{
		// 最终文件生成的文件位置
		path:__dirname + '/dist',

		filename:'bundle.js'
	},
	module:{
		rules :[
		//加载器规则
			{
				test:/\.css$/,//匹配所有css后缀的文件
				loader:'style-loader'
			},
			{
				test:/\.css$/,
				loader:'css-loader'
			},
			{
				test:/\.jpg$/,//匹配所有jpg后缀的文件
				loader:'file-loader',
				options : {
					name : '[name].[ext]'
				}
			},
		]
	},
	plugins: [new HtmlWebpackPlugin()]
}

