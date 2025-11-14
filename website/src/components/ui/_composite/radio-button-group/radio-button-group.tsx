'use client'
import type { Assign } from '@ousia-ui/ark'
import { type RadioButtonGroupVariantProps, radioButtonGroup } from 'styled-system/recipes'
import {
  RadioGroupIndicator,
  type RadioGroupIndicatorElement,
  type RadioGroupIndicatorProps,
} from '~/components/ui/radio-group/radio-group-indicator'
import {
  RadioGroupItem,
  type RadioGroupItemElement,
  type RadioGroupItemProps,
} from '~/components/ui/radio-group/radio-group-item'
import {
  RadioGroupItemControl,
  type RadioGroupItemControlElement,
  type RadioGroupItemControlProps,
} from '~/components/ui/radio-group/radio-group-item-control'
import {
  RadioGroupItemText,
  type RadioGroupItemTextElement,
  type RadioGroupItemTextProps,
} from '~/components/ui/radio-group/radio-group-item-text'
import {
  RadioGroupLabel,
  type RadioGroupLabelElement,
  type RadioGroupLabelProps,
} from '~/components/ui/radio-group/radio-group-label'
import {
  RadioGroupRoot,
  type RadioGroupRootElement,
  type RadioGroupRootProps,
} from '~/components/ui/radio-group/radio-group-root'
import { createStyleContext } from '~/utils/create-style-context'

const { withProvider, withContext } = createStyleContext(radioButtonGroup)

export type RootProps = Assign<RadioGroupRootProps, RadioButtonGroupVariantProps>
export const Root = withProvider<typeof RadioGroupRootElement, RootProps>(RadioGroupRoot, 'root')

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

export { RadioGroupContext as Context } from '~/components/ui/radio-group/radio-group-context'

export { RadioGroupItemHiddenInput as ItemHiddenInput } from '~/components/ui/radio-group/radio-group-item-hidden-input'
