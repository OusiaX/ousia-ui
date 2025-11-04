import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useCarouselContext } from './use-carousel-context'

export interface CarouselPrevTriggerProps extends ComponentProps<'button'>, PolymorphicProps {}

export const CarouselPrevTrigger = (props: CarouselPrevTriggerProps) => {
  const { ref, ...restProps } = props
  const carousel = useCarouselContext()
  const mergedProps = mergeProps(carousel.getPrevTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
