import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useCarouselContext } from './use-carousel-context'

export interface CarouselControlProps extends ComponentProps<'div'>, PolymorphicProps {}

export const CarouselControl = (props: CarouselControlProps) => {
  const { ref, ...restProps } = props
  const carousel = useCarouselContext()
  const mergedProps = mergeProps(carousel.getControlProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
