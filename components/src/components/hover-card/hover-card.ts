'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type HoverCardVariantProps, hoverCard } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { HoverCardArrow } from './hover-card-arrow'
import { HoverCardArrowTip } from './hover-card-arrow-tip'
import { HoverCardContent } from './hover-card-content'
import { HoverCardPositioner } from './hover-card-positioner'
import { HoverCardRoot, type HoverCardRootBaseProps } from './hover-card-root'
import {
  HoverCardRootProvider,
  type HoverCardRootProviderBaseProps,
} from './hover-card-root-provider'
import { HoverCardTrigger } from './hover-card-trigger'

const { withRootProvider, withContext } = createStyleContext(hoverCard)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider =
  withRootProvider<
    Assign<Assign<HTMLStyledProps<'div'>, HoverCardRootProviderBaseProps>, HoverCardVariantProps>
  >(HoverCardRootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root =
  withRootProvider<
    Assign<Assign<HTMLStyledProps<'div'>, HoverCardRootBaseProps>, HoverCardVariantProps>
  >(HoverCardRoot)

export const Arrow = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  HoverCardArrow,
  'arrow',
)

export const ArrowTip = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(HoverCardArrowTip, 'arrowTip')

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(HoverCardContent, 'content')

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(HoverCardPositioner, 'positioner')

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(HoverCardTrigger, 'trigger')

export { HoverCardContext as Context } from './hover-card-context'
