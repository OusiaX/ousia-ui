import { type Assign, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import {
  type RenderStrategyProps,
  RenderStrategyPropsProvider,
  createSplitProps,
  splitRenderStrategyProps,
} from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseTabsProps, useTabs } from './use-tabs'
import { TabsProvider } from './use-tabs-context'

export interface TabsRootBaseProps extends UseTabsProps, RenderStrategyProps, PolymorphicProps {}
export interface TabsRootProps extends Assign<ComponentProps<'div'>, TabsRootBaseProps> {}

export const TabsRoot = (props: TabsRootProps) => {
  const { ref, ...restProps } = props
  const [renderStrategyProps, tabsProps] = splitRenderStrategyProps(restProps)
  const [useTabsProps, localprops] = createSplitProps<UseTabsProps>()(tabsProps, [
    'activationMode',
    'composite',
    'defaultValue',
    'deselectable',
    'id',
    'ids',
    'loopFocus',
    'navigate',
    'onFocusChange',
    'onValueChange',
    'orientation',
    'translations',
    'value',
  ])
  const tabs = useTabs(useTabsProps)
  const mergedProps = mergeProps(tabs.getRootProps(), localprops)

  return (
    <TabsProvider value={tabs}>
      <RenderStrategyPropsProvider value={renderStrategyProps}>
        <ark.div {...mergedProps} ref={ref} />
      </RenderStrategyPropsProvider>
    </TabsProvider>
  )
}
