"use client";
import type { Assign } from "@ousia-ui/ark";
import { type CarouselVariantProps, carousel } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { CarouselRootProvider, type CarouselRootProviderBaseProps } from './carousel-root-provider';
import { CarouselRoot, type CarouselRootBaseProps } from './carousel-root';
import { CarouselControl, type CarouselControlBaseProps } from './carousel-control';
import { CarouselIndicatorGroup, type CarouselIndicatorGroupBaseProps } from './carousel-indicator-group';
import { CarouselIndicator, type CarouselIndicatorBaseProps } from './carousel-indicator';
import { CarouselItemGroup, type CarouselItemGroupBaseProps } from './carousel-item-group';
import { CarouselItem, type CarouselItemBaseProps } from './carousel-item';
import { CarouselNextTrigger, type CarouselNextTriggerBaseProps } from './carousel-next-trigger';
import { CarouselPrevTrigger, type CarouselPrevTriggerBaseProps } from './carousel-prev-trigger';

const { withProvider, withContext } = createStyleContext(carousel);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, CarouselRootProviderBaseProps>,
    CarouselVariantProps
  >
>(CarouselRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, CarouselRootBaseProps>,
    CarouselVariantProps
  >
>(CarouselRoot, "root");

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, CarouselControlBaseProps>
>(CarouselControl, "control");

export const IndicatorGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, CarouselIndicatorGroupBaseProps>
>(CarouselIndicatorGroup, "indicatorGroup");

export const Indicator = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, CarouselIndicatorBaseProps>
>(CarouselIndicator, "indicator");

export const ItemGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, CarouselItemGroupBaseProps>
>(CarouselItemGroup, "itemGroup");

export const Item = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, CarouselItemBaseProps>
>(CarouselItem, "item");

export const NextTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, CarouselNextTriggerBaseProps>
>(CarouselNextTrigger, "nextTrigger");

export const PrevTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, CarouselPrevTriggerBaseProps>
>(CarouselPrevTrigger, "prevTrigger");

export { CarouselContext as Context } from "./carousel-context";