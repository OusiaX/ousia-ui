'use client'
import type { Assign } from '@ousia-ui/ark'
import { type TooltipVariantProps, tooltip } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { TooltipArrow, type TooltipArrowElement, type TooltipArrowProps } from './tooltip-arrow'
import {
  TooltipArrowTip,
  type TooltipArrowTipElement,
  type TooltipArrowTipProps,
} from './tooltip-arrow-tip'
import {
  TooltipContent,
  type TooltipContentElement,
  type TooltipContentProps,
} from './tooltip-content'
import {
  TooltipPositioner,
  type TooltipPositionerElement,
  type TooltipPositionerProps,
} from './tooltip-positioner'
import { TooltipRoot, type TooltipRootProps } from './tooltip-root'
import { TooltipRootProvider, type TooltipRootProviderProps } from './tooltip-root-provider'
import {
  TooltipTrigger,
  type TooltipTriggerElement,
  type TooltipTriggerProps,
} from './tooltip-trigger'

const { withRootProvider, withContext } = createStyleContext(tooltip)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider =
  withRootProvider<Assign<TooltipRootProviderProps, TooltipVariantProps>>(TooltipRootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<TooltipRootProps, TooltipVariantProps>>(TooltipRoot)

export const Arrow = withContext<typeof TooltipArrowElement, TooltipArrowProps>(
  TooltipArrow,
  'arrow',
)

export const ArrowTip = withContext<typeof TooltipArrowTipElement, TooltipArrowTipProps>(
  TooltipArrowTip,
  'arrowTip',
)

export const Content = withContext<typeof TooltipContentElement, TooltipContentProps>(
  TooltipContent,
  'content',
)

export const Positioner = withContext<typeof TooltipPositionerElement, TooltipPositionerProps>(
  TooltipPositioner,
  'positioner',
)

export const Trigger = withContext<typeof TooltipTriggerElement, TooltipTriggerProps>(
  TooltipTrigger,
  'trigger',
)

export { TooltipContext as Context } from './tooltip-context'
