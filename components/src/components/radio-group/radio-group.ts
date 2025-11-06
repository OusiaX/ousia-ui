'use client'
import type { Assign } from '@ousia-ui/ark'
import { type RadioGroupVariantProps, radioGroup } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { RadioGroupContext } from './radio-group-context'
import {
  RadioGroupIndicator,
  type RadioGroupIndicatorElement,
  type RadioGroupIndicatorProps,
} from './radio-group-indicator'
import {
  RadioGroupItem,
  type RadioGroupItemElement,
  type RadioGroupItemProps,
} from './radio-group-item'
import {
  RadioGroupItemControl,
  type RadioGroupItemControlElement,
  type RadioGroupItemControlProps,
} from './radio-group-item-control'
import { RadioGroupItemHiddenInput } from './radio-group-item-hidden-input'
import {
  RadioGroupItemText,
  type RadioGroupItemTextElement,
  type RadioGroupItemTextProps,
} from './radio-group-item-text'
import {
  RadioGroupLabel,
  type RadioGroupLabelElement,
  type RadioGroupLabelProps,
} from './radio-group-label'
import {
  RadioGroupRoot,
  type RadioGroupRootElement,
  type RadioGroupRootProps,
} from './radio-group-root'
import {
  RadioGroupRootProvider,
  type RadioGroupRootProviderElement,
  type RadioGroupRootProviderProps,
} from './radio-group-root-provider'

const { withProvider, withContext } = createStyleContext(radioGroup)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof RadioGroupRootProviderElement,
  Assign<RadioGroupRootProviderProps, RadioGroupVariantProps>
>(RadioGroupRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof RadioGroupRootElement,
  Assign<RadioGroupRootProps, RadioGroupVariantProps>
>(RadioGroupRoot, 'root')

export const Indicator = withContext<typeof RadioGroupIndicatorElement, RadioGroupIndicatorProps>(
  RadioGroupIndicator,
  'indicator',
)

export const ItemControl = withContext<
  typeof RadioGroupItemControlElement,
  RadioGroupItemControlProps
>(RadioGroupItemControl, 'itemControl')

export const Item = withContext<typeof RadioGroupItemElement, RadioGroupItemProps>(
  RadioGroupItem,
  'item',
)

export const ItemText = withContext<typeof RadioGroupItemTextElement, RadioGroupItemTextProps>(
  RadioGroupItemText,
  'itemText',
)

export const Label = withContext<typeof RadioGroupLabelElement, RadioGroupLabelProps>(
  RadioGroupLabel,
  'label',
)

export { RadioGroupContext as Context, RadioGroupItemHiddenInput as ItemHiddenInput }
