'use client'
import type { Assign } from '@ousia-ui/ark'
import { type RadioButtonGroupVariantProps, radioButtonGroup } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { RadioGroupRoot, type RadioGroupRootProps } from '~/components/radio-group/radio-group-root'
import { RadioGroupIndicator, type RadioGroupIndicatorProps } from '~/components/radio-group/radio-group-indicator'
import { RadioGroupItemControl, type RadioGroupItemControlProps } from '~/components/radio-group/radio-group-item-control'
import { RadioGroupItem, type RadioGroupItemProps } from '~/components/radio-group/radio-group-item'
import { RadioGroupItemText, type RadioGroupItemTextProps } from '~/components/radio-group/radio-group-item-text'
import { RadioGroupLabel, type RadioGroupLabelProps } from '~/components/radio-group/radio-group-label'

const { withProvider, withContext } = createStyleContext(radioButtonGroup)

export interface RootProps
  extends Assign<HTMLStyledProps<'div'>, RadioGroupRootProps>,
    RadioButtonGroupVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(RadioGroupRoot, 'root')

export const Indicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, RadioGroupIndicatorProps>
>(RadioGroupIndicator, 'indicator')

export const ItemControl = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, RadioGroupItemControlProps>
>(RadioGroupItemControl, 'itemControl')

export const Item = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, RadioGroupItemProps>
>(RadioGroupItem, 'item')

export const ItemText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, RadioGroupItemTextProps>
>(RadioGroupItemText, 'itemText')

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, RadioGroupLabelProps>
>(RadioGroupLabel, 'label')

export {
  RadioGroupContext as Context
} from "~/components/radio-group/radio-group-context"

export {
  RadioGroupItemHiddenInput as ItemHiddenInput,
} from "~/components/radio-group/radio-group-item-hidden-input"
