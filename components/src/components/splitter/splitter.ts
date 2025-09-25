"use client";
import type { Assign } from "@ousia-ui/ark";
import { type SplitterVariantProps, splitter } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { SplitterRootProvider, type SplitterRootProviderBaseProps } from './splitter-root-provider'
import { SplitterRoot, type SplitterRootBaseProps } from './splitter-root'
import { SplitterPanel, type SplitterPanelBaseProps } from './splitter-panel'
import { SplitterResizeTrigger, type SplitterResizeTriggerBaseProps } from './splitter-resize-trigger'

const { withProvider, withContext } = createStyleContext(splitter);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, SplitterRootProviderBaseProps>,
    SplitterVariantProps
  >
>(SplitterRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, SplitterRootBaseProps>,
    SplitterVariantProps
  >
>(SplitterRoot, "root");

export const Panel = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, SplitterPanelBaseProps>
>(SplitterPanel, "panel");

export const ResizeTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, SplitterResizeTriggerBaseProps>
>(SplitterResizeTrigger, "resizeTrigger");

export { SplitterContext as Context } from "./splitter-context";
