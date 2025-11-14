'use client'
import type { Assign } from '@ousia-ui/ark'
import { type TabsVariantProps, tabs } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { TabContent, type TabContentElement, type TabContentProps } from './tab-content'
import { TabIndicator, type TabIndicatorElement, type TabIndicatorProps } from './tab-indicator'
import { TabList, type TabListElement, type TabListProps } from './tab-list'
import { TabTrigger, type TabTriggerElement, type TabTriggerProps } from './tab-trigger'
import { TabsRoot, type TabsRootElement, type TabsRootProps } from './tabs-root'
import {
  TabsRootProvider,
  type TabsRootProviderElement,
  type TabsRootProviderProps,
} from './tabs-root-provider'

const { withProvider, withContext } = createStyleContext(tabs)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof TabsRootProviderElement,
  Assign<TabsRootProviderProps, TabsVariantProps>
>(TabsRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<typeof TabsRootElement, Assign<TabsRootProps, TabsVariantProps>>(
  TabsRoot,
  'root',
)

export const Content = withContext<typeof TabContentElement, TabContentProps>(TabContent, 'content')

export const Indicator = withContext<typeof TabIndicatorElement, TabIndicatorProps>(
  TabIndicator,
  'indicator',
)

export const List = withContext<typeof TabListElement, TabListProps>(TabList, 'list')

export const Trigger = withContext<typeof TabTriggerElement, TabTriggerProps>(TabTrigger, 'trigger')

export { TabsContext as Context } from './tabs-context'
