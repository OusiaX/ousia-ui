import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { IndicatorProps } from '@zag-js/carousel'
import type { ComponentProps } from 'react'
import { useCarouselContext } from './use-carousel-context'

export const CarouselIndicatorElement = 'button' as const
export interface CarouselIndicatorProps
  extends ComponentProps<typeof CarouselIndicatorElement>,
    IndicatorProps,
    PolymorphicProps {}

export const CarouselIndicator = (props: CarouselIndicatorProps) => {
  const { ref, ...restProps } = props
  const [indicatorProps, localProps] = createSplitProps<IndicatorProps>()(restProps, [
    'readOnly',
    'index',
  ])

  const carousel = useCarouselContext()
  const mergedProps = mergeProps(carousel.getIndicatorProps(indicatorProps), localProps)

  return <ark.button {...mergedProps} ref={ref} />
}
