import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSliderContext } from './use-slider-context'
import { useSliderThumbPropsContext } from './use-slider-thumb-props-context'

export const SliderDraggingIndicatorElement = 'span' as const
export interface SliderDraggingIndicatorProps
  extends ComponentProps<typeof SliderDraggingIndicatorElement>,
    PolymorphicProps {}

export const SliderDraggingIndicator = (props: SliderDraggingIndicatorProps) => {
  const { ref, ...restProps } = props
  const slider = useSliderContext()
  const { index } = useSliderThumbPropsContext()
  const mergedProps = mergeProps(slider.getDraggingIndicatorProps({ index }), restProps)

  return (
    <ark.span {...mergedProps} ref={ref}>
      {restProps.children || slider.getThumbValue(index)}
    </ark.span>
  )
}
