import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseCarouselReturn } from './use-carousel'
import { CarouselProvider } from './use-carousel-context'

interface RootProviderProps {
  value: UseCarouselReturn
}

export const CarouselRootProviderElement = 'div' as const
export interface CarouselRootProviderProps
  extends ComponentProps<typeof CarouselRootProviderElement>,
    RootProviderProps,
    PolymorphicProps {}

export const CarouselRootProvider = (props: CarouselRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: carousel }, localProps] = createSplitProps<RootProviderProps>()(restProps, [
    'value',
  ])
  const mergedProps = mergeProps(carousel.getRootProps(), localProps)

  return (
    <CarouselProvider value={carousel}>
      <ark.div {...mergedProps} ref={ref} />
    </CarouselProvider>
  )
}
