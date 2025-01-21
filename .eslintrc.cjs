module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'vitest.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', 'react-hooks', 'jsx-a11y', '@typescript-eslint', 'vitest'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: ['**/tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'vitest/max-nested-describe': ['error', { max: 3 }],

    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],

    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',

    '@typescript-eslint/no-unused-vars': ['off', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    // '@typescript-eslint/explicit-function-return-type': 'warn',

    'import/prefer-default-export': 'off',
    'import/extensions': [0, { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],

    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-console': 0,
    curly: ['error', 'all']
  },

  overrides: [
    {
      files: ['src/**/*.slice.ts'],
      rules: { 'no-param-reassign': ['error', { props: false }] }
    }
  ]

  // noInlineConfig: true
};
