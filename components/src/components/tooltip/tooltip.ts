'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type TooltipVariantProps, tooltip } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { TooltipArrow } from './tooltip-arrow'
import { TooltipArrowTip } from './tooltip-arrow-tip'
import { TooltipContent } from './tooltip-content'
import { TooltipPositioner } from './tooltip-positioner'
import { TooltipRoot, type TooltipRootBaseProps } from './tooltip-root'
import { TooltipRootProvider, type TooltipRootProviderBaseProps } from './tooltip-root-provider'
import { TooltipTrigger } from './tooltip-trigger'

const { withRootProvider, withContext } = createStyleContext(tooltip)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider =
  withRootProvider<Assign<TooltipRootProviderBaseProps, TooltipVariantProps>>(TooltipRootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<TooltipRootBaseProps, TooltipVariantProps>>(TooltipRoot)

export const Arrow = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  TooltipArrow,
  'arrow',
)

export const ArrowTip = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(TooltipArrowTip, 'arrowTip')

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(TooltipContent, 'content')

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(TooltipPositioner, 'positioner')

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(TooltipTrigger, 'trigger')

export { TooltipContext as Context } from './tooltip-context'
