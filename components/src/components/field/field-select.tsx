import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export const FieldSelectElement = 'select' as const
export interface FieldSelectProps
  extends ComponentProps<typeof FieldSelectElement>,
    PolymorphicProps {}

export const FieldSelect = (props: FieldSelectProps) => {
  const { ref, ...restProps } = props
  const field = useFieldContext()
  const mergedProps = mergeProps(field?.getSelectProps(), restProps)

  return <ark.select {...mergedProps} ref={ref} />
}
