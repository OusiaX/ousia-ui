import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/carousel'
import type { ComponentProps } from 'react'
import { useCarouselContext } from './use-carousel-context'

export const CarouselItemElement = 'div' as const
export interface CarouselItemProps
  extends ComponentProps<typeof CarouselItemElement>,
    ItemProps,
    PolymorphicProps {}

export const CarouselItem = (props: CarouselItemProps) => {
  const { ref, ...restProps } = props
  const [itemProps, localProps] = createSplitProps<ItemProps>()(restProps, ['index', 'snapAlign'])
  const carousel = useCarouselContext()
  const mergedProps = mergeProps(carousel.getItemProps(itemProps), localProps)

  return <ark.div {...mergedProps} ref={ref} />
}
