import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSliderContext } from './use-slider-context'

export interface SliderControlBaseProps extends PolymorphicProps {}
export interface SliderControlProps extends ComponentProps<'div'>, SliderControlBaseProps {}

export const SliderControl = (props: SliderControlProps) => {
  const { ref, ...restProps } = props
  const slider = useSliderContext()
  const mergedProps = mergeProps(slider.getControlProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
