'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type CarouselVariantProps, carousel } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { CarouselControl } from './carousel-control'
import { CarouselIndicator } from './carousel-indicator'
import { CarouselIndicatorGroup } from './carousel-indicator-group'
import { CarouselItem } from './carousel-item'
import { CarouselItemGroup } from './carousel-item-group'
import { CarouselNextTrigger } from './carousel-next-trigger'
import { CarouselPrevTrigger } from './carousel-prev-trigger'
import { CarouselRoot } from './carousel-root'
import { CarouselRootProvider } from './carousel-root-provider'

const { withProvider, withContext } = createStyleContext(carousel)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, CarouselVariantProps>
>(CarouselRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, CarouselVariantProps>
>(CarouselRoot, 'root')

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(CarouselControl, 'control')

export const IndicatorGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(CarouselIndicatorGroup, 'indicatorGroup')

export const Indicator = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(CarouselIndicator, 'indicator')

export const ItemGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(CarouselItemGroup, 'itemGroup')

export const Item = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  CarouselItem,
  'item',
)

export const NextTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(CarouselNextTrigger, 'nextTrigger')

export const PrevTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(CarouselPrevTrigger, 'prevTrigger')

export { CarouselContext as Context } from './carousel-context'
