module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"parser": '@typescript-eslint/parser',
	"extends": [
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
	],
	"parserOptions": {
		"sourceType": "module"
	},
	"rules": {
		"@typescript-eslint/no-explicit-any": 1
	}
}
