'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type MenuVariantProps, menu } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { MenuArrow } from './menu-arrow'
import { MenuArrowTip } from './menu-arrow-tip'
import { MenuCheckboxItem } from './menu-checkbox-item'
import { MenuContent } from './menu-content'
import { MenuContextTrigger } from './menu-context-trigger'
import { MenuIndicator } from './menu-indicator'
import { MenuItem } from './menu-item'
import { MenuItemGroup } from './menu-item-group'
import { MenuItemGroupLabel } from './menu-item-group-label'
import { MenuItemIndicator } from './menu-item-indicator'
import { MenuItemText } from './menu-item-text'
import { MenuPositioner } from './menu-positioner'
import { MenuRadioItem } from './menu-radio-item'
import { MenuRadioItemGroup } from './menu-radio-item-group'
import { MenuRoot, type MenuRootProps } from './menu-root'
import { MenuRootProvider, type MenuRootProviderProps } from './menu-root-provider'
import { MenuSeparator } from './menu-separator'
import { MenuTrigger } from './menu-trigger'
import { MenuTriggerItem } from './menu-trigger-item'

const { withRootProvider, withContext } = createStyleContext(menu)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider =
  withRootProvider<Assign<MenuRootProviderProps, MenuVariantProps>>(MenuRootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<MenuRootProps, MenuVariantProps>>(MenuRoot)

export const Arrow = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  MenuArrow,
  'arrow',
)

export const ArrowTip = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(MenuArrowTip, 'arrowTip')

export const CheckboxItem = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(MenuCheckboxItem, 'item')

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(MenuContent, 'content')

export const ContextTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(MenuContextTrigger, 'contextTrigger')

export const Indicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(MenuIndicator, 'indicator')

export const ItemGroupLabel = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(MenuItemGroupLabel, 'itemGroupLabel')

export const ItemGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(MenuItemGroup, 'itemGroup')

export const ItemIndicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(MenuItemIndicator, 'itemIndicator')

export const Item = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  MenuItem,
  'item',
)

export const ItemText = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(MenuItemText, 'itemText')

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(MenuPositioner, 'positioner')

export const RadioItemGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(MenuRadioItemGroup, 'itemGroup')

export const RadioItem = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(MenuRadioItem, 'item')

export const Separator = withContext<
  HTMLHRElement,
  Assign<HTMLStyledProps<'hr'>, PolymorphicProps>
>(MenuSeparator, 'separator')

export const TriggerItem = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(MenuTriggerItem, 'triggerItem')

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(MenuTrigger, 'trigger')

export { MenuContext as Context } from './menu-context'
