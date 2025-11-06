import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useCarouselContext } from './use-carousel-context'

export const CarouselItemGroupElement = 'div' as const
export interface CarouselItemGroupProps
  extends ComponentProps<typeof CarouselItemGroupElement>,
    PolymorphicProps {}

export const CarouselItemGroup = (props: CarouselItemGroupProps) => {
  const { ref, ...restProps } = props
  const carousel = useCarouselContext()
  const mergedProps = mergeProps(carousel.getItemGroupProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
