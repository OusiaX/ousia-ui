'use client'
import type { Assign } from '@ousia-ui/ark'
import { type CollapsibleVariantProps, collapsible } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  CollapsibleContent,
  type CollapsibleContentElement,
  type CollapsibleContentProps,
} from './collapsible-content'
import {
  CollapsibleRoot,
  type CollapsibleRootElement,
  type CollapsibleRootProps,
} from './collapsible-root'
import {
  CollapsibleRootProvider,
  type CollapsibleRootProviderElement,
  type CollapsibleRootProviderProps,
} from './collapsible-root-provider'
import {
  CollapsibleTrigger,
  type CollapsibleTriggerElement,
  type CollapsibleTriggerProps,
} from './collapsible-trigger'

const { withProvider, withContext } = createStyleContext(collapsible)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof CollapsibleRootProviderElement,
  Assign<CollapsibleRootProviderProps, CollapsibleVariantProps>
>(CollapsibleRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof CollapsibleRootElement,
  Assign<CollapsibleRootProps, CollapsibleVariantProps>
>(CollapsibleRoot, 'root')

export const Content = withContext<typeof CollapsibleContentElement, CollapsibleContentProps>(
  CollapsibleContent,
  'content',
)

export const Trigger = withContext<typeof CollapsibleTriggerElement, CollapsibleTriggerProps>(
  CollapsibleTrigger,
  'trigger',
)

export { CollapsibleContext as Context } from './collapsible-context'
