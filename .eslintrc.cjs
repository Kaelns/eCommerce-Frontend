const sortByLineLength = ['error', { type: 'line-length', order: 'asc', partitionByComment: true, partitionByNewLine: true }];

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

    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],

    'react-hooks/exhaustive-deps': 'error',
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
    'import/no-unresolved': 'error',
    'import/no-unused-modules': [2, { unusedExports: true, ignoreUnusedTypeExports: true }],
    '@typescript-eslint/consistent-type-imports': 'error',

    'perfectionist/sort-exports': sortByLineLength,
    'perfectionist/sort-interfaces': sortByLineLength,
    'perfectionist/sort-object-types': sortByLineLength,
    'perfectionist/sort-named-exports': sortByLineLength,
    'perfectionist/sort-named-imports': sortByLineLength,
    'perfectionist/sort-modules': sortByLineLength,
    'perfectionist/sort-objects': 'off',
    'perfectionist/sort-jsx-props': 'off',
    'perfectionist/sort-switch-case': 'off',
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
        ignoreCase: false,
        internalPattern: ['^@/.+'],
        newlinesBetween: 'always',
        partitionByComment: true,
        groups: [
          'type',
          ['builtin', 'external'],
          'app',
          'router',
          'api',
          'pages',
          'widgets',
          'entities',
          'internal',
          'ui',
          { newlinesBetween: 'never' },
          'lib',
          { newlinesBetween: 'never' },
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
            app: '^@/app.*',
            router: '^@/router.*',
            pages: '^@/pages.*',
            widgets: '^@/widgets.*',
            entities: '^@/entities.*',

            shared: '^@/shared/(?!assets)(?!ui)(?!api)(?!lib).+',
            assets: '^@/shared/assets/.+',
            ui: '^@/shared/ui/.+',
            api: '^@/shared/api/.+',
            lib: '^@/shared/lib/.+'
          }
        }
      }
    ],
    'perfectionist/sort-enums': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        partitionByComment: true,
        partitionByNewLine: true,
        forceNumericSort: true
      }
    ]
  },
  overrides: [
    {
      files: ['src/**/*.slice.ts'],
      rules: { 'no-param-reassign': ['error', { props: false }] }
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        projectService: true
      }
    }
  ]
};
