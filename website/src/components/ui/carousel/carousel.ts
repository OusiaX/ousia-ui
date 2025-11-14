'use client'
import type { Assign } from '@ousia-ui/ark'
import { type CarouselVariantProps, carousel } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  CarouselControl,
  type CarouselControlElement,
  type CarouselControlProps,
} from './carousel-control'
import {
  CarouselIndicator,
  type CarouselIndicatorElement,
  type CarouselIndicatorProps,
} from './carousel-indicator'
import {
  CarouselIndicatorGroup,
  type CarouselIndicatorGroupElement,
  type CarouselIndicatorGroupProps,
} from './carousel-indicator-group'
import { CarouselItem, type CarouselItemElement, type CarouselItemProps } from './carousel-item'
import {
  CarouselItemGroup,
  type CarouselItemGroupElement,
  type CarouselItemGroupProps,
} from './carousel-item-group'
import {
  CarouselNextTrigger,
  type CarouselNextTriggerElement,
  type CarouselNextTriggerProps,
} from './carousel-next-trigger'
import {
  CarouselPrevTrigger,
  type CarouselPrevTriggerElement,
  type CarouselPrevTriggerProps,
} from './carousel-prev-trigger'
import { CarouselRoot, type CarouselRootElement, type CarouselRootProps } from './carousel-root'
import {
  CarouselRootProvider,
  type CarouselRootProviderElement,
  type CarouselRootProviderProps,
} from './carousel-root-provider'

const { withProvider, withContext } = createStyleContext(carousel)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof CarouselRootProviderElement,
  Assign<CarouselRootProviderProps, CarouselVariantProps>
>(CarouselRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof CarouselRootElement,
  Assign<CarouselRootProps, CarouselVariantProps>
>(CarouselRoot, 'root')

export const Control = withContext<typeof CarouselControlElement, CarouselControlProps>(
  CarouselControl,
  'control',
)

export const IndicatorGroup = withContext<
  typeof CarouselIndicatorGroupElement,
  CarouselIndicatorGroupProps
>(CarouselIndicatorGroup, 'indicatorGroup')

export const Indicator = withContext<typeof CarouselIndicatorElement, CarouselIndicatorProps>(
  CarouselIndicator,
  'indicator',
)

export const ItemGroup = withContext<typeof CarouselItemGroupElement, CarouselItemGroupProps>(
  CarouselItemGroup,
  'itemGroup',
)

export const Item = withContext<typeof CarouselItemElement, CarouselItemProps>(CarouselItem, 'item')

export const NextTrigger = withContext<typeof CarouselNextTriggerElement, CarouselNextTriggerProps>(
  CarouselNextTrigger,
  'nextTrigger',
)

export const PrevTrigger = withContext<typeof CarouselPrevTriggerElement, CarouselPrevTriggerProps>(
  CarouselPrevTrigger,
  'prevTrigger',
)

export { CarouselContext as Context } from './carousel-context'
