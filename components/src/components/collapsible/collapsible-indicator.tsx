import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useCollapsibleContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export const CollapsibleIndicatorElement = 'div' as const
export interface CollapsibleIndicatorProps
  extends ComponentProps<typeof CollapsibleIndicatorElement>,
    PolymorphicProps {}

export const CollapsibleIndicator = (props: CollapsibleIndicatorProps) => {
  const { ref, ...restProps } = props
  const collapsible = useCollapsibleContext()
  const mergedProps = mergeProps(collapsible.getIndicatorProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
