import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLProps, type PolymorphicProps } from '@ousia-ui/ark'
import { useFieldsetContext } from '@ousia-ui/ark/utils'

export interface FieldsetLegendBaseProps extends PolymorphicProps {}
export interface FieldsetLegendProps extends HTMLProps<'legend'>, FieldsetLegendBaseProps {}

export const FieldsetLegend = forwardRef<HTMLLegendElement, FieldsetLegendProps>((props, ref) => {
  const fieldset = useFieldsetContext()
  const mergedProps = mergeProps(fieldset.getLegendProps(), props)

  return <ark.legend {...mergedProps} ref={ref} />
})

FieldsetLegend.displayName = 'FieldsetLegend'
