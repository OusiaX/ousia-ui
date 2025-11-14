import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useCarouselContext } from './use-carousel-context'

export const CarouselPrevTriggerElement = 'button' as const
export interface CarouselPrevTriggerProps
  extends ComponentProps<typeof CarouselPrevTriggerElement>,
    PolymorphicProps {}

export const CarouselPrevTrigger = (props: CarouselPrevTriggerProps) => {
  const { ref, ...restProps } = props
  const carousel = useCarouselContext()
  const mergedProps = mergeProps(carousel.getPrevTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
