"use client";
import type { Assign } from "@ousia-ui/ark";
import { ToastRoot, type ToastRootBaseProps } from './toast-root';
import { ToastActionTrigger, type ToastActionTriggerBaseProps } from './toast-action-trigger';
import { ToastCloseTrigger, type ToastCloseTriggerBaseProps } from './toast-close-trigger';
import { ToastDescription, type ToastDescriptionBaseProps } from './toast-description';
import { ToastTitle, type ToastTitleBaseProps } from './toast-title';
import { toast } from "styled-system/recipes";
import type { HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";

const { withProvider, withContext } = createStyleContext(toast);

export const Root = withProvider<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ToastRootBaseProps>
>(ToastRoot, "root");

export const ActionTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, ToastActionTriggerBaseProps>
>(ToastActionTrigger, "actionTrigger");

export const CloseTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, ToastCloseTriggerBaseProps>
>(ToastCloseTrigger, "closeTrigger");

export const Description = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ToastDescriptionBaseProps>
>(ToastDescription, "description");

export const Title = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ToastTitleBaseProps>
>(ToastTitle, "title");

export { ToastContext as Context, type ToastContextProps as ContextProps } from "./toast-context";
export { Toaster, type ToasterProps } from "./toaster";
export { createToaster } from "./create-toaster";
