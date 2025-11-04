'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type RadioGroupVariantProps, radioGroup } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { RadioGroupContext } from './radio-group-context'
import { RadioGroupIndicator } from './radio-group-indicator'
import { RadioGroupItem } from './radio-group-item'
import { RadioGroupItemControl } from './radio-group-item-control'
import { RadioGroupItemHiddenInput } from './radio-group-item-hidden-input'
import { RadioGroupItemText } from './radio-group-item-text'
import { RadioGroupLabel } from './radio-group-label'
import { RadioGroupRoot } from './radio-group-root'
import { RadioGroupRootProvider } from './radio-group-root-provider'

const { withProvider, withContext } = createStyleContext(radioGroup)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, RadioGroupVariantProps>
>(RadioGroupRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, RadioGroupVariantProps>
>(RadioGroupRoot, 'root')

export const Indicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(RadioGroupIndicator, 'indicator')

export const ItemControl = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(RadioGroupItemControl, 'itemControl')

export const Item = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(RadioGroupItem, 'item')

export const ItemText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(RadioGroupItemText, 'itemText')

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(RadioGroupLabel, 'label')

export { RadioGroupContext as Context, RadioGroupItemHiddenInput as ItemHiddenInput }
