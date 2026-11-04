import nextVitals from 'eslint-config-next/core-web-vitals'
import { defineConfig, globalIgnores } from 'eslint/config'
import { dyloAdherence } from './rules/eslint.dylo-adherence.mjs'

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    // The raw Claude Design export. Kept for re-sync, not maintained as source.
    'design-source/**',
    '.vercel/**',
    '.capture/**',
  ]),
  // The registry is source that gets copied into other repos, and the docs
  // site renders it, so both are held to the rules consumers install.
  ...dyloAdherence.map((config) => ({ ...config, files: ['registry/**/*.{ts,tsx}', 'src/**/*.{ts,tsx}'] })),
])

export default eslintConfig
