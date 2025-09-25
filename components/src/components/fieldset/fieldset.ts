'use client'
import type { Assign } from "@ousia-ui/ark"
import { ark, type PolymorphicProps } from "@ousia-ui/ark";
import { type FieldsetVariantProps, fieldset } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { FieldsetRootProvider, type FieldsetRootProviderBaseProps } from './fieldset-root-provider'
import { FieldsetRoot, type FieldsetRootBaseProps } from './fieldset-root'
import { FieldsetErrorText, type FieldsetErrorTextBaseProps } from './fieldset-error-text'
import { FieldsetHelperText, type FieldsetHelperTextBaseProps } from './fieldset-helper-text'
import { FieldsetLegend, type FieldsetLegendBaseProps } from './fieldset-legend'

const { withProvider, withContext } = createStyleContext(fieldset)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLFieldSetElement,
  Assign<Assign<HTMLStyledProps<'fieldset'>, FieldsetRootProviderBaseProps>, FieldsetVariantProps>
>(FieldsetRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLFieldSetElement,
  Assign<Assign<HTMLStyledProps<'fieldset'>, FieldsetRootBaseProps>, FieldsetVariantProps>
>(FieldsetRoot, 'root')

export const ErrorText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, FieldsetErrorTextBaseProps>
>(FieldsetErrorText, 'errorText')

export const HelperText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, FieldsetHelperTextBaseProps>
>(FieldsetHelperText, 'helperText')

export const Legend = withContext<
  HTMLLegendElement,
  Assign<HTMLStyledProps<'legend'>, FieldsetLegendBaseProps>
>(FieldsetLegend, 'legend')

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ark.div, 'control')

export { FieldsetContext as Context } from './fieldset-context'
