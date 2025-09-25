import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLProps, type PolymorphicProps } from '@ousia-ui/ark'
import { useFieldsetContext } from '@ousia-ui/ark/utils'

export interface FieldsetHelperTextBaseProps extends PolymorphicProps {}
export interface FieldsetHelperTextProps extends HTMLProps<'span'>, FieldsetHelperTextBaseProps {}

export const FieldsetHelperText = forwardRef<HTMLSpanElement, FieldsetHelperTextProps>((props, ref) => {
  const fieldset = useFieldsetContext()
  const mergedProps = mergeProps(fieldset.getHelperTextProps(), props)

  return <ark.span {...mergedProps} ref={ref} />
})

FieldsetHelperText.displayName = 'FieldsetHelperText'
