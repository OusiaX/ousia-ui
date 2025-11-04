import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useCollapsibleContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export interface CollapsibleIndicatorBaseProps extends PolymorphicProps {}
export interface CollapsibleIndicatorProps
  extends ComponentProps<'div'>,
    CollapsibleIndicatorBaseProps {}

export const CollapsibleIndicator = (props: CollapsibleIndicatorProps) => {
  const { ref, ...restProps } = props
  const collapsible = useCollapsibleContext()
  const mergedProps = mergeProps(collapsible.getIndicatorProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
