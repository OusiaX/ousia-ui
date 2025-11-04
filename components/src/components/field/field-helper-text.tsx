import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export interface FieldHelperTextBaseProps extends PolymorphicProps {}
export interface FieldHelperTextProps extends ComponentProps<'span'>, FieldHelperTextBaseProps {}

export const FieldHelperText = (props: FieldHelperTextProps) => {
  const { ref, ...restProps } = props
  const field = useFieldContext()
  const mergedProps = mergeProps(field?.getHelperTextProps(), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
