import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldsetContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export interface FieldsetErrorTextProps extends ComponentProps<'span'>, PolymorphicProps {}

export const FieldsetErrorText = (props: FieldsetErrorTextProps) => {
  const { ref, ...restProps } = props
  const fieldset = useFieldsetContext()
  const mergedProps = mergeProps(fieldset.getErrorTextProps(), restProps)

  return fieldset.invalid ? <ark.span {...mergedProps} ref={ref} /> : null
}
