import { mergeProps } from '@zag-js/react'
import type { TriggerProps } from '@zag-js/tabs'
import { forwardRef } from 'react'
import type { Assign } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, arkSimple } from '@ousia-ui/ark'
import { useTabsContext } from './use-tabs-context'

export interface TabTriggerBaseProps extends TriggerProps, PolymorphicProps {}
export interface TabTriggerProps extends Assign<HTMLProps<'button'>, TabTriggerBaseProps> {}

export const TabTrigger = forwardRef<HTMLButtonElement, TabTriggerProps>((props, ref) => {
  const [tabProps, localProps] = createSplitProps<TriggerProps>()(props, ['disabled', 'value'])
  const tabs = useTabsContext()
  const mergedProps = mergeProps(tabs.getTriggerProps(tabProps), localProps)

  return <arkSimple.button {...mergedProps} ref={ref} />
})

TabTrigger.displayName = 'TabTrigger'
