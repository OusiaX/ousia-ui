'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import type { CollectionItem } from '@zag-js/collection'
import { type ComboboxVariantProps, combobox } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { ComboboxClearTrigger } from './combobox-clear-trigger'
import { ComboboxContent } from './combobox-content'
import { ComboboxControl } from './combobox-control'
import { ComboboxInput } from './combobox-input'
import { ComboboxItem } from './combobox-item'
import { ComboboxItemGroup } from './combobox-item-group'
import { ComboboxItemGroupLabel } from './combobox-item-group-label'
import { ComboboxItemIndicator } from './combobox-item-indicator'
import { ComboboxItemText } from './combobox-item-text'
import { ComboboxLabel } from './combobox-label'
import { ComboboxList } from './combobox-list'
import { ComboboxPositioner } from './combobox-positioner'
import { ComboboxRoot } from './combobox-root'
import { ComboboxRootProvider } from './combobox-root-provider'
import { ComboboxTrigger } from './combobox-trigger'

const { withProvider, withContext } = createStyleContext(combobox)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps<CollectionItem>>, ComboboxVariantProps>
>(ComboboxRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps<CollectionItem>>, ComboboxVariantProps>
>(ComboboxRoot, 'root')

export const ClearTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(ComboboxClearTrigger, 'clearTrigger')

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ComboboxContent, 'content')

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ComboboxControl, 'control')

export const Input = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<'input'>, PolymorphicProps>
>(ComboboxInput, 'input')

export const ItemGroupLabel = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ComboboxItemGroupLabel, 'itemGroupLabel')

export const ItemGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ComboboxItemGroup, 'itemGroup')

export const ItemIndicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ComboboxItemIndicator, 'itemIndicator')

export const Item = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ComboboxItem,
  'item',
)

export const ItemText = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(ComboboxItemText, 'itemText')

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(ComboboxLabel, 'label')

export const List = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ComboboxList,
  'list',
)

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ComboboxPositioner, 'positioner')

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(ComboboxTrigger, 'trigger')

export { ComboboxContext as Context } from './combobox-context'

export type {
  HighlightChangeDetails,
  InputValueChangeDetails,
  OpenChangeDetails,
  ValueChangeDetails,
  SelectionDetails,
} from '@zag-js/combobox'
