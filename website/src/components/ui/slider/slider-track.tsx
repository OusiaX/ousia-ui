import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSliderContext } from './use-slider-context'

export const SliderTrackElement = 'div' as const
export interface SliderTrackProps
  extends ComponentProps<typeof SliderTrackElement>,
    PolymorphicProps {}

export const SliderTrack = (props: SliderTrackProps) => {
  const { ref, ...restProps } = props
  const slider = useSliderContext()
  const mergedProps = mergeProps(slider.getTrackProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
