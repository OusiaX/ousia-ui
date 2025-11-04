import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldsetContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export interface FieldsetLegendProps extends ComponentProps<'legend'>, PolymorphicProps {}

export const FieldsetLegend = (props: FieldsetLegendProps) => {
  const { ref, ...restProps } = props
  const fieldset = useFieldsetContext()
  const mergedProps = mergeProps(fieldset.getLegendProps(), restProps)

  return <ark.legend {...mergedProps} ref={ref} />
}
