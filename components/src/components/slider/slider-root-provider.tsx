import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, arkSimple } from '@ousia-ui/ark'
import type { UseSliderReturn } from './use-slider'
import { SliderProvider } from './use-slider-context'

interface RootProviderProps {
  value: UseSliderReturn
}

export interface SliderRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface SliderRootProviderProps extends HTMLProps<'div'>, SliderRootProviderBaseProps {}

export const SliderRootProvider = forwardRef<HTMLDivElement, SliderRootProviderProps>((props, ref) => {
  const [{ value: slider }, localProps] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps(slider.getRootProps(), localProps)

  return (
    <SliderProvider value={slider}>
      <arkSimple.div {...mergedProps} ref={ref} />
    </SliderProvider>
  )
})

SliderRootProvider.displayName = 'SliderRootProvider'
