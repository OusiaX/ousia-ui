import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ThumbProps } from '@zag-js/slider'
import type { ComponentProps } from 'react'
import { useSliderContext } from './use-slider-context'
import { SliderThumbPropsProvider } from './use-slider-thumb-props-context'

export const SliderThumbElement = 'div' as const
export interface SliderThumbProps
  extends ComponentProps<typeof SliderThumbElement>,
    ThumbProps,
    PolymorphicProps {}

export const SliderThumb = (props: SliderThumbProps) => {
  const { ref, ...restProps } = props
  const [thumbProps, localProps] = createSplitProps<ThumbProps>()(restProps, ['index', 'name'])
  const slider = useSliderContext()
  const mergedProps = mergeProps(slider.getThumbProps(thumbProps), localProps)

  return (
    <SliderThumbPropsProvider value={thumbProps}>
      <ark.div {...mergedProps} ref={ref} />
    </SliderThumbPropsProvider>
  )
}
