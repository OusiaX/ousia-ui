"use client";
import type { Assign } from "@ousia-ui/ark";
import { type RadioGroupVariantProps, radioGroup } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { RadioGroupRootProvider, type RadioGroupRootProviderBaseProps } from './radio-group-root-provider';
import { RadioGroupRoot, type RadioGroupRootBaseProps } from './radio-group-root';
import { RadioGroupIndicator, type RadioGroupIndicatorBaseProps } from './radio-group-indicator';
import { RadioGroupItemControl, type RadioGroupItemControlBaseProps } from './radio-group-item-control';
import { RadioGroupItem, type RadioGroupItemBaseProps } from './radio-group-item';
import { RadioGroupItemText, type RadioGroupItemTextBaseProps } from './radio-group-item-text';
import { RadioGroupLabel, type RadioGroupLabelBaseProps } from './radio-group-label';
import { RadioGroupItemHiddenInput } from './radio-group-item-hidden-input';
import { RadioGroupContext } from './radio-group-context';

const { withProvider, withContext } = createStyleContext(radioGroup);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, RadioGroupRootProviderBaseProps>,
    RadioGroupVariantProps
  >
>(RadioGroupRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, RadioGroupRootBaseProps>,
    RadioGroupVariantProps
  >
>(RadioGroupRoot, "root");

export const Indicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, RadioGroupIndicatorBaseProps>
>(RadioGroupIndicator, "indicator");

export const ItemControl = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, RadioGroupItemControlBaseProps>
>(RadioGroupItemControl, "itemControl");

export const Item = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, RadioGroupItemBaseProps>
>(RadioGroupItem, "item");

export const ItemText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, RadioGroupItemTextBaseProps>
>(RadioGroupItemText, "itemText");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, RadioGroupLabelBaseProps>
>(RadioGroupLabel, "label");

export {
  RadioGroupContext as Context,
  RadioGroupItemHiddenInput as ItemHiddenInput,
};

