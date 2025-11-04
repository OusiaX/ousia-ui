import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSliderContext } from './use-slider-context'

export interface SliderLabelProps extends ComponentProps<'label'>, PolymorphicProps {}

export const SliderLabel = (props: SliderLabelProps) => {
  const { ref, ...restProps } = props
  const slider = useSliderContext()
  const mergedProps = mergeProps(slider.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
