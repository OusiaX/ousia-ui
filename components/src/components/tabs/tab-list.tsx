import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTabsContext } from './use-tabs-context'

export interface TabListBaseProps extends PolymorphicProps {}
export interface TabListProps extends ComponentProps<'div'>, TabListBaseProps {}

export const TabList = (props: TabListProps) => {
  const { ref, ...restProps } = props
  const tabs = useTabsContext()
  const mergedProps = mergeProps(tabs.getListProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
