require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['dist'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-airbnb-with-typescript',
    '@vue/eslint-config-prettier',
  ],
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'type', 'internal', 'parent', 'sibling', 'object', 'index'],
        pathGroups: [
          {
            pattern: '@/**',
            position: 'after',
            group: 'external',
          },
          {
            pattern: '~/**',
            position: 'after',
            group: 'internal',
          },
        ],
      },
    ],
    'vue/no-setup-props-destructure': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/valid-v-slot': ['error', { allowModifiers: true }],
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/media-has-caption': 'off',
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    'no-bitwise': ['error', { allow: ['&', '|', '<<'] }],
    radix: ['error', 'as-needed'],
  },
};
