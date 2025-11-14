import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useCollapsibleContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export const CollapsibleContentElement = 'div' as const
export interface CollapsibleContentProps
  extends ComponentProps<typeof CollapsibleContentElement>,
    PolymorphicProps {}

export const CollapsibleContent = (props: CollapsibleContentProps) => {
  const { ref, ...restProps } = props
  const collapsible = useCollapsibleContext()

  if (collapsible.isUnmounted) {
    return null
  }

  const mergedProps = mergeProps(collapsible.getContentProps(), restProps)
  return <ark.div {...mergedProps} ref={ref} />
}
