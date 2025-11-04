'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type PopoverVariantProps, popover } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { PopoverAnchor } from './popover-anchor'
import { PopoverArrow } from './popover-arrow'
import { PopoverArrowTip } from './popover-arrow-tip'
import { PopoverCloseTrigger } from './popover-close-trigger'
import { PopoverContent } from './popover-content'
import { PopoverDescription } from './popover-description'
import { PopoverIndicator } from './popover-indicator'
import { PopoverPositioner } from './popover-positioner'
import { PopoverRoot, type PopoverRootBaseProps } from './popover-root'
import { PopoverRootProvider, type PopoverRootProviderBaseProps } from './popover-root-provider'
import { PopoverTitle } from './popover-title'
import { PopoverTrigger } from './popover-trigger'

const { withRootProvider, withContext } = createStyleContext(popover)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider =
  withRootProvider<Assign<PopoverRootProviderBaseProps, PopoverVariantProps>>(PopoverRootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<PopoverRootBaseProps, PopoverVariantProps>>(PopoverRoot)

export const Anchor = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  PopoverAnchor,
  'anchor',
)

export const Arrow = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  PopoverArrow,
  'arrow',
)

export const ArrowTip = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(PopoverArrowTip, 'arrowTip')

export const CloseTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(PopoverCloseTrigger, 'closeTrigger')

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(PopoverContent, 'content')

export const Description = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(PopoverDescription, 'description')

export const Indicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(PopoverIndicator, 'indicator')

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(PopoverPositioner, 'positioner')

export const Title = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  PopoverTitle,
  'title',
)

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(PopoverTrigger, 'trigger')

export { PopoverContext as Context } from './popover-context'
