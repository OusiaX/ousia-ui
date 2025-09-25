"use client";
import type { Assign } from "@ousia-ui/ark";
import { type SelectVariantProps, select } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { SelectRootProvider, type SelectRootProviderBaseProps } from './select-root-provider';
import { SelectRoot, type SelectRootBaseProps } from './select-root';
import { SelectClearTrigger, type SelectClearTriggerBaseProps } from './select-clear-trigger';
import { SelectContent, type SelectContentBaseProps } from './select-content';
import { SelectControl, type SelectControlBaseProps } from './select-control';
import { SelectIndicator, type SelectIndicatorBaseProps } from './select-indicator';
import { SelectItemGroupLabel, type SelectItemGroupLabelBaseProps } from './select-item-group-label';
import { SelectItemGroup, type SelectItemGroupBaseProps } from './select-item-group';
import { SelectItemIndicator, type SelectItemIndicatorBaseProps } from './select-item-indicator';
import { SelectItem, type SelectItemBaseProps } from './select-item';
import { SelectItemText, type SelectItemTextBaseProps } from './select-item-text';
import { SelectLabel, type SelectLabelBaseProps } from './select-label';
import { SelectList, type SelectListBaseProps } from './select-list';
import { SelectPositioner, type SelectPositionerBaseProps } from './select-positioner';
import { SelectTrigger, type SelectTriggerBaseProps } from './select-trigger';
import { SelectValueText, type SelectValueTextBaseProps } from './select-value-text';
import { SelectContext } from './select-context';
import { SelectHiddenSelect } from './select-hidden-select';
import type { CollectionItem } from '@zag-js/collection';

const { withProvider, withContext } = createStyleContext(select);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<
      HTMLStyledProps<"div">,
      SelectRootProviderBaseProps<CollectionItem>
    >,
    SelectVariantProps
  >
>(SelectRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, SelectRootBaseProps<CollectionItem>>,
    SelectVariantProps
  >
>(SelectRoot, "root");

export const ClearTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, SelectClearTriggerBaseProps>
>(SelectClearTrigger, "clearTrigger");

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, SelectContentBaseProps>
>(SelectContent, "content");

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, SelectControlBaseProps>
>(SelectControl, "control");

export const Indicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, SelectIndicatorBaseProps>
>(SelectIndicator, "indicator");

export const ItemGroupLabel = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, SelectItemGroupLabelBaseProps>
>(SelectItemGroupLabel, "itemGroupLabel");

export const ItemGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, SelectItemGroupBaseProps>
>(SelectItemGroup, "itemGroup");

export const ItemIndicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, SelectItemIndicatorBaseProps>
>(SelectItemIndicator, "itemIndicator");

export const Item = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, SelectItemBaseProps>
>(SelectItem, "item");

export const ItemText = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"span">, SelectItemTextBaseProps>
>(SelectItemText, "itemText");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, SelectLabelBaseProps>
>(SelectLabel, "label");

export const List = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, SelectListBaseProps>
>(SelectList, "list");

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, SelectPositionerBaseProps>
>(SelectPositioner, "positioner");

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, SelectTriggerBaseProps>
>(SelectTrigger, "trigger");

export const ValueText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, SelectValueTextBaseProps>
>(SelectValueText, "valueText");

export {
  SelectContext as Context,
  SelectHiddenSelect as HiddenSelect,
};

