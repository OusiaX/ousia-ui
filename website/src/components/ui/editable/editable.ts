'use client'
import type { Assign } from '@ousia-ui/ark'
import { type EditableVariantProps, editable } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { EditableArea, type EditableAreaElement, type EditableAreaProps } from './editable-area'
import {
  EditableCancelTrigger,
  type EditableCancelTriggerElement,
  type EditableCancelTriggerProps,
} from './editable-cancel-trigger'
import {
  EditableControl,
  type EditableControlElement,
  type EditableControlProps,
} from './editable-control'
import {
  EditableEditTrigger,
  type EditableEditTriggerElement,
  type EditableEditTriggerProps,
} from './editable-edit-trigger'
import { EditableInput, type EditableInputElement, type EditableInputProps } from './editable-input'
import { EditableLabel, type EditableLabelElement, type EditableLabelProps } from './editable-label'
import {
  EditablePreview,
  type EditablePreviewElement,
  type EditablePreviewProps,
} from './editable-preview'
import { EditableRoot, type EditableRootElement, type EditableRootProps } from './editable-root'
import {
  EditableRootProvider,
  type EditableRootProviderElement,
  type EditableRootProviderProps,
} from './editable-root-provider'
import {
  EditableSubmitTrigger,
  type EditableSubmitTriggerElement,
  type EditableSubmitTriggerProps,
} from './editable-submit-trigger'

const { withProvider, withContext } = createStyleContext(editable)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof EditableRootProviderElement,
  Assign<EditableRootProviderProps, EditableVariantProps>
>(EditableRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof EditableRootElement,
  Assign<EditableRootProps, EditableVariantProps>
>(EditableRoot, 'root')

export const Area = withContext<typeof EditableAreaElement, EditableAreaProps>(EditableArea, 'area')

export const CancelTrigger = withContext<
  typeof EditableCancelTriggerElement,
  EditableCancelTriggerProps
>(EditableCancelTrigger, 'cancelTrigger')

export const Control = withContext<typeof EditableControlElement, EditableControlProps>(
  EditableControl,
  'control',
)

export const EditTrigger = withContext<typeof EditableEditTriggerElement, EditableEditTriggerProps>(
  EditableEditTrigger,
  'editTrigger',
)

export const Input = withContext<typeof EditableInputElement, EditableInputProps>(
  EditableInput,
  'input',
)

export const Label = withContext<typeof EditableLabelElement, EditableLabelProps>(
  EditableLabel,
  'label',
)

export const Preview = withContext<typeof EditablePreviewElement, EditablePreviewProps>(
  EditablePreview,
  'preview',
)

export const SubmitTrigger = withContext<
  typeof EditableSubmitTriggerElement,
  EditableSubmitTriggerProps
>(EditableSubmitTrigger, 'submitTrigger')

export { EditableContext as Context } from './editable-context'
