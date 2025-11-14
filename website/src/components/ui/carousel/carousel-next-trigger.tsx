import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useCarouselContext } from './use-carousel-context'

export const CarouselNextTriggerElement = 'button' as const
export interface CarouselNextTriggerProps
  extends ComponentProps<typeof CarouselNextTriggerElement>,
    PolymorphicProps {}

export const CarouselNextTrigger = (props: CarouselNextTriggerProps) => {
  const { ref, ...restProps } = props
  const carousel = useCarouselContext()
  const mergedProps = mergeProps(carousel.getNextTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
