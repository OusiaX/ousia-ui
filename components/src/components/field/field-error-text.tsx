import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'

export interface FieldErrorTextBaseProps extends PolymorphicProps {}
export interface FieldErrorTextProps extends HTMLProps<'span'>, FieldErrorTextBaseProps {}

export const FieldErrorText = forwardRef<HTMLSpanElement, FieldErrorTextProps>((props, ref) => {
  const field = useFieldContext()
  const mergedProps = mergeProps(field.getErrorTextProps(), props)

  if (field?.invalid) {
    return <ark.span {...mergedProps} ref={ref} />
  }
  return null
})

FieldErrorText.displayName = 'FieldErrorText'
