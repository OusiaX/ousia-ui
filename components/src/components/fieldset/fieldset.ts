'use client'
import type { Assign } from '@ousia-ui/ark'
import { type PolymorphicProps, ark } from '@ousia-ui/ark'
import { type FieldsetVariantProps, fieldset } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { FieldsetErrorText } from './fieldset-error-text'
import { FieldsetHelperText } from './fieldset-helper-text'
import { FieldsetLegend } from './fieldset-legend'
import { FieldsetRoot } from './fieldset-root'
import { FieldsetRootProvider } from './fieldset-root-provider'

const { withProvider, withContext } = createStyleContext(fieldset)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLFieldSetElement,
  Assign<Assign<HTMLStyledProps<'fieldset'>, PolymorphicProps>, FieldsetVariantProps>
>(FieldsetRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLFieldSetElement,
  Assign<Assign<HTMLStyledProps<'fieldset'>, PolymorphicProps>, FieldsetVariantProps>
>(FieldsetRoot, 'root')

export const ErrorText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(FieldsetErrorText, 'errorText')

export const HelperText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(FieldsetHelperText, 'helperText')

export const Legend = withContext<
  HTMLLegendElement,
  Assign<HTMLStyledProps<'legend'>, PolymorphicProps>
>(FieldsetLegend, 'legend')

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ark.div, 'control')

export { FieldsetContext as Context } from './fieldset-context'
