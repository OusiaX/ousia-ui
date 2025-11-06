import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSliderContext } from './use-slider-context'

export const SliderValueTextElement = 'span' as const
export interface SliderValueTextProps
  extends ComponentProps<typeof SliderValueTextElement>,
    PolymorphicProps {}

export const SliderValueText = (props: SliderValueTextProps) => {
  const { ref, ...restProps } = props
  const { children, ...rest } = restProps
  const slider = useSliderContext()
  const mergedProps = mergeProps(slider.getValueTextProps(), rest)

  return (
    <ark.span {...mergedProps} ref={ref}>
      {children || slider.value.join(', ')}
    </ark.span>
  )
}
