import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTabsContext } from './use-tabs-context'

export interface TabIndicatorBaseProps extends PolymorphicProps {}
export interface TabIndicatorProps extends ComponentProps<'div'>, TabIndicatorBaseProps {}

export const TabIndicator = (props: TabIndicatorProps) => {
  const { ref, ...restProps } = props
  const tabs = useTabsContext()
  const mergedProps = mergeProps(tabs.getIndicatorProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
