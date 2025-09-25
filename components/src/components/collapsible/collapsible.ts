"use client";
import type { Assign } from "@ousia-ui/ark";
import {
  type CollapsibleVariantProps,
  collapsible,
} from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { CollapsibleRootProvider, type CollapsibleRootProviderBaseProps } from './collapsible-root-provider';
import { CollapsibleRoot, type CollapsibleRootBaseProps } from './collapsible-root';
import { CollapsibleContent, type CollapsibleContentBaseProps } from './collapsible-content';
import { CollapsibleTrigger, type CollapsibleTriggerBaseProps } from './collapsible-trigger';

const { withProvider, withContext } = createStyleContext(collapsible);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, CollapsibleRootProviderBaseProps>,
    CollapsibleVariantProps
  >
>(CollapsibleRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, CollapsibleRootBaseProps>,
    CollapsibleVariantProps
  >
>(CollapsibleRoot, "root");

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, CollapsibleContentBaseProps>
>(CollapsibleContent, "content");

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, CollapsibleTriggerBaseProps>
>(CollapsibleTrigger, "trigger");

export { CollapsibleContext as Context } from "./collapsible-context";
