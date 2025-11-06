import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useCollapsibleContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export const CollapsibleTriggerElement = 'button' as const
export interface CollapsibleTriggerProps
  extends ComponentProps<typeof CollapsibleTriggerElement>,
    PolymorphicProps {}

export const CollapsibleTrigger = (props: CollapsibleTriggerProps) => {
  const { ref, ...restProps } = props
  const collapsible = useCollapsibleContext()
  const mergedProps = mergeProps(collapsible.getTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
