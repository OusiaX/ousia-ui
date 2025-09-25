"use client";
import type { Assign } from "@ousia-ui/ark";
import { type HoverCardVariantProps, hoverCard } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { HoverCardRootProvider, type HoverCardRootProviderBaseProps } from "./hover-card-root-provider";
import { HoverCardRoot, type HoverCardRootBaseProps } from "./hover-card-root";
import { HoverCardArrow, type HoverCardArrowBaseProps } from "./hover-card-arrow";
import { HoverCardArrowTip, type HoverCardArrowTipBaseProps } from "./hover-card-arrow-tip";
import { HoverCardContent, type HoverCardContentBaseProps } from "./hover-card-content";
import { HoverCardPositioner, type HoverCardPositionerBaseProps } from "./hover-card-positioner";
import { HoverCardTrigger, type HoverCardTriggerBaseProps } from "./hover-card-trigger";

const { withRootProvider, withContext } = createStyleContext(hoverCard);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withRootProvider<
  Assign<
    Assign<HTMLStyledProps<"div">, HoverCardRootProviderBaseProps>,
    HoverCardVariantProps
  >
>(HoverCardRootProvider);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider<
  Assign<
    Assign<HTMLStyledProps<"div">, HoverCardRootBaseProps>,
    HoverCardVariantProps
  >
>(HoverCardRoot);

export const Arrow = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, HoverCardArrowBaseProps>
>(HoverCardArrow, "arrow");

export const ArrowTip = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, HoverCardArrowTipBaseProps>
>(HoverCardArrowTip, "arrowTip");

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, HoverCardContentBaseProps>
>(HoverCardContent, "content");

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, HoverCardPositionerBaseProps>
>(HoverCardPositioner, "positioner");

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, HoverCardTriggerBaseProps>
>(HoverCardTrigger, "trigger");

export { HoverCardContext as Context } from "./hover-card-context";
