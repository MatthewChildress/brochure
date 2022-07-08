module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["airbnb-typescript", "prettier"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {},
};
