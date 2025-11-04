import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export interface FieldSelectBaseProps extends PolymorphicProps {}
export interface FieldSelectProps extends ComponentProps<'select'>, FieldSelectBaseProps {}

export const FieldSelect = (props: FieldSelectProps) => {
  const { ref, ...restProps } = props
  const field = useFieldContext()
  const mergedProps = mergeProps(field?.getSelectProps(), restProps)

  return <ark.select {...mergedProps} ref={ref} />
}
