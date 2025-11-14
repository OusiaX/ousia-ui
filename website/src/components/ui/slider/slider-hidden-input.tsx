import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSliderContext } from './use-slider-context'
import { useSliderThumbPropsContext } from './use-slider-thumb-props-context'

export const SliderHiddenInputElement = 'input' as const
export interface SliderHiddenInputProps
  extends ComponentProps<typeof SliderHiddenInputElement>,
    PolymorphicProps {}

export const SliderHiddenInput = (props: SliderHiddenInputProps) => {
  const { ref, ...restProps } = props
  const slider = useSliderContext()
  const thumbProps = useSliderThumbPropsContext()
  const mergedProps = mergeProps(slider.getHiddenInputProps(thumbProps), restProps)

  return <ark.input {...mergedProps} ref={ref} />
}
