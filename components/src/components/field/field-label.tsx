import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export interface FieldLabelProps extends ComponentProps<'label'>, PolymorphicProps {}

export const FieldLabel = (props: FieldLabelProps) => {
  const { ref, ...restProps } = props
  const field = useFieldContext()
  const mergedProps = mergeProps(field?.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
