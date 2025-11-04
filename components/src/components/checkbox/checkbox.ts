'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type CheckboxVariantProps, checkbox } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { CheckboxControl } from './checkbox-control'
import { CheckboxGroup, type CheckboxGroupBaseProps } from './checkbox-group'
import { CheckboxIndicator, type CheckboxIndicatorBaseProps } from './checkbox-indicator'
import { CheckboxLabel } from './checkbox-label'
import { CheckboxRoot, type CheckboxRootBaseProps } from './checkbox-root'
import { CheckboxRootProvider, type CheckboxRootProviderBaseProps } from './checkbox-root-provider'

const { withProvider, withContext } = createStyleContext(checkbox)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLLabelElement,
  Assign<Assign<HTMLStyledProps<'label'>, CheckboxRootProviderBaseProps>, CheckboxVariantProps>
>(CheckboxRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLLabelElement,
  Assign<Assign<HTMLStyledProps<'label'>, CheckboxRootBaseProps>, CheckboxVariantProps>
>(CheckboxRoot, 'root')

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(CheckboxControl, 'control')

export const Group = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, CheckboxGroupBaseProps>
>(CheckboxGroup, 'group')

export const Indicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, CheckboxIndicatorBaseProps>
>(CheckboxIndicator, 'indicator')

export const Label = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(CheckboxLabel, 'label')

export { CheckboxContext as Context } from './checkbox-context'

export { CheckboxHiddenInput as HiddenInput } from './checkbox-hidden-input'
