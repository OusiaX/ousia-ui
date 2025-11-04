'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type TagsInputVariantProps, tagsInput } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { TagsInputClearTrigger } from './tags-input-clear-trigger'
import { TagsInputControl } from './tags-input-control'
import { TagsInputInput } from './tags-input-input'
import { TagsInputItem } from './tags-input-item'
import { TagsInputItemDeleteTrigger } from './tags-input-item-delete-trigger'
import { TagsInputItemInput } from './tags-input-item-input'
import { TagsInputItemPreview } from './tags-input-item-preview'
import { TagsInputItemText } from './tags-input-item-text'
import { TagsInputLabel } from './tags-input-label'
import { TagsInputRoot } from './tags-input-root'
import { TagsInputRootProvider } from './tags-input-root-provider'

const { withProvider, withContext } = createStyleContext(tagsInput)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, TagsInputVariantProps>
>(TagsInputRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, TagsInputVariantProps>
>(TagsInputRoot, 'root')

export const ClearTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(TagsInputClearTrigger, 'clearTrigger')

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(TagsInputControl, 'control')

export const Input = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<'input'>, PolymorphicProps>
>(TagsInputInput, 'input')

export const ItemDeleteTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(TagsInputItemDeleteTrigger, 'itemDeleteTrigger')

export const ItemInput = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<'input'>, PolymorphicProps>
>(TagsInputItemInput, 'itemInput')

export const ItemPreview = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(TagsInputItemPreview, 'itemPreview')

export const Item = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  TagsInputItem,
  'item',
)

export const ItemText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(TagsInputItemText, 'itemText')

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(TagsInputLabel, 'label')

export { TagsInputContext as Context } from './tags-input-context'
export { TagsInputHiddenInput as HiddenInput } from './tags-input-hidden-input'
