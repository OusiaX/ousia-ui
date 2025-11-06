import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import {
  type RenderStrategyProps,
  RenderStrategyPropsProvider,
  createSplitProps,
  splitRenderStrategyProps,
} from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseTabsReturn } from './use-tabs'
import { TabsProvider } from './use-tabs-context'

interface RootProviderProps {
  value: UseTabsReturn
}

export const TabsRootProviderElement = 'div' as const
export type TabsRootProviderProps = Assigns<
  ComponentProps<typeof TabsRootProviderElement>,
  RootProviderProps,
  RenderStrategyProps,
  PolymorphicProps
>

export const TabsRootProvider = (props: TabsRootProviderProps) => {
  const { ref, ...restProps } = props
  const [renderStrategyProps, tabsProps] = splitRenderStrategyProps(restProps)
  const [{ value: tabs }, localprops] = createSplitProps<RootProviderProps>()(tabsProps, ['value'])
  const mergedProps = mergeProps(tabs.getRootProps(), localprops)

  return (
    <TabsProvider value={tabs}>
      <RenderStrategyPropsProvider value={renderStrategyProps}>
        <ark.div {...mergedProps} ref={ref} />
      </RenderStrategyPropsProvider>
    </TabsProvider>
  )
}
