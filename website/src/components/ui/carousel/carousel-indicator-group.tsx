import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useCarouselContext } from './use-carousel-context'

export const CarouselIndicatorGroupElement = 'div' as const
export interface CarouselIndicatorGroupProps
  extends ComponentProps<typeof CarouselIndicatorGroupElement>,
    PolymorphicProps {}

export const CarouselIndicatorGroup = (props: CarouselIndicatorGroupProps) => {
  const { ref, ...restProps } = props
  const carousel = useCarouselContext()
  const mergedProps = mergeProps(carousel.getIndicatorGroupProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
