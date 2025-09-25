"use client";
import type { Assign } from "@ousia-ui/ark";
import { EditableRootProvider, type EditableRootProviderBaseProps } from './editable-root-provider'
import { EditableRoot, type EditableRootBaseProps } from './editable-root'
import { EditableArea, type EditableAreaBaseProps } from './editable-area'
import { EditableCancelTrigger, type EditableCancelTriggerBaseProps } from './editable-cancel-trigger'
import { EditableControl, type EditableControlBaseProps } from './editable-control'
import { EditableEditTrigger, type EditableEditTriggerBaseProps } from './editable-edit-trigger'
import { EditableInput, type EditableInputBaseProps } from './editable-input'
import { EditableLabel, type EditableLabelBaseProps } from './editable-label'
import { EditablePreview, type EditablePreviewBaseProps } from './editable-preview'
import { EditableSubmitTrigger, type EditableSubmitTriggerBaseProps } from './editable-submit-trigger'
import { type EditableVariantProps, editable } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";

const { withProvider, withContext } = createStyleContext(editable);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, EditableRootProviderBaseProps>,
    EditableVariantProps
  >
>(EditableRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, EditableRootBaseProps>,
    EditableVariantProps
  >
>(EditableRoot, "root");

export const Area = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, EditableAreaBaseProps>
>(EditableArea, "area");

export const CancelTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, EditableCancelTriggerBaseProps>
>(EditableCancelTrigger, "cancelTrigger");

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, EditableControlBaseProps>
>(EditableControl, "control");

export const EditTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, EditableEditTriggerBaseProps>
>(EditableEditTrigger, "editTrigger");

export const Input = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<"input">, EditableInputBaseProps>
>(EditableInput, "input");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, EditableLabelBaseProps>
>(EditableLabel, "label");

export const Preview = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, EditablePreviewBaseProps>
>(EditablePreview, "preview");

export const SubmitTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, EditableSubmitTriggerBaseProps>
>(EditableSubmitTrigger, "submitTrigger");

export { EditableContext as Context } from "./editable-context";
