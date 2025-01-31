const sortByLineLength = ['error', { type: 'line-length', order: 'asc' }];

module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:perfectionist/recommended-alphabetical-legacy',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'vitest.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', 'react-hooks', 'jsx-a11y', '@typescript-eslint', 'vitest', 'perfectionist'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: ['**/tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: true,
      alias: true
    }
  },
  rules: {
    'vitest/max-nested-describe': ['error', { max: 3 }],

    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    '@typescript-eslint/no-unused-vars': ['off', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'always' }],
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    // '@typescript-eslint/explicit-function-return-type': 'warn',

    curly: ['error', 'all'],
    'no-console': 0,
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],

    'import/no-cycle': [2, { maxDepth: 1 }],

    'perfectionist/sort-exports': sortByLineLength,
    'perfectionist/sort-named-exports': sortByLineLength,
    'perfectionist/sort-named-imports': sortByLineLength,
    'perfectionist/sort-object-types': sortByLineLength,
    'perfectionist/sort-interfaces': sortByLineLength,
    'perfectionist/sort-objects': 'off',
    'perfectionist/sort-modules': 'off',
    'perfectionist/sort-jsx-props': 'off',
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
        internalPattern: ['^@/.+'],
        newlinesBetween: 'always',
        groups: [
          'type',
          ['builtin', 'external'],
          'services',
          'pages',
          'internal',
          'components',
          'shared',
          { newlinesBetween: 'never' },
          'assets',
          ['parent', 'sibling', 'index'],
          'object',
          'unknown'
        ],
        customGroups: {
          type: {},
          value: {
            components: '^@/components/.+',
            services: '^@/services/.+',
            pages: '^@/pages/.+',
            shared: '^@/shared/(?!assets).+',
            assets: '^@/shared/assets/.+'
          }
        }
      }
    ]
  },

  overrides: [
    {
      files: ['src/**/*.slice.ts'],
      rules: { 'no-param-reassign': ['error', { props: false }] }
    }
  ]
};
