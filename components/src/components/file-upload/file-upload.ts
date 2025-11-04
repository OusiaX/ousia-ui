'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type FileUploadVariantProps, fileUpload } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { FileUploadDropzone } from './file-upload-dropzone'
import { FileUploadItem, type FileUploadItemBaseProps } from './file-upload-item'
import { FileUploadItemDeleteTrigger } from './file-upload-item-delete-trigger'
import { FileUploadItemGroup, type FileUploadItemGroupBaseProps } from './file-upload-item-group'
import { FileUploadItemName } from './file-upload-item-name'
import {
  FileUploadItemPreview,
  type FileUploadItemPreviewBaseProps,
} from './file-upload-item-preview'
import { FileUploadItemPreviewImage } from './file-upload-item-preview-image'
import { FileUploadItemSizeText } from './file-upload-item-size-text'
import { FileUploadLabel } from './file-upload-label'
import { FileUploadRoot, type FileUploadRootBaseProps } from './file-upload-root'
import {
  FileUploadRootProvider,
  type FileUploadRootProviderBaseProps,
} from './file-upload-root-provider'
import { FileUploadTrigger } from './file-upload-trigger'

const { withProvider, withContext } = createStyleContext(fileUpload)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, FileUploadRootProviderBaseProps>, FileUploadVariantProps>
>(FileUploadRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, FileUploadRootBaseProps>, FileUploadVariantProps>
>(FileUploadRoot, 'root')

export const Dropzone = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(FileUploadDropzone, 'dropzone')

export const ItemDeleteTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(FileUploadItemDeleteTrigger, 'itemDeleteTrigger')

export const ItemGroup = withContext<
  HTMLUListElement,
  Assign<HTMLStyledProps<'ul'>, FileUploadItemGroupBaseProps>
>(FileUploadItemGroup, 'itemGroup')

export const ItemName = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(FileUploadItemName, 'itemName')

export const ItemPreviewImage = withContext<
  HTMLImageElement,
  Assign<HTMLStyledProps<'img'>, PolymorphicProps>
>(FileUploadItemPreviewImage, 'itemPreviewImage')

export const ItemPreview = withContext<
  HTMLImageElement,
  Assign<HTMLStyledProps<'div'>, FileUploadItemPreviewBaseProps>
>(FileUploadItemPreview, 'itemPreview')

export const Item = withContext<
  HTMLLIElement,
  Assign<HTMLStyledProps<'li'>, FileUploadItemBaseProps>
>(FileUploadItem, 'item')

export const ItemSizeText = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(FileUploadItemSizeText, 'itemSizeText')

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(FileUploadLabel, 'label')

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(FileUploadTrigger, 'trigger')

export { FileUploadContext as Context } from './file-upload-context'
export { FileUploadHiddenInput as HiddenInput } from './file-upload-hidden-input'
