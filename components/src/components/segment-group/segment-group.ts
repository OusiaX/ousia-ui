"use client";
import type { Assign } from "@ousia-ui/ark";
import {
  type SegmentGroupVariantProps,
  segmentGroup,
} from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { SegmentGroupRootProvider, type SegmentGroupRootProviderBaseProps } from './segment-group-root-provider';
import { SegmentGroupRoot, type SegmentGroupRootBaseProps } from './segment-group-root';
import { SegmentGroupIndicator, type SegmentGroupIndicatorBaseProps } from './segment-group-indicator';
import { SegmentGroupItemControl, type SegmentGroupItemControlBaseProps } from './segment-group-item-control';
import { SegmentGroupItem, type SegmentGroupItemBaseProps } from './segment-group-item';
import { SegmentGroupItemText, type SegmentGroupItemTextBaseProps } from './segment-group-item-text';
import { SegmentGroupLabel, type SegmentGroupLabelBaseProps } from './segment-group-label';
import { SegmentGroupItemHiddenInput } from './segment-group-item-hidden-input';
import { SegmentGroupContext } from './segment-group-context';

const { withProvider, withContext } = createStyleContext(segmentGroup);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, SegmentGroupRootProviderBaseProps>,
    SegmentGroupVariantProps
  >
>(SegmentGroupRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, SegmentGroupRootBaseProps>,
    SegmentGroupVariantProps
  >
>(SegmentGroupRoot, "root");

export const Indicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, SegmentGroupIndicatorBaseProps>
>(SegmentGroupIndicator, "indicator");

export const ItemControl = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, SegmentGroupItemControlBaseProps>
>(SegmentGroupItemControl, "itemControl");

export const Item = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, SegmentGroupItemBaseProps>
>(SegmentGroupItem, "item");

export const ItemText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, SegmentGroupItemTextBaseProps>
>(SegmentGroupItemText, "itemText");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, SegmentGroupLabelBaseProps>
>(SegmentGroupLabel, "label");

export {
  SegmentGroupContext as Context,
  SegmentGroupItemHiddenInput as ItemHiddenInput,
};

