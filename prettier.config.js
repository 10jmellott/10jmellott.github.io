/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
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
