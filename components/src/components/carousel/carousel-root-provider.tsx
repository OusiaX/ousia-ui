import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import type { UseCarouselReturn } from './use-carousel'
import { CarouselProvider } from './use-carousel-context'

interface RootProviderProps {
  value: UseCarouselReturn
}

export interface CarouselRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface CarouselRootProviderProps extends HTMLProps<'div'>, CarouselRootProviderBaseProps {}

export const CarouselRootProvider = forwardRef<HTMLDivElement, CarouselRootProviderProps>((props, ref) => {
  const [{ value: carousel }, localProps] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps(carousel.getRootProps(), localProps)

  return (
    <CarouselProvider value={carousel}>
      <arkMemo.div {...mergedProps} ref={ref} />
    </CarouselProvider>
  )
})

CarouselRootProvider.displayName = 'CarouselRootProvider'
