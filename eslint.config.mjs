import nextVitals from 'eslint-config-next/core-web-vitals'
import { defineConfig, globalIgnores } from 'eslint/config'

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
    // Claude Design's own brand-book runtime, served verbatim in an iframe.
    'public/brand-book/**',
    '.vercel/**',
  ]),
  {
    // The registry is source that gets copied into other repos, so it is held
    // to the adherence rules this design system asks consumers to adopt.
    files: ['registry/**/*.tsx'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Literal[value=/#[0-9a-fA-F]{3,8}\\b/]',
          message: 'Raw hex colour. Use a dylo token: bg-ink, text-oxide, border-line.',
        },
      ],
    },
  },
])

export default eslintConfig
