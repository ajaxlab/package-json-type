import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.ts', 'test/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
    },
    rules: {
      '@typescript-eslint/explicit-member-accessibility': ['error', {
        accessibility: 'no-public',
      }],
      '@typescript-eslint/member-ordering': ['error', {
        default: {
          memberTypes: [
            'public-static-field',
            'public-instance-field',
            'private-static-field',
            'private-instance-field',
            'public-constructor',
            'private-constructor',
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
          ],
          order: 'alphabetically',
        },
      }],
      '@typescript-eslint/no-explicit-any': 'off',
      'no-bitwise': 'off',
      'no-console': ['error', { allow: ['warn', 'info'] }],
      'sort-keys': 'off',
      'sort-imports': ['error', {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      }],
      quotes: ['error', 'single', { avoidEscape: true }],
    },
  },
  {
    files: ['test/**/*.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    ignores: ['types/**', 'docs/**', 'md/**', 'node_modules/**'],
  }
);
