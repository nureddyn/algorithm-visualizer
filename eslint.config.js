import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    // rules: {
    //   // Aquí puedes personalizar reglas
    //   // por ejemplo: 'semi': ['error', 'always'],
    // },
  },
  {
    files: ['tests/**/*.ts'],
    rules: {
      // puedes poner reglas específicas para tests si necesitas
    },
  },
  {
  files: ['*.cjs'],
  languageOptions: {
    globals: {
      module: 'readonly',
      require: 'readonly',
    },
  },
}

];
