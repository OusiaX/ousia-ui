'use client'
import type { Assign } from '@ousia-ui/ark'
import type { CollectionItem } from '@zag-js/collection'
import { type SelectVariantProps, select } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  SelectClearTrigger,
  type SelectClearTriggerElement,
  type SelectClearTriggerProps,
} from './select-clear-trigger'
import { SelectContent, type SelectContentElement, type SelectContentProps } from './select-content'
import { SelectContext } from './select-context'
import { SelectControl, type SelectControlElement, type SelectControlProps } from './select-control'
import { SelectHiddenSelect } from './select-hidden-select'
import {
  SelectIndicator,
  type SelectIndicatorElement,
  type SelectIndicatorProps,
} from './select-indicator'
import { SelectItem, type SelectItemElement, type SelectItemProps } from './select-item'
import {
  SelectItemGroup,
  type SelectItemGroupElement,
  type SelectItemGroupProps,
} from './select-item-group'
import {
  SelectItemGroupLabel,
  type SelectItemGroupLabelElement,
  type SelectItemGroupLabelProps,
} from './select-item-group-label'
import {
  SelectItemIndicator,
  type SelectItemIndicatorElement,
  type SelectItemIndicatorProps,
} from './select-item-indicator'
import {
  SelectItemText,
  type SelectItemTextElement,
  type SelectItemTextProps,
} from './select-item-text'
import { SelectLabel, type SelectLabelElement, type SelectLabelProps } from './select-label'
import { SelectList, type SelectListElement, type SelectListProps } from './select-list'
import {
  SelectPositioner,
  type SelectPositionerElement,
  type SelectPositionerProps,
} from './select-positioner'
import { SelectRoot, type SelectRootElement, type SelectRootProps } from './select-root'
import {
  SelectRootProvider,
  type SelectRootProviderElement,
  type SelectRootProviderProps,
} from './select-root-provider'
import { SelectTrigger, type SelectTriggerElement, type SelectTriggerProps } from './select-trigger'
import {
  SelectValueText,
  type SelectValueTextElement,
  type SelectValueTextProps,
} from './select-value-text'

const { withProvider, withContext } = createStyleContext(select)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof SelectRootProviderElement,
  Assign<SelectRootProviderProps<CollectionItem>, SelectVariantProps>
>(SelectRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof SelectRootElement,
  Assign<SelectRootProps<CollectionItem>, SelectVariantProps>
>(SelectRoot, 'root')

export const ClearTrigger = withContext<typeof SelectClearTriggerElement, SelectClearTriggerProps>(
  SelectClearTrigger,
  'clearTrigger',
)

export const Content = withContext<typeof SelectContentElement, SelectContentProps>(
  SelectContent,
  'content',
)

export const Control = withContext<typeof SelectControlElement, SelectControlProps>(
  SelectControl,
  'control',
)

export const Indicator = withContext<typeof SelectIndicatorElement, SelectIndicatorProps>(
  SelectIndicator,
  'indicator',
)

export const ItemGroupLabel = withContext<
  typeof SelectItemGroupLabelElement,
  SelectItemGroupLabelProps
>(SelectItemGroupLabel, 'itemGroupLabel')

export const ItemGroup = withContext<typeof SelectItemGroupElement, SelectItemGroupProps>(
  SelectItemGroup,
  'itemGroup',
)

export const ItemIndicator = withContext<
  typeof SelectItemIndicatorElement,
  SelectItemIndicatorProps
>(SelectItemIndicator, 'itemIndicator')

export const Item = withContext<typeof SelectItemElement, SelectItemProps>(SelectItem, 'item')

export const ItemText = withContext<typeof SelectItemTextElement, SelectItemTextProps>(
  SelectItemText,
  'itemText',
)

export const Label = withContext<typeof SelectLabelElement, SelectLabelProps>(SelectLabel, 'label')

export const List = withContext<typeof SelectListElement, SelectListProps>(SelectList, 'list')

export const Positioner = withContext<typeof SelectPositionerElement, SelectPositionerProps>(
  SelectPositioner,
  'positioner',
)

export const Trigger = withContext<typeof SelectTriggerElement, SelectTriggerProps>(
  SelectTrigger,
  'trigger',
)

export const ValueText = withContext<typeof SelectValueTextElement, SelectValueTextProps>(
  SelectValueText,
  'valueText',
)

export { SelectContext as Context, SelectHiddenSelect as HiddenSelect }
