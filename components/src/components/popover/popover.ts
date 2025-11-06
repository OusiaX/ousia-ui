'use client'
import type { Assign } from '@ousia-ui/ark'
import { type PopoverVariantProps, popover } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { PopoverAnchor, type PopoverAnchorElement, type PopoverAnchorProps } from './popover-anchor'
import { PopoverArrow, type PopoverArrowElement, type PopoverArrowProps } from './popover-arrow'
import {
  PopoverArrowTip,
  type PopoverArrowTipElement,
  type PopoverArrowTipProps,
} from './popover-arrow-tip'
import {
  PopoverCloseTrigger,
  type PopoverCloseTriggerElement,
  type PopoverCloseTriggerProps,
} from './popover-close-trigger'
import {
  PopoverContent,
  type PopoverContentElement,
  type PopoverContentProps,
} from './popover-content'
import {
  PopoverDescription,
  type PopoverDescriptionElement,
  type PopoverDescriptionProps,
} from './popover-description'
import {
  PopoverIndicator,
  type PopoverIndicatorElement,
  type PopoverIndicatorProps,
} from './popover-indicator'
import {
  PopoverPositioner,
  type PopoverPositionerElement,
  type PopoverPositionerProps,
} from './popover-positioner'
import { PopoverRoot, type PopoverRootProps } from './popover-root'
import { PopoverRootProvider, type PopoverRootProviderProps } from './popover-root-provider'
import { PopoverTitle, type PopoverTitleElement, type PopoverTitleProps } from './popover-title'
import {
  PopoverTrigger,
  type PopoverTriggerElement,
  type PopoverTriggerProps,
} from './popover-trigger'

const { withRootProvider, withContext } = createStyleContext(popover)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider =
  withRootProvider<Assign<PopoverRootProviderProps, PopoverVariantProps>>(PopoverRootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<PopoverRootProps, PopoverVariantProps>>(PopoverRoot)

export const Anchor = withContext<typeof PopoverAnchorElement, PopoverAnchorProps>(
  PopoverAnchor,
  'anchor',
)

export const Arrow = withContext<typeof PopoverArrowElement, PopoverArrowProps>(
  PopoverArrow,
  'arrow',
)

export const ArrowTip = withContext<typeof PopoverArrowTipElement, PopoverArrowTipProps>(
  PopoverArrowTip,
  'arrowTip',
)

export const CloseTrigger = withContext<
  typeof PopoverCloseTriggerElement,
  PopoverCloseTriggerProps
>(PopoverCloseTrigger, 'closeTrigger')

export const Content = withContext<typeof PopoverContentElement, PopoverContentProps>(
  PopoverContent,
  'content',
)

export const Description = withContext<typeof PopoverDescriptionElement, PopoverDescriptionProps>(
  PopoverDescription,
  'description',
)

export const Indicator = withContext<typeof PopoverIndicatorElement, PopoverIndicatorProps>(
  PopoverIndicator,
  'indicator',
)

export const Positioner = withContext<typeof PopoverPositionerElement, PopoverPositionerProps>(
  PopoverPositioner,
  'positioner',
)

export const Title = withContext<typeof PopoverTitleElement, PopoverTitleProps>(
  PopoverTitle,
  'title',
)

export const Trigger = withContext<typeof PopoverTriggerElement, PopoverTriggerProps>(
  PopoverTrigger,
  'trigger',
)

export { PopoverContext as Context } from './popover-context'
