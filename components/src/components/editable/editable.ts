'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type EditableVariantProps, editable } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { EditableArea } from './editable-area'
import { EditableCancelTrigger } from './editable-cancel-trigger'
import { EditableControl } from './editable-control'
import { EditableEditTrigger } from './editable-edit-trigger'
import { EditableInput } from './editable-input'
import { EditableLabel } from './editable-label'
import { EditablePreview } from './editable-preview'
import { EditableRoot } from './editable-root'
import { EditableRootProvider } from './editable-root-provider'
import { EditableSubmitTrigger } from './editable-submit-trigger'

const { withProvider, withContext } = createStyleContext(editable)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, EditableVariantProps>
>(EditableRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, EditableVariantProps>
>(EditableRoot, 'root')

export const Area = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  EditableArea,
  'area',
)

export const CancelTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(EditableCancelTrigger, 'cancelTrigger')

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(EditableControl, 'control')

export const EditTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(EditableEditTrigger, 'editTrigger')

export const Input = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<'input'>, PolymorphicProps>
>(EditableInput, 'input')

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(EditableLabel, 'label')

export const Preview = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(EditablePreview, 'preview')

export const SubmitTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(EditableSubmitTrigger, 'submitTrigger')

export { EditableContext as Context } from './editable-context'
