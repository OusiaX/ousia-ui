import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useCarouselContext } from './use-carousel-context'

export interface CarouselNextTriggerProps extends ComponentProps<'button'>, PolymorphicProps {}

export const CarouselNextTrigger = (props: CarouselNextTriggerProps) => {
  const { ref, ...restProps } = props
  const carousel = useCarouselContext()
  const mergedProps = mergeProps(carousel.getNextTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
