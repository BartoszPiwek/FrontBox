import { htmlTsxPlugins, htmlTsxRulesDev } from './builder/html-tsx.webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
import { scssRulesDev } from './builder/scss.webpack';
import FriendlyErrorsPlugin from "friendly-errors-webpack-plugin";
import { tsRulesDev } from './builder/ts.webpack';
import { port, proxy } from './src/site';

module.exports = merge(commonConfig, {
	// @ts-ignore
	stats: 'errors-only',
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		port: port,
		proxy: proxy,
		disableHostCheck: true,
		contentBase: "src/**/*.(tsx|ts|php)",
		watchContentBase: true,
	},
	plugins: [
		...htmlTsxPlugins,
		new FriendlyErrorsPlugin({
			clearConsole: true,
		}),
	],
	module: {
		rules: [
			...scssRulesDev,
			...tsRulesDev,
			htmlTsxRulesDev
		]
	}
})