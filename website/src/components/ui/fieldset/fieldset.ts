'use client'
import { type Assign, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { type FieldsetVariantProps, fieldset } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  FieldsetErrorText,
  type FieldsetErrorTextElement,
  type FieldsetErrorTextProps,
} from './fieldset-error-text'
import {
  FieldsetHelperText,
  type FieldsetHelperTextElement,
  type FieldsetHelperTextProps,
} from './fieldset-helper-text'
import {
  FieldsetLegend,
  type FieldsetLegendElement,
  type FieldsetLegendProps,
} from './fieldset-legend'
import { FieldsetRoot, type FieldsetRootElement, type FieldsetRootProps } from './fieldset-root'
import {
  FieldsetRootProvider,
  type FieldsetRootProviderElement,
  type FieldsetRootProviderProps,
} from './fieldset-root-provider'

const { withProvider, withContext } = createStyleContext(fieldset)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof FieldsetRootProviderElement,
  Assign<FieldsetRootProviderProps, FieldsetVariantProps>
>(FieldsetRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof FieldsetRootElement,
  Assign<FieldsetRootProps, FieldsetVariantProps>
>(FieldsetRoot, 'root')

export const ErrorText = withContext<typeof FieldsetErrorTextElement, FieldsetErrorTextProps>(
  FieldsetErrorText,
  'errorText',
)

export const HelperText = withContext<typeof FieldsetHelperTextElement, FieldsetHelperTextProps>(
  FieldsetHelperText,
  'helperText',
)

export const Legend = withContext<typeof FieldsetLegendElement, FieldsetLegendProps>(
  FieldsetLegend,
  'legend',
)

export const Control = withContext<'div', PolymorphicProps>(ark.div, 'control')

export { FieldsetContext as Context } from './fieldset-context'
