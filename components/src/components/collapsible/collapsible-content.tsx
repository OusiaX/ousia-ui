import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useCollapsibleContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export interface CollapsibleContentProps extends ComponentProps<'div'>, PolymorphicProps {}

export const CollapsibleContent = (props: CollapsibleContentProps) => {
  const { ref, ...restProps } = props
  const collapsible = useCollapsibleContext()

  if (collapsible.isUnmounted) {
    return null
  }

  const mergedProps = mergeProps(collapsible.getContentProps(), restProps)
  return <ark.div {...mergedProps} ref={ref} />
}
