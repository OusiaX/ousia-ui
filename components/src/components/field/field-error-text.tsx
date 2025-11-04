import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export interface FieldErrorTextBaseProps extends PolymorphicProps {}
export interface FieldErrorTextProps extends ComponentProps<'span'>, FieldErrorTextBaseProps {}

export const FieldErrorText = (props: FieldErrorTextProps) => {
  const { ref, ...restProps } = props
  const field = useFieldContext()
  const mergedProps = mergeProps(field.getErrorTextProps(), restProps)

  if (field?.invalid) {
    return <ark.span {...mergedProps} ref={ref} />
  }
  return null
}
