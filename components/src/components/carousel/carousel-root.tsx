import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseCarouselProps, useCarousel } from './use-carousel'
import { CarouselProvider } from './use-carousel-context'

export interface CarouselRootBaseProps extends UseCarouselProps, PolymorphicProps {}
export interface CarouselRootProps extends ComponentProps<'div'>, CarouselRootBaseProps {}

export const CarouselRoot = (props: CarouselRootProps) => {
  const { ref, ...restProps } = props
  const [useCarouselProps, localProps] = createSplitProps<UseCarouselProps>()(restProps, [
    'allowMouseDrag',
    'autoplay',
    'defaultPage',
    'id',
    'ids',
    'inViewThreshold',
    'loop',
    'onAutoplayStatusChange',
    'onDragStatusChange',
    'onPageChange',
    'orientation',
    'padding',
    'page',
    'slideCount',
    'slidesPerMove',
    'slidesPerPage',
    'snapType',
    'spacing',
    'translations',
  ])
  const carousel = useCarousel(useCarouselProps)
  const mergedProps = mergeProps(carousel.getRootProps(), localProps)

  return (
    <CarouselProvider value={carousel}>
      <ark.div {...mergedProps} ref={ref} />
    </CarouselProvider>
  )
}
