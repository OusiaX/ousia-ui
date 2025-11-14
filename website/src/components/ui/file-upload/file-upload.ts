'use client'
import type { Assign } from '@ousia-ui/ark'
import { type FileUploadVariantProps, fileUpload } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  FileUploadDropzone,
  type FileUploadDropzoneElement,
  type FileUploadDropzoneProps,
} from './file-upload-dropzone'
import {
  FileUploadItem,
  type FileUploadItemElement,
  type FileUploadItemProps,
} from './file-upload-item'
import {
  FileUploadItemDeleteTrigger,
  type FileUploadItemDeleteTriggerElement,
  type FileUploadItemDeleteTriggerProps,
} from './file-upload-item-delete-trigger'
import {
  FileUploadItemGroup,
  type FileUploadItemGroupElement,
  type FileUploadItemGroupProps,
} from './file-upload-item-group'
import {
  FileUploadItemName,
  type FileUploadItemNameElement,
  type FileUploadItemNameProps,
} from './file-upload-item-name'
import {
  FileUploadItemPreview,
  type FileUploadItemPreviewElement,
  type FileUploadItemPreviewProps,
} from './file-upload-item-preview'
import {
  FileUploadItemPreviewImage,
  type FileUploadItemPreviewImageElement,
  type FileUploadItemPreviewImageProps,
} from './file-upload-item-preview-image'
import {
  FileUploadItemSizeText,
  type FileUploadItemSizeTextElement,
  type FileUploadItemSizeTextProps,
} from './file-upload-item-size-text'
import {
  FileUploadLabel,
  type FileUploadLabelElement,
  type FileUploadLabelProps,
} from './file-upload-label'
import {
  FileUploadRoot,
  type FileUploadRootElement,
  type FileUploadRootProps,
} from './file-upload-root'
import {
  FileUploadRootProvider,
  type FileUploadRootProviderElement,
  type FileUploadRootProviderProps,
} from './file-upload-root-provider'
import {
  FileUploadTrigger,
  type FileUploadTriggerElement,
  type FileUploadTriggerProps,
} from './file-upload-trigger'

const { withProvider, withContext } = createStyleContext(fileUpload)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof FileUploadRootProviderElement,
  Assign<FileUploadRootProviderProps, FileUploadVariantProps>
>(FileUploadRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof FileUploadRootElement,
  Assign<FileUploadRootProps, FileUploadVariantProps>
>(FileUploadRoot, 'root')

export const Dropzone = withContext<typeof FileUploadDropzoneElement, FileUploadDropzoneProps>(
  FileUploadDropzone,
  'dropzone',
)

export const ItemDeleteTrigger = withContext<
  typeof FileUploadItemDeleteTriggerElement,
  FileUploadItemDeleteTriggerProps
>(FileUploadItemDeleteTrigger, 'itemDeleteTrigger')

export const ItemGroup = withContext<typeof FileUploadItemGroupElement, FileUploadItemGroupProps>(
  FileUploadItemGroup,
  'itemGroup',
)

export const ItemName = withContext<typeof FileUploadItemNameElement, FileUploadItemNameProps>(
  FileUploadItemName,
  'itemName',
)

export const ItemPreviewImage = withContext<
  typeof FileUploadItemPreviewImageElement,
  FileUploadItemPreviewImageProps
>(FileUploadItemPreviewImage, 'itemPreviewImage')

export const ItemPreview = withContext<
  typeof FileUploadItemPreviewElement,
  FileUploadItemPreviewProps
>(FileUploadItemPreview, 'itemPreview')

export const Item = withContext<typeof FileUploadItemElement, FileUploadItemProps>(
  FileUploadItem,
  'item',
)

export const ItemSizeText = withContext<
  typeof FileUploadItemSizeTextElement,
  FileUploadItemSizeTextProps
>(FileUploadItemSizeText, 'itemSizeText')

export const Label = withContext<typeof FileUploadLabelElement, FileUploadLabelProps>(
  FileUploadLabel,
  'label',
)

export const Trigger = withContext<typeof FileUploadTriggerElement, FileUploadTriggerProps>(
  FileUploadTrigger,
  'trigger',
)

export { FileUploadContext as Context } from './file-upload-context'
export { FileUploadHiddenInput as HiddenInput } from './file-upload-hidden-input'
