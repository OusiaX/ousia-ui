import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'

export interface FieldInputBaseProps extends PolymorphicProps {}
export interface FieldInputProps extends HTMLProps<'input'>, FieldInputBaseProps {}

export const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>((props, ref) => {
  const field = useFieldContext()
  const mergedProps = mergeProps<HTMLProps<'input'>>(field?.getInputProps(), props)

  return <ark.input {...mergedProps} ref={ref} />
})

FieldInput.displayName = 'FieldInput'
