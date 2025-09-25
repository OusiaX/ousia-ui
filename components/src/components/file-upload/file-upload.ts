"use client";
import type { Assign } from "@ousia-ui/ark";
import { type FileUploadVariantProps, fileUpload } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { FileUploadRootProvider, type FileUploadRootProviderBaseProps } from "./file-upload-root-provider";
import { FileUploadRoot, type FileUploadRootBaseProps } from "./file-upload-root";
import { FileUploadDropzone, type FileUploadDropzoneBaseProps } from "./file-upload-dropzone";
import { FileUploadItemDeleteTrigger, type FileUploadItemDeleteTriggerBaseProps } from "./file-upload-item-delete-trigger";
import { FileUploadItemGroup, type FileUploadItemGroupBaseProps } from "./file-upload-item-group";
import { FileUploadItemName, type FileUploadItemNameBaseProps } from "./file-upload-item-name";
import { FileUploadItemPreviewImage, type FileUploadItemPreviewImageBaseProps } from "./file-upload-item-preview-image";
import { FileUploadItemPreview, type FileUploadItemPreviewBaseProps } from "./file-upload-item-preview";
import { FileUploadItem, type FileUploadItemBaseProps } from "./file-upload-item";
import { FileUploadItemSizeText, type FileUploadItemSizeTextBaseProps } from "./file-upload-item-size-text";
import { FileUploadLabel, type FileUploadLabelBaseProps } from "./file-upload-label";
import { FileUploadTrigger, type FileUploadTriggerBaseProps } from "./file-upload-trigger";

const { withProvider, withContext } = createStyleContext(fileUpload);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, FileUploadRootProviderBaseProps>,
    FileUploadVariantProps
  >
>(FileUploadRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, FileUploadRootBaseProps>,
    FileUploadVariantProps
  >
>(FileUploadRoot, "root");

export const Dropzone = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, FileUploadDropzoneBaseProps>
>(FileUploadDropzone, "dropzone");

export const ItemDeleteTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, FileUploadItemDeleteTriggerBaseProps>
>(FileUploadItemDeleteTrigger, "itemDeleteTrigger");

export const ItemGroup = withContext<
  HTMLUListElement,
  Assign<HTMLStyledProps<"ul">, FileUploadItemGroupBaseProps>
>(FileUploadItemGroup, "itemGroup");

export const ItemName = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, FileUploadItemNameBaseProps>
>(FileUploadItemName, "itemName");

export const ItemPreviewImage = withContext<
  HTMLImageElement,
  Assign<HTMLStyledProps<"img">, FileUploadItemPreviewImageBaseProps>
>(FileUploadItemPreviewImage, "itemPreviewImage");

export const ItemPreview = withContext<
  HTMLImageElement,
  Assign<HTMLStyledProps<"div">, FileUploadItemPreviewBaseProps>
>(FileUploadItemPreview, "itemPreview");

export const Item = withContext<
  HTMLLIElement,
  Assign<HTMLStyledProps<"li">, FileUploadItemBaseProps>
>(FileUploadItem, "item");

export const ItemSizeText = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, FileUploadItemSizeTextBaseProps>
>(FileUploadItemSizeText, "itemSizeText");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, FileUploadLabelBaseProps>
>(FileUploadLabel, "label");

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, FileUploadTriggerBaseProps>
>(FileUploadTrigger, "trigger");

export { FileUploadContext as Context } from "./file-upload-context";
export { FileUploadHiddenInput as HiddenInput } from "./file-upload-hidden-input";
