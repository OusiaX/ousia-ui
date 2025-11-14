'use client'
import type { Assign } from '@ousia-ui/ark'
import { styled } from 'styled-system/jsx'
import { type FieldVariantProps, field, input, textarea } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  FieldErrorText,
  type FieldErrorTextElement,
  type FieldErrorTextProps,
} from './field-error-text'
import {
  FieldHelperText,
  type FieldHelperTextElement,
  type FieldHelperTextProps,
} from './field-helper-text'
import { FieldInput } from './field-input'
import { FieldLabel, type FieldLabelElement, type FieldLabelProps } from './field-label'
import { FieldRoot, type FieldRootElement, type FieldRootProps } from './field-root'
import {
  FieldRootProvider,
  type FieldRootProviderElement,
  type FieldRootProviderProps,
} from './field-root-provider'
import { FieldSelect, type FieldSelectElement, type FieldSelectProps } from './field-select'
import { FieldTextarea } from './field-textarea'

const { withProvider, withContext } = createStyleContext(field)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof FieldRootProviderElement,
  Assign<FieldRootProviderProps, FieldVariantProps>
>(FieldRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof FieldRootElement,
  Assign<FieldRootProps, FieldVariantProps>
>(FieldRoot, 'root')

export const ErrorText = withContext<typeof FieldErrorTextElement, FieldErrorTextProps>(
  FieldErrorText,
  'errorText',
)

export const HelperText = withContext<typeof FieldHelperTextElement, FieldHelperTextProps>(
  FieldHelperText,
  'helperText',
)

export const Label = withContext<typeof FieldLabelElement, FieldLabelProps>(FieldLabel, 'label')

export const Select = withContext<typeof FieldSelectElement, FieldSelectProps>(
  FieldSelect,
  'select',
)

export type InputProps = ComponentProps<typeof Input>
export const Input = styled(FieldInput, input)

export type TextareaProps = ComponentProps<typeof Textarea>
export const Textarea = styled(FieldTextarea, textarea)

export { FieldContext as Context } from './field-context'
