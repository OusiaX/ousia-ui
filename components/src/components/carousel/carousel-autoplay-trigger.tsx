import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useCarouselContext } from './use-carousel-context'

export const CarouselAutoplayTriggerElement = 'button' as const
export interface CarouselAutoplayTriggerProps
  extends ComponentProps<typeof CarouselAutoplayTriggerElement>,
    PolymorphicProps {}

export const CarouselAutoplayTrigger = (props: CarouselAutoplayTriggerProps) => {
  const { ref, ...restProps } = props
  const carousel = useCarouselContext()
  const mergedProps = mergeProps(carousel.getAutoplayTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
