'use client'
import type { Assigns } from '@ousia-ui/ark'
import { type HoverCardVariantProps, hoverCard } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  HoverCardArrow,
  type HoverCardArrowElement,
  type HoverCardArrowProps,
} from './hover-card-arrow'
import {
  HoverCardArrowTip,
  type HoverCardArrowTipElement,
  type HoverCardArrowTipProps,
} from './hover-card-arrow-tip'
import {
  HoverCardContent,
  type HoverCardContentElement,
  type HoverCardContentProps,
} from './hover-card-content'
import {
  HoverCardPositioner,
  type HoverCardPositionerElement,
  type HoverCardPositionerProps,
} from './hover-card-positioner'
import { HoverCardRoot, type HoverCardRootProps } from './hover-card-root'
import { HoverCardRootProvider, type HoverCardRootProviderProps } from './hover-card-root-provider'
import {
  HoverCardTrigger,
  type HoverCardTriggerElement,
  type HoverCardTriggerProps,
} from './hover-card-trigger'

const { withRootProvider, withContext } = createStyleContext(hoverCard)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider =
  withRootProvider<
    Assigns<HTMLStyledProps<'div'>, HoverCardRootProviderProps, HoverCardVariantProps>
  >(HoverCardRootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root =
  withRootProvider<Assigns<HTMLStyledProps<'div'>, HoverCardRootProps, HoverCardVariantProps>>(
    HoverCardRoot,
  )

export const Arrow = withContext<typeof HoverCardArrowElement, HoverCardArrowProps>(
  HoverCardArrow,
  'arrow',
)

export const ArrowTip = withContext<typeof HoverCardArrowTipElement, HoverCardArrowTipProps>(
  HoverCardArrowTip,
  'arrowTip',
)

export const Content = withContext<typeof HoverCardContentElement, HoverCardContentProps>(
  HoverCardContent,
  'content',
)

export const Positioner = withContext<typeof HoverCardPositionerElement, HoverCardPositionerProps>(
  HoverCardPositioner,
  'positioner',
)

export const Trigger = withContext<typeof HoverCardTriggerElement, HoverCardTriggerProps>(
  HoverCardTrigger,
  'trigger',
)

export { HoverCardContext as Context } from './hover-card-context'
