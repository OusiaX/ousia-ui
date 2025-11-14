import { createPreset } from '@ousia-ui/preset'
import neutral from '@ousia-ui/preset/colors/neutral'
import { defineConfig } from '@pandacss/dev'
import typographyPreset from 'pandacss-preset-typography'
import { recipes } from '~/theme/recipes'
import { slotRecipes } from '~/theme/slotRecipes'

export default defineConfig({
  preflight: true,
  validation: 'none',
  importMap: 'styled-system',
  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: neutral,
      grayColor: neutral,
      radius: 'sm',
    }),
    typographyPreset({
      recipe: {
        sizes: ['base'],
        notProse: {
          className: 'not-prose',
        },
      },
    }),
  ],
  theme: {
    extend: {
      recipes,
      slotRecipes,
    },
  },
  globalCss: {
    extend: {
      html: {
        scrollPaddingTop: '5rem',
        scrollBehavior: 'smooth',
        minHeight: '100%',
        colorPalette: 'accent',
      },
      'html, body': {
        display: 'flex',
        flexDirection: 'column',
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        fontFamily: 'body',
      },
      pre: {
        background: 'transparent!',
        overflowX: 'auto',
        fontSize: '13px !important',
      },
      blockquote: {
        fontStyle: 'normal!',
        fontWeight: 'normal!',
      },
      strong: {
        color: 'fg.default!',
      },
      code: {
        fontFamily: 'code',
        '::selection': {
          bg: 'gray.dark.a4',
        },
      },
      article: {
        '--colors-prose-body': 'colors.fg.muted',
        '--colors-prose-heading': 'colors.fg.default',
        '--colors-prose-bold': 'colors.fg.default',
        '--colors-prose-link': 'colors.fg.default',
        '--colors-prose-code': 'colors.fg.default',
        '--colors-prose-td-border': 'colors.border.subtle',
        '--colors-prose-th-border': 'colors.border.subtle',
        '--colors-prose-hr-border': 'colors.border.subtle',
        '--colors-prose-quote-border': 'colors.accent.default',
      },
    },
  },
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  jsxFramework: 'react',
  outdir: 'styled-system',
})
