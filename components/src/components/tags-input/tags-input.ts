'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type TagsInputVariantProps, tagsInput } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  TagsInputClearTrigger,
  type TagsInputClearTriggerElement,
  type TagsInputClearTriggerProps,
} from './tags-input-clear-trigger'
import {
  TagsInputControl,
  type TagsInputControlElement,
  type TagsInputControlProps,
} from './tags-input-control'
import {
  TagsInputInput,
  type TagsInputInputElement,
  type TagsInputInputProps,
} from './tags-input-input'
import {
  TagsInputItem,
  type TagsInputItemElement,
  type TagsInputItemProps,
} from './tags-input-item'
import {
  TagsInputItemDeleteTrigger,
  type TagsInputItemDeleteTriggerElement,
} from './tags-input-item-delete-trigger'
import {
  TagsInputItemInput,
  type TagsInputItemInputElement,
  type TagsInputItemInputProps,
} from './tags-input-item-input'
import {
  TagsInputItemPreview,
  type TagsInputItemPreviewElement,
  type TagsInputItemPreviewProps,
} from './tags-input-item-preview'
import {
  TagsInputItemText,
  type TagsInputItemTextElement,
  type TagsInputItemTextProps,
} from './tags-input-item-text'
import {
  TagsInputLabel,
  type TagsInputLabelElement,
  type TagsInputLabelProps,
} from './tags-input-label'
import {
  TagsInputRoot,
  type TagsInputRootElement,
  type TagsInputRootProps,
} from './tags-input-root'
import {
  TagsInputRootProvider,
  type TagsInputRootProviderElement,
  type TagsInputRootProviderProps,
} from './tags-input-root-provider'

const { withProvider, withContext } = createStyleContext(tagsInput)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof TagsInputRootProviderElement,
  Assign<TagsInputRootProviderProps, TagsInputVariantProps>
>(TagsInputRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof TagsInputRootElement,
  Assign<TagsInputRootProps, TagsInputVariantProps>
>(TagsInputRoot, 'root')

export const ClearTrigger = withContext<
  typeof TagsInputClearTriggerElement,
  TagsInputClearTriggerProps
>(TagsInputClearTrigger, 'clearTrigger')

export const Control = withContext<typeof TagsInputControlElement, TagsInputControlProps>(
  TagsInputControl,
  'control',
)

export const Input = withContext<typeof TagsInputInputElement, TagsInputInputProps>(
  TagsInputInput,
  'input',
)

export const ItemDeleteTrigger = withContext<
  typeof TagsInputItemDeleteTriggerElement,
  PolymorphicProps
>(TagsInputItemDeleteTrigger, 'itemDeleteTrigger')

export const ItemInput = withContext<typeof TagsInputItemInputElement, TagsInputItemInputProps>(
  TagsInputItemInput,
  'itemInput',
)

export const ItemPreview = withContext<
  typeof TagsInputItemPreviewElement,
  TagsInputItemPreviewProps
>(TagsInputItemPreview, 'itemPreview')

export const Item = withContext<typeof TagsInputItemElement, TagsInputItemProps>(
  TagsInputItem,
  'item',
)

export const ItemText = withContext<typeof TagsInputItemTextElement, TagsInputItemTextProps>(
  TagsInputItemText,
  'itemText',
)

export const Label = withContext<typeof TagsInputLabelElement, TagsInputLabelProps>(
  TagsInputLabel,
  'label',
)

export { TagsInputContext as Context } from './tags-input-context'
export { TagsInputHiddenInput as HiddenInput } from './tags-input-hidden-input'
