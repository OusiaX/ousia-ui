"use client";
import type { Assign } from "@ousia-ui/ark";
import { TagsInputRootProvider, type TagsInputRootProviderBaseProps } from './tags-input-root-provider';
import { TagsInputRoot, type TagsInputRootBaseProps } from './tags-input-root';
import { TagsInputClearTrigger, type TagsInputClearTriggerBaseProps } from './tags-input-clear-trigger';
import { TagsInputControl, type TagsInputControlBaseProps } from './tags-input-control';
import { TagsInputInput, type TagsInputInputBaseProps } from './tags-input-input';
import { TagsInputItemDeleteTrigger, type TagsInputItemDeleteTriggerBaseProps } from './tags-input-item-delete-trigger';
import { TagsInputItemInput, type TagsInputItemInputBaseProps } from './tags-input-item-input';
import { TagsInputItemPreview, type TagsInputItemPreviewBaseProps } from './tags-input-item-preview';
import { TagsInputItem, type TagsInputItemBaseProps } from './tags-input-item';
import { TagsInputItemText, type TagsInputItemTextBaseProps } from './tags-input-item-text';
import { TagsInputLabel, type TagsInputLabelBaseProps } from './tags-input-label';
import { type TagsInputVariantProps, tagsInput } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";

const { withProvider, withContext } = createStyleContext(tagsInput);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, TagsInputRootProviderBaseProps>,
    TagsInputVariantProps
  >
>(TagsInputRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, TagsInputRootBaseProps>,
    TagsInputVariantProps
  >
>(TagsInputRoot, "root");

export const ClearTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, TagsInputClearTriggerBaseProps>
>(TagsInputClearTrigger, "clearTrigger");

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TagsInputControlBaseProps>
>(TagsInputControl, "control");

export const Input = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<"input">, TagsInputInputBaseProps>
>(TagsInputInput, "input");

export const ItemDeleteTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, TagsInputItemDeleteTriggerBaseProps>
>(TagsInputItemDeleteTrigger, "itemDeleteTrigger");

export const ItemInput = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<"input">, TagsInputItemInputBaseProps>
>(TagsInputItemInput, "itemInput");

export const ItemPreview = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TagsInputItemPreviewBaseProps>
>(TagsInputItemPreview, "itemPreview");

export const Item = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TagsInputItemBaseProps>
>(TagsInputItem, "item");

export const ItemText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, TagsInputItemTextBaseProps>
>(TagsInputItemText, "itemText");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, TagsInputLabelBaseProps>
>(TagsInputLabel, "label");

export { TagsInputContext as Context } from "./tags-input-context";
export { TagsInputHiddenInput as HiddenInput } from "./tags-input-hidden-input";
