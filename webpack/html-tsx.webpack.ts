import webpack from "webpack";
import { pages } from "../src/pages";

export const htmlTsxRulesDev: webpack.RuleSetRule = {
	test: /\.tsx$/,
	use: [
		{
			loader: "babel-loader",
			options: {
				presets: ['@babel/preset-typescript', '@babel/preset-react']
			}
		}
	],
}

export const htmlTsxPlugins = [
	...pages,
]