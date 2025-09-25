"use client";
import type { Assign } from "@ousia-ui/ark";
import { type PopoverVariantProps, popover } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { PopoverAnchor, type PopoverAnchorBaseProps } from './popover-anchor';
import { PopoverArrow, type PopoverArrowBaseProps } from './popover-arrow';
import { PopoverArrowTip, type PopoverArrowTipBaseProps } from './popover-arrow-tip';
import { PopoverCloseTrigger, type PopoverCloseTriggerBaseProps } from './popover-close-trigger';
import { PopoverContent, type PopoverContentBaseProps } from './popover-content';
import { PopoverDescription, type PopoverDescriptionBaseProps } from './popover-description';
import { PopoverIndicator, type PopoverIndicatorBaseProps } from './popover-indicator';
import { PopoverPositioner, type PopoverPositionerBaseProps } from './popover-positioner';
import { PopoverRootProvider, type PopoverRootProviderBaseProps } from './popover-root-provider';
import { PopoverRoot, type PopoverRootBaseProps } from './popover-root';
import { PopoverTitle, type PopoverTitleBaseProps } from './popover-title';
import { PopoverTrigger, type PopoverTriggerBaseProps } from './popover-trigger';

const { withRootProvider, withContext } = createStyleContext(popover);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withRootProvider<
  Assign<PopoverRootProviderBaseProps, PopoverVariantProps>
>(PopoverRootProvider);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider<
  Assign<PopoverRootBaseProps, PopoverVariantProps>
>(PopoverRoot);

export const Anchor = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PopoverAnchorBaseProps>
>(PopoverAnchor, "anchor");

export const Arrow = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PopoverArrowBaseProps>
>(PopoverArrow, "arrow");

export const ArrowTip = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PopoverArrowTipBaseProps>
>(PopoverArrowTip, "arrowTip");

export const CloseTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, PopoverCloseTriggerBaseProps>
>(PopoverCloseTrigger, "closeTrigger");

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PopoverContentBaseProps>
>(PopoverContent, "content");

export const Description = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PopoverDescriptionBaseProps>
>(PopoverDescription, "description");

export const Indicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PopoverIndicatorBaseProps>
>(PopoverIndicator, "indicator");

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PopoverPositionerBaseProps>
>(PopoverPositioner, "positioner");

export const Title = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PopoverTitleBaseProps>
>(PopoverTitle, "title");

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, PopoverTriggerBaseProps>
>(PopoverTrigger, "trigger");

export { PopoverContext as Context } from "./popover-context";
