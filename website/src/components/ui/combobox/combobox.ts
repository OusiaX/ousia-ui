'use client'
import type { Assign } from '@ousia-ui/ark'
import type { CollectionItem } from '@zag-js/collection'
import { type ComboboxVariantProps, combobox } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  ComboboxClearTrigger,
  type ComboboxClearTriggerElement,
  type ComboboxClearTriggerProps,
} from './combobox-clear-trigger'
import {
  ComboboxContent,
  type ComboboxContentElement,
  type ComboboxContentProps,
} from './combobox-content'
import {
  ComboboxControl,
  type ComboboxControlElement,
  type ComboboxControlProps,
} from './combobox-control'
import { ComboboxInput, type ComboboxInputElement, type ComboboxInputProps } from './combobox-input'
import { ComboboxItem, type ComboboxItemElement, type ComboboxItemProps } from './combobox-item'
import {
  ComboboxItemGroup,
  type ComboboxItemGroupElement,
  type ComboboxItemGroupProps,
} from './combobox-item-group'
import {
  ComboboxItemGroupLabel,
  type ComboboxItemGroupLabelElement,
  type ComboboxItemGroupLabelProps,
} from './combobox-item-group-label'
import {
  ComboboxItemIndicator,
  type ComboboxItemIndicatorElement,
  type ComboboxItemIndicatorProps,
} from './combobox-item-indicator'
import {
  ComboboxItemText,
  type ComboboxItemTextElement,
  type ComboboxItemTextProps,
} from './combobox-item-text'
import { ComboboxLabel, type ComboboxLabelElement, type ComboboxLabelProps } from './combobox-label'
import { ComboboxList, type ComboboxListElement, type ComboboxListProps } from './combobox-list'
import {
  ComboboxPositioner,
  type ComboboxPositionerElement,
  type ComboboxPositionerProps,
} from './combobox-positioner'
import { ComboboxRoot, type ComboboxRootElement, type ComboboxRootProps } from './combobox-root'
import {
  ComboboxRootProvider,
  type ComboboxRootProviderElement,
  type ComboboxRootProviderProps,
} from './combobox-root-provider'
import {
  ComboboxTrigger,
  type ComboboxTriggerElement,
  type ComboboxTriggerProps,
} from './combobox-trigger'

const { withProvider, withContext } = createStyleContext(combobox)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof ComboboxRootProviderElement,
  Assign<ComboboxRootProviderProps<CollectionItem>, ComboboxVariantProps>
>(ComboboxRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof ComboboxRootElement,
  Assign<ComboboxRootProps<CollectionItem>, ComboboxVariantProps>
>(ComboboxRoot, 'root')

export const ClearTrigger = withContext<
  typeof ComboboxClearTriggerElement,
  ComboboxClearTriggerProps
>(ComboboxClearTrigger, 'clearTrigger')

export const Content = withContext<typeof ComboboxContentElement, ComboboxContentProps>(
  ComboboxContent,
  'content',
)

export const Control = withContext<typeof ComboboxControlElement, ComboboxControlProps>(
  ComboboxControl,
  'control',
)

export const Input = withContext<typeof ComboboxInputElement, ComboboxInputProps>(
  ComboboxInput,
  'input',
)

export const ItemGroupLabel = withContext<
  typeof ComboboxItemGroupLabelElement,
  ComboboxItemGroupLabelProps
>(ComboboxItemGroupLabel, 'itemGroupLabel')

export const ItemGroup = withContext<typeof ComboboxItemGroupElement, ComboboxItemGroupProps>(
  ComboboxItemGroup,
  'itemGroup',
)

export const ItemIndicator = withContext<
  typeof ComboboxItemIndicatorElement,
  ComboboxItemIndicatorProps
>(ComboboxItemIndicator, 'itemIndicator')

export const Item = withContext<typeof ComboboxItemElement, ComboboxItemProps>(ComboboxItem, 'item')

export const ItemText = withContext<typeof ComboboxItemTextElement, ComboboxItemTextProps>(
  ComboboxItemText,
  'itemText',
)

export const Label = withContext<typeof ComboboxLabelElement, ComboboxLabelProps>(
  ComboboxLabel,
  'label',
)

export const List = withContext<typeof ComboboxListElement, ComboboxListProps>(ComboboxList, 'list')

export const Positioner = withContext<typeof ComboboxPositionerElement, ComboboxPositionerProps>(
  ComboboxPositioner,
  'positioner',
)

export const Trigger = withContext<typeof ComboboxTriggerElement, ComboboxTriggerProps>(
  ComboboxTrigger,
  'trigger',
)

export { ComboboxContext as Context } from './combobox-context'

export type {
  HighlightChangeDetails,
  InputValueChangeDetails,
  OpenChangeDetails,
  ValueChangeDetails,
  SelectionDetails,
} from '@zag-js/combobox'
