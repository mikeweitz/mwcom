import path from 'path';
import { fileURLToPath } from 'url';

import js from '@eslint/js';
import tseslint from 'typescript-eslint';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    // import.meta.dirname is available after Node.js v20.11.0
    baseDirectory: __dirname,
    recommendedConfigs: {
        next: 'next',
        'next/core-web-vitals': 'next/core-web-vitals',
    },
});

const eslintConfig = [
    {
        ignores: [
            '**/node_modules/**',
            '.next/**',
            'dist/**',
            'coverage/**',
            '**/*.min.js',
        ],
    },

    ...tseslint.configs.recommended,

    // ...compat.extends('next/typescript'),
    // ...compat.config({
    //     // extends: ['next/typescript'],
    // }),
    // Use compat for legacy next and prettier configs
    // ...compat.config({
    //     extends: [
    //         'next/core-web-vitals', // Includes recommended Next.js, React, and Core Web Vitals rules
    //         'next/typescript', // Adds Next.js specific TypeScript rules
    //         // 'prettier', // Integrates Prettier
    //     ],
    // }),

    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        rules: {
            // Add or override specific rules here
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
        },
    },

    // ...compat
    //     .config
    // {
    //     extends: ['next/typescript'],
    // },
    // {
    //     ignores: [
    //         '**/build/**',
    //         '**/out/**',
    //         '**/node_modules/**',
    //         '**/vendor/**',
    //     ],
    // }
    // (),
];

export default eslintConfig;
