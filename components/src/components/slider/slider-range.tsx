import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSliderContext } from './use-slider-context'

export const SliderRangeElement = 'div' as const
export interface SliderRangeProps
  extends ComponentProps<typeof SliderRangeElement>,
    PolymorphicProps {}

export const SliderRange = (props: SliderRangeProps) => {
  const { ref, ...restProps } = props
  const slider = useSliderContext()
  const mergedProps = mergeProps(slider.getRangeProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
