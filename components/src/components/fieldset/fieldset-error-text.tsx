import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLProps, type PolymorphicProps } from '@ousia-ui/ark'
import { useFieldsetContext } from '@ousia-ui/ark/utils'

export interface FieldsetErrorTextBaseProps extends PolymorphicProps {}
export interface FieldsetErrorTextProps extends HTMLProps<'span'>, FieldsetErrorTextBaseProps {}

export const FieldsetErrorText = forwardRef<HTMLSpanElement, FieldsetErrorTextProps>((props, ref) => {
  const fieldset = useFieldsetContext()
  const mergedProps = mergeProps(fieldset.getErrorTextProps(), props)

  return fieldset.invalid ? <ark.span {...mergedProps} ref={ref} /> : null
})

FieldsetErrorText.displayName = 'FieldsetErrorText'
