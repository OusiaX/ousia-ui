import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useCarouselContext } from './use-carousel-context'

export interface CarouselAutoplayTriggerBaseProps extends PolymorphicProps {}
export interface CarouselAutoplayTriggerProps
  extends ComponentProps<'button'>,
    CarouselAutoplayTriggerBaseProps {}

export const CarouselAutoplayTrigger = (props: CarouselAutoplayTriggerProps) => {
  const { ref, ...restProps } = props
  const carousel = useCarouselContext()
  const mergedProps = mergeProps(carousel.getAutoplayTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
