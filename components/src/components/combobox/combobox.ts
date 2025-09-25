"use client";
import type { Assign } from "@ousia-ui/ark";
import { type ComboboxVariantProps, combobox } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { ComboboxRootProvider, type ComboboxRootProviderBaseProps } from './combobox-root-provider'
import { ComboboxRoot, type ComboboxRootBaseProps } from './combobox-root'
import { ComboboxClearTrigger, type ComboboxClearTriggerBaseProps } from './combobox-clear-trigger'
import { ComboboxContent, type ComboboxContentBaseProps } from './combobox-content'
import { ComboboxControl, type ComboboxControlBaseProps } from './combobox-control'
import { ComboboxInput, type ComboboxInputBaseProps } from './combobox-input'
import { ComboboxItemGroupLabel, type ComboboxItemGroupLabelBaseProps } from './combobox-item-group-label'
import { ComboboxItemGroup, type ComboboxItemGroupBaseProps } from './combobox-item-group'
import { ComboboxItemIndicator, type ComboboxItemIndicatorBaseProps } from './combobox-item-indicator'
import { ComboboxItem, type ComboboxItemBaseProps } from './combobox-item'
import { ComboboxItemText, type ComboboxItemTextBaseProps } from './combobox-item-text'
import { ComboboxLabel, type ComboboxLabelBaseProps } from './combobox-label'
import { ComboboxList, type ComboboxListBaseProps } from './combobox-list'
import { ComboboxPositioner, type ComboboxPositionerBaseProps } from './combobox-positioner'
import { ComboboxTrigger, type ComboboxTriggerBaseProps } from './combobox-trigger'
import type { CollectionItem } from "@zag-js/collection";

const { withProvider, withContext } = createStyleContext(combobox);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, ComboboxRootProviderBaseProps<CollectionItem>>,
    ComboboxVariantProps
  >
>(ComboboxRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, ComboboxRootBaseProps<CollectionItem>>,
    ComboboxVariantProps
  >
>(ComboboxRoot, "root");

export const ClearTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, ComboboxClearTriggerBaseProps>
>(ComboboxClearTrigger, "clearTrigger");

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ComboboxContentBaseProps>
>(ComboboxContent, "content");

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ComboboxControlBaseProps>
>(ComboboxControl, "control");

export const Input = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<"input">, ComboboxInputBaseProps>
>(ComboboxInput, "input");

export const ItemGroupLabel = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ComboboxItemGroupLabelBaseProps>
>(ComboboxItemGroupLabel, "itemGroupLabel");

export const ItemGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ComboboxItemGroupBaseProps>
>(ComboboxItemGroup, "itemGroup");

export const ItemIndicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ComboboxItemIndicatorBaseProps>
>(ComboboxItemIndicator, "itemIndicator");

export const Item = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ComboboxItemBaseProps>
>(ComboboxItem, "item");

export const ItemText = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"span">, ComboboxItemTextBaseProps>
>(ComboboxItemText, "itemText");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, ComboboxLabelBaseProps>
>(ComboboxLabel, "label");

export const List = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ComboboxListBaseProps>
>(ComboboxList, "list");

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ComboboxPositionerBaseProps>
>(ComboboxPositioner, "positioner");

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, ComboboxTriggerBaseProps>
>(ComboboxTrigger, "trigger");

export { ComboboxContext as Context } from "./combobox-context";

export type {
  HighlightChangeDetails,
  InputValueChangeDetails,
  OpenChangeDetails,
  ValueChangeDetails,
  SelectionDetails,
} from '@zag-js/combobox';
