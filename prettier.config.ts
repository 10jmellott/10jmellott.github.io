import type { Config } from 'prettier';

const config: Config = {
	trailingComma: 'es5',
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	endOfLine: 'lf',
	arrowParens: 'always',
	htmlWhitespaceSensitivity: 'css',
	vueIndentScriptAndStyle: true,
	singleAttributePerLine: true,
	bracketSameLine: false,
};

export default config;
