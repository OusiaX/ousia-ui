import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { MarkerProps } from '@zag-js/slider'
import type { ComponentProps } from 'react'
import { useSliderContext } from './use-slider-context'

export const SliderMarkerElement = 'span' as const
export interface SliderMarkerProps
  extends ComponentProps<typeof SliderMarkerElement>,
    MarkerProps,
    PolymorphicProps {}

export const SliderMarker = (props: SliderMarkerProps) => {
  const { ref, ...restProps } = props
  const [markerProps, localProps] = createSplitProps<MarkerProps>()(restProps, ['value'])
  const slider = useSliderContext()
  const mergedProps = mergeProps(slider.getMarkerProps(markerProps), localProps)

  return <ark.span {...mergedProps} ref={ref} />
}
