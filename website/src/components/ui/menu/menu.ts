'use client'
import type { Assign } from '@ousia-ui/ark'
import { type MenuVariantProps, menu } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { MenuArrow, type MenuArrowElement, type MenuArrowProps } from './menu-arrow'
import { MenuArrowTip, type MenuArrowTipElement, type MenuArrowTipProps } from './menu-arrow-tip'
import {
  MenuCheckboxItem,
  type MenuCheckboxItemElement,
  type MenuCheckboxItemProps,
} from './menu-checkbox-item'
import { MenuContent, type MenuContentElement, type MenuContentProps } from './menu-content'
import {
  MenuContextTrigger,
  type MenuContextTriggerElement,
  type MenuContextTriggerProps,
} from './menu-context-trigger'
import { MenuIndicator, type MenuIndicatorElement, type MenuIndicatorProps } from './menu-indicator'
import { MenuItem, type MenuItemElement, type MenuItemProps } from './menu-item'
import {
  MenuItemGroup,
  type MenuItemGroupElement,
  type MenuItemGroupProps,
} from './menu-item-group'
import {
  MenuItemGroupLabel,
  type MenuItemGroupLabelElement,
  type MenuItemGroupLabelProps,
} from './menu-item-group-label'
import {
  MenuItemIndicator,
  type MenuItemIndicatorElement,
  type MenuItemIndicatorProps,
} from './menu-item-indicator'
import { MenuItemText, type MenuItemTextElement, type MenuItemTextProps } from './menu-item-text'
import {
  MenuPositioner,
  type MenuPositionerElement,
  type MenuPositionerProps,
} from './menu-positioner'
import {
  MenuRadioItem,
  type MenuRadioItemElement,
  type MenuRadioItemProps,
} from './menu-radio-item'
import {
  MenuRadioItemGroup,
  type MenuRadioItemGroupElement,
  type MenuRadioItemGroupProps,
} from './menu-radio-item-group'
import { MenuRoot, type MenuRootProps } from './menu-root'
import { MenuRootProvider, type MenuRootProviderProps } from './menu-root-provider'
import { MenuSeparator, type MenuSeparatorElement, type MenuSeparatorProps } from './menu-separator'
import { MenuTrigger, type MenuTriggerElement, type MenuTriggerProps } from './menu-trigger'
import {
  MenuTriggerItem,
  type MenuTriggerItemElement,
  type MenuTriggerItemProps,
} from './menu-trigger-item'

const { withRootProvider, withContext } = createStyleContext(menu)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider =
  withRootProvider<Assign<MenuRootProviderProps, MenuVariantProps>>(MenuRootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<MenuRootProps, MenuVariantProps>>(MenuRoot)

export const Arrow = withContext<typeof MenuArrowElement, MenuArrowProps>(MenuArrow, 'arrow')

export const ArrowTip = withContext<typeof MenuArrowTipElement, MenuArrowTipProps>(
  MenuArrowTip,
  'arrowTip',
)

export const CheckboxItem = withContext<typeof MenuCheckboxItemElement, MenuCheckboxItemProps>(
  MenuCheckboxItem,
  'item',
)

export const Content = withContext<typeof MenuContentElement, MenuContentProps>(
  MenuContent,
  'content',
)

export const ContextTrigger = withContext<
  typeof MenuContextTriggerElement,
  MenuContextTriggerProps
>(MenuContextTrigger, 'contextTrigger')

export const Indicator = withContext<typeof MenuIndicatorElement, MenuIndicatorProps>(
  MenuIndicator,
  'indicator',
)

export const ItemGroupLabel = withContext<
  typeof MenuItemGroupLabelElement,
  MenuItemGroupLabelProps
>(MenuItemGroupLabel, 'itemGroupLabel')

export const ItemGroup = withContext<typeof MenuItemGroupElement, MenuItemGroupProps>(
  MenuItemGroup,
  'itemGroup',
)

export const ItemIndicator = withContext<typeof MenuItemIndicatorElement, MenuItemIndicatorProps>(
  MenuItemIndicator,
  'itemIndicator',
)

export const Item = withContext<typeof MenuItemElement, MenuItemProps>(MenuItem, 'item')

export const ItemText = withContext<typeof MenuItemTextElement, MenuItemTextProps>(
  MenuItemText,
  'itemText',
)

export const Positioner = withContext<typeof MenuPositionerElement, MenuPositionerProps>(
  MenuPositioner,
  'positioner',
)

export const RadioItemGroup = withContext<
  typeof MenuRadioItemGroupElement,
  MenuRadioItemGroupProps
>(MenuRadioItemGroup, 'itemGroup')

export const RadioItem = withContext<typeof MenuRadioItemElement, MenuRadioItemProps>(
  MenuRadioItem,
  'item',
)

export const Separator = withContext<typeof MenuSeparatorElement, MenuSeparatorProps>(
  MenuSeparator,
  'separator',
)

export const TriggerItem = withContext<typeof MenuTriggerItemElement, MenuTriggerItemProps>(
  MenuTriggerItem,
  'triggerItem',
)

export const Trigger = withContext<typeof MenuTriggerElement, MenuTriggerProps>(
  MenuTrigger,
  'trigger',
)

export { MenuContext as Context } from './menu-context'
