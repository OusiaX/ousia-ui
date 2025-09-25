"use client";
import type { Assign } from "@ousia-ui/ark";
import { TabsRootProvider, type TabsRootProviderBaseProps } from './tabs-root-provider';
import { TabsRoot, type TabsRootBaseProps } from './tabs-root';
import { TabContent, type TabContentBaseProps } from './tab-content';
import { TabIndicator, type TabIndicatorBaseProps } from './tab-indicator';
import { TabList, type TabListBaseProps } from './tab-list';
import { TabTrigger, type TabTriggerBaseProps } from './tab-trigger';
import { type TabsVariantProps, tabs } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";

const { withProvider, withContext } = createStyleContext(tabs);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, TabsRootProviderBaseProps>,
    TabsVariantProps
  >
>(TabsRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<"div">, TabsRootBaseProps>, TabsVariantProps>
>(TabsRoot, "root");

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TabContentBaseProps>
>(TabContent, "content");

export const Indicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TabIndicatorBaseProps>
>(TabIndicator, "indicator");

export const List = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TabListBaseProps>
>(TabList, "list");

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, TabTriggerBaseProps>
>(TabTrigger, "trigger");

export { TabsContext as Context } from "./tabs-context";
