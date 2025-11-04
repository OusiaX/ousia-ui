import { type Assign, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { TriggerProps } from '@zag-js/tabs'
import type { ComponentProps } from 'react'
import { useTabsContext } from './use-tabs-context'

export interface TabTriggerBaseProps extends TriggerProps, PolymorphicProps {}
export interface TabTriggerProps extends Assign<ComponentProps<'button'>, TabTriggerBaseProps> {}

export const TabTrigger = (props: TabTriggerProps) => {
  const { ref, ...restProps } = props
  const [tabProps, localProps] = createSplitProps<TriggerProps>()(restProps, ['disabled', 'value'])
  const tabs = useTabsContext()
  const mergedProps = mergeProps(tabs.getTriggerProps(tabProps), localProps)

  return <ark.button {...mergedProps} ref={ref} />
}
