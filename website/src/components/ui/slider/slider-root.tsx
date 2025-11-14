import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseSliderProps, useSlider } from './use-slider'
import { SliderProvider } from './use-slider-context'

export const SliderRootElement = 'div' as const
export type SliderRootProps = Assigns<
  ComponentProps<typeof SliderRootElement>,
  UseSliderProps,
  PolymorphicProps
>

export const SliderRoot = (props: SliderRootProps) => {
  const { ref, ...restProps } = props
  const [useSliderProps, localProps] = createSplitProps<UseSliderProps>()(restProps, [
    'aria-label',
    'aria-labelledby',
    'defaultValue',
    'disabled',
    'form',
    'getAriaValueText',
    'id',
    'ids',
    'invalid',
    'max',
    'min',
    'minStepsBetweenThumbs',
    'name',
    'onFocusChange',
    'onValueChange',
    'onValueChangeEnd',
    'orientation',
    'origin',
    'readOnly',
    'step',
    'thumbAlignment',
    'thumbSize',
    'value',
  ])
  const slider = useSlider(useSliderProps)
  const mergedProps = mergeProps(slider.getRootProps(), localProps)

  return (
    <SliderProvider value={slider}>
      <ark.div {...mergedProps} ref={ref} />
    </SliderProvider>
  )
}
