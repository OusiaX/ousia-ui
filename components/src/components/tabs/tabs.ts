'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type TabsVariantProps, tabs } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { TabContent, type TabContentBaseProps } from './tab-content'
import { TabIndicator } from './tab-indicator'
import { TabList } from './tab-list'
import { TabTrigger, type TabTriggerBaseProps } from './tab-trigger'
import { TabsRoot, type TabsRootBaseProps } from './tabs-root'
import { TabsRootProvider, type TabsRootProviderBaseProps } from './tabs-root-provider'

const { withProvider, withContext } = createStyleContext(tabs)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, TabsRootProviderBaseProps>, TabsVariantProps>
>(TabsRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, TabsRootBaseProps>, TabsVariantProps>
>(TabsRoot, 'root')

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, TabContentBaseProps>
>(TabContent, 'content')

export const Indicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(TabIndicator, 'indicator')

export const List = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  TabList,
  'list',
)

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, TabTriggerBaseProps>
>(TabTrigger, 'trigger')

export { TabsContext as Context } from './tabs-context'
