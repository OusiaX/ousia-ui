import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSliderContext } from './use-slider-context'

export interface SliderMarkerGroupBaseProps extends PolymorphicProps {}
export interface SliderMarkerGroupProps extends ComponentProps<'div'>, SliderMarkerGroupBaseProps {}

export const SliderMarkerGroup = (props: SliderMarkerGroupProps) => {
  const { ref, ...restProps } = props
  const slider = useSliderContext()
  const mergedProps = mergeProps(slider.getMarkerGroupProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
