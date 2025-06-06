import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
	{
		ignores: [
			'node_modules',
			'dist',
			'build',
			'coverage',
			'docs',
			'public',
			'static',
		],
	},
	{ files: ['**/*.{js,mjs,cjs,ts,vue}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/essential'],
	{
		files: ['**/*.vue'],
		languageOptions: { parserOptions: { parser: tseslint.parser } },
	},
	eslintConfigPrettier,
	{
		rules: {
			'vue/multi-word-component-names': 'off',
			semi: ['error', 'always'],
		},
	},
];
