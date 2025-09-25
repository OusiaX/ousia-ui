"use client";
import type { Assign } from '@ousia-ui/ark';
import { type DialogVariantProps, dialog } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { DialogBackdrop, type DialogBackdropBaseProps } from './dialog-backdrop';
import { DialogCloseTrigger, type DialogCloseTriggerBaseProps } from './dialog-close-trigger';
import { DialogContent, type DialogContentBaseProps } from './dialog-content';
import { DialogDescription, type DialogDescriptionBaseProps } from './dialog-description';
import { DialogPositioner, type DialogPositionerBaseProps } from './dialog-positioner';
import { DialogRoot, type DialogRootProps } from './dialog-root';
import { DialogRootProvider, type DialogRootProviderProps } from './dialog-root-provider';
import { DialogTitle, type DialogTitleBaseProps } from './dialog-title';
import { DialogTrigger, type DialogTriggerBaseProps } from './dialog-trigger';

const { withRootProvider, withContext } = createStyleContext(dialog);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withRootProvider<
  Assign<DialogRootProviderProps, DialogVariantProps>
>(DialogRootProvider);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider<
  Assign<DialogRootProps, DialogVariantProps>
>(DialogRoot);

export const Backdrop = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, DialogBackdropBaseProps>
>(DialogBackdrop, "backdrop");

export const CloseTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, DialogCloseTriggerBaseProps>
>(DialogCloseTrigger, "closeTrigger");

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, DialogContentBaseProps>
>(DialogContent, "content");

export const Description = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, DialogDescriptionBaseProps>
>(DialogDescription, "description");

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, DialogPositionerBaseProps>
>(DialogPositioner, "positioner");

export const Title = withContext<
  HTMLHeadingElement,
  Assign<HTMLStyledProps<"h2">, DialogTitleBaseProps>
>(DialogTitle, "title");

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, DialogTriggerBaseProps>
>(DialogTrigger, "trigger");

export { DialogContext as Context } from "./dialog-context";
