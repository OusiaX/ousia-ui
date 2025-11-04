import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseSliderReturn } from './use-slider'
import { SliderProvider } from './use-slider-context'

interface RootProviderProps {
  value: UseSliderReturn
}

export interface SliderRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface SliderRootProviderProps
  extends ComponentProps<'div'>,
    SliderRootProviderBaseProps {}

export const SliderRootProvider = (props: SliderRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: slider }, localProps] = createSplitProps<RootProviderProps>()(restProps, [
    'value',
  ])
  const mergedProps = mergeProps(slider.getRootProps(), localProps)

  return (
    <SliderProvider value={slider}>
      <ark.div {...mergedProps} ref={ref} />
    </SliderProvider>
  )
}
