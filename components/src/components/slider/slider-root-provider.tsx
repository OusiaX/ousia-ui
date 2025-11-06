import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseSliderReturn } from './use-slider'
import { SliderProvider } from './use-slider-context'

interface RootProviderProps {
  value: UseSliderReturn
}

export const SliderRootProviderElement = 'div' as const
export interface SliderRootProviderProps
  extends ComponentProps<typeof SliderRootProviderElement>,
    RootProviderProps,
    PolymorphicProps {}

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
