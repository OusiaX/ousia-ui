import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useCollapsibleContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export interface CollapsibleTriggerBaseProps extends PolymorphicProps {}
export interface CollapsibleTriggerProps
  extends ComponentProps<'button'>,
    CollapsibleTriggerBaseProps {}

export const CollapsibleTrigger = (props: CollapsibleTriggerProps) => {
  const { ref, ...restProps } = props
  const collapsible = useCollapsibleContext()
  const mergedProps = mergeProps(collapsible.getTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
