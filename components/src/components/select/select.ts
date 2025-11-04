'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import type { CollectionItem } from '@zag-js/collection'
import { type SelectVariantProps, select } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { SelectClearTrigger } from './select-clear-trigger'
import { SelectContent } from './select-content'
import { SelectContext } from './select-context'
import { SelectControl } from './select-control'
import { SelectHiddenSelect } from './select-hidden-select'
import { SelectIndicator } from './select-indicator'
import { SelectItem } from './select-item'
import { SelectItemGroup } from './select-item-group'
import { SelectItemGroupLabel } from './select-item-group-label'
import { SelectItemIndicator } from './select-item-indicator'
import { SelectItemText } from './select-item-text'
import { SelectLabel } from './select-label'
import { SelectList } from './select-list'
import { SelectPositioner } from './select-positioner'
import { SelectRoot, type SelectRootBaseProps } from './select-root'
import { SelectRootProvider, type SelectRootProviderBaseProps } from './select-root-provider'
import { SelectTrigger } from './select-trigger'
import { SelectValueText } from './select-value-text'

const { withProvider, withContext } = createStyleContext(select)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<'div'>, SelectRootProviderBaseProps<CollectionItem>>,
    SelectVariantProps
  >
>(SelectRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, SelectRootBaseProps<CollectionItem>>, SelectVariantProps>
>(SelectRoot, 'root')

export const ClearTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(SelectClearTrigger, 'clearTrigger')

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(SelectContent, 'content')

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(SelectControl, 'control')

export const Indicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(SelectIndicator, 'indicator')

export const ItemGroupLabel = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(SelectItemGroupLabel, 'itemGroupLabel')

export const ItemGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(SelectItemGroup, 'itemGroup')

export const ItemIndicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(SelectItemIndicator, 'itemIndicator')

export const Item = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  SelectItem,
  'item',
)

export const ItemText = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(SelectItemText, 'itemText')

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(SelectLabel, 'label')

export const List = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  SelectList,
  'list',
)

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(SelectPositioner, 'positioner')

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(SelectTrigger, 'trigger')

export const ValueText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(SelectValueText, 'valueText')

export { SelectContext as Context, SelectHiddenSelect as HiddenSelect }
