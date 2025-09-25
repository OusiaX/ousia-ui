"use client";
import type { Assign } from '@ousia-ui/ark';
import { MenuRootProvider, type MenuRootProviderProps } from './menu-root-provider';
import { MenuRoot, type MenuRootProps } from './menu-root';
import { MenuArrow, type MenuArrowBaseProps } from './menu-arrow';
import { MenuArrowTip, type MenuArrowTipBaseProps } from './menu-arrow-tip';
import { MenuCheckboxItem, type MenuCheckboxItemBaseProps } from './menu-checkbox-item';
import { MenuContent, type MenuContentBaseProps } from './menu-content';
import { MenuContextTrigger, type MenuContextTriggerBaseProps } from './menu-context-trigger';
import { MenuIndicator, type MenuIndicatorBaseProps } from './menu-indicator';
import { MenuItemGroupLabel, type MenuItemGroupLabelBaseProps } from './menu-item-group-label';
import { MenuItemGroup, type MenuItemGroupBaseProps } from './menu-item-group';
import { MenuItemIndicator, type MenuItemIndicatorBaseProps } from './menu-item-indicator';
import { MenuItem, type MenuItemBaseProps } from './menu-item';
import { MenuItemText, type MenuItemTextBaseProps } from './menu-item-text';
import { MenuPositioner, type MenuPositionerBaseProps } from './menu-positioner';
import { MenuRadioItemGroup, type MenuRadioItemGroupBaseProps } from './menu-radio-item-group';
import { MenuRadioItem, type MenuRadioItemBaseProps } from './menu-radio-item';
import { MenuSeparator, type MenuSeparatorBaseProps } from './menu-separator';
import { MenuTriggerItem, type MenuTriggerItemBaseProps } from './menu-trigger-item';
import { MenuTrigger, type MenuTriggerBaseProps } from './menu-trigger';
import { type MenuVariantProps, menu } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";

const { withRootProvider, withContext } = createStyleContext(menu);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withRootProvider<
  Assign<MenuRootProviderProps, MenuVariantProps>
>(MenuRootProvider);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider<Assign<MenuRootProps, MenuVariantProps>>(
  MenuRoot
);

export const Arrow = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, MenuArrowBaseProps>
>(MenuArrow, "arrow");

export const ArrowTip = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, MenuArrowTipBaseProps>
>(MenuArrowTip, "arrowTip");

export const CheckboxItem = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, MenuCheckboxItemBaseProps>
>(MenuCheckboxItem, "item");

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, MenuContentBaseProps>
>(MenuContent, "content");

export const ContextTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, MenuContextTriggerBaseProps>
>(MenuContextTrigger, "contextTrigger");

export const Indicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, MenuIndicatorBaseProps>
>(MenuIndicator, "indicator");

export const ItemGroupLabel = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, MenuItemGroupLabelBaseProps>
>(MenuItemGroupLabel, "itemGroupLabel");

export const ItemGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, MenuItemGroupBaseProps>
>(MenuItemGroup, "itemGroup");

export const ItemIndicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, MenuItemIndicatorBaseProps>
>(MenuItemIndicator, "itemIndicator");

export const Item = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, MenuItemBaseProps>
>(MenuItem, "item");

export const ItemText = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, MenuItemTextBaseProps>
>(MenuItemText, "itemText");

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, MenuPositionerBaseProps>
>(MenuPositioner, "positioner");

export const RadioItemGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, MenuRadioItemGroupBaseProps>
>(MenuRadioItemGroup, "itemGroup");

export const RadioItem = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, MenuRadioItemBaseProps>
>(MenuRadioItem, "item");

export const Separator = withContext<
  HTMLHRElement,
  Assign<HTMLStyledProps<"hr">, MenuSeparatorBaseProps>
>(MenuSeparator, "separator");

export const TriggerItem = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, MenuTriggerItemBaseProps>
>(MenuTriggerItem, "triggerItem");

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, MenuTriggerBaseProps>
>(MenuTrigger, "trigger");

export { MenuContext as Context } from "./menu-context";
