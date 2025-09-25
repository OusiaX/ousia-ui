"use client";
import type { Assign } from "@ousia-ui/ark";
import { type ClipboardVariantProps, clipboard } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { ClipboardRootProvider, type ClipboardRootProviderBaseProps } from './clipboard-root-provider';
import { ClipboardRoot, type ClipboardRootBaseProps } from './clipboard-root';
import { ClipboardControl, type ClipboardControlBaseProps } from './clipboard-control';
import { ClipboardIndicator, type ClipboardIndicatorBaseProps } from './clipboard-indicator';
import { ClipboardInput, type ClipboardInputBaseProps } from './clipboard-input';
import { ClipboardLabel, type ClipboardLabelBaseProps } from './clipboard-label';
import { ClipboardTrigger, type ClipboardTriggerBaseProps } from './clipboard-trigger';

const { withProvider, withContext } = createStyleContext(clipboard);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, ClipboardRootProviderBaseProps>,
    ClipboardVariantProps
  >
>(ClipboardRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, ClipboardRootBaseProps>,
    ClipboardVariantProps
  >
>(ClipboardRoot, "root");

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ClipboardControlBaseProps>
>(ClipboardControl, "control");

export const Indicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ClipboardIndicatorBaseProps>
>(ClipboardIndicator, "indicator");

export const Input = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<"input">, ClipboardInputBaseProps>
>(ClipboardInput, "input");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, ClipboardLabelBaseProps>
>(ClipboardLabel, "label");

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, ClipboardTriggerBaseProps>
>(ClipboardTrigger, "trigger");

export { ClipboardContext as Context } from "./clipboard-context";
