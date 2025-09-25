"use client";
import type { Assign } from "@ousia-ui/ark";
import { type TooltipVariantProps, tooltip } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { TooltipRootProvider, type TooltipRootProviderBaseProps } from './tooltip-root-provider';
import { TooltipRoot, type TooltipRootBaseProps } from './tooltip-root';
import { TooltipArrow, type TooltipArrowBaseProps } from './tooltip-arrow';
import { TooltipArrowTip, type TooltipArrowTipBaseProps } from './tooltip-arrow-tip';
import { TooltipContent, type TooltipContentBaseProps } from './tooltip-content';
import { TooltipPositioner, type TooltipPositionerBaseProps } from './tooltip-positioner';
import { TooltipTrigger, type TooltipTriggerBaseProps } from './tooltip-trigger';

const { withRootProvider, withContext } = createStyleContext(tooltip);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withRootProvider<
  Assign<TooltipRootProviderBaseProps, TooltipVariantProps>
>(TooltipRootProvider);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider<
  Assign<TooltipRootBaseProps, TooltipVariantProps>
>(TooltipRoot);

export const Arrow = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TooltipArrowBaseProps>
>(TooltipArrow, "arrow");

export const ArrowTip = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TooltipArrowTipBaseProps>
>(TooltipArrowTip, "arrowTip");

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TooltipContentBaseProps>
>(TooltipContent, "content");

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TooltipPositionerBaseProps>
>(TooltipPositioner, "positioner");

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, TooltipTriggerBaseProps>
>(TooltipTrigger, "trigger");

export { TooltipContext as Context } from "./tooltip-context";
