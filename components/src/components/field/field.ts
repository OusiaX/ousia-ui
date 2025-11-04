'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { styled } from 'styled-system/jsx'
import { type FieldVariantProps, field, input, textarea } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { FieldErrorText } from './field-error-text'
import { FieldHelperText } from './field-helper-text'
import { FieldInput } from './field-input'
import { FieldLabel } from './field-label'
import { FieldRoot, type FieldRootBaseProps } from './field-root'
import { FieldRootProvider, type FieldRootProviderBaseProps } from './field-root-provider'
import { FieldSelect } from './field-select'
import { FieldTextarea } from './field-textarea'

const { withProvider, withContext } = createStyleContext(field)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, FieldRootProviderBaseProps>, FieldVariantProps>
>(FieldRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, FieldRootBaseProps>, FieldVariantProps>
>(FieldRoot, 'root')

export const ErrorText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(FieldErrorText, 'errorText')

export const HelperText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(FieldHelperText, 'helperText')

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(FieldLabel, 'label')

export const Select = withContext<
  HTMLSelectElement,
  Assign<HTMLStyledProps<'select'>, PolymorphicProps>
>(FieldSelect, 'select')

export type InputProps = ComponentProps<typeof Input>
export const Input = styled(FieldInput, input)

export type TextareaProps = ComponentProps<typeof Textarea>
export const Textarea = styled(FieldTextarea, textarea)

export { FieldContext as Context } from './field-context'
