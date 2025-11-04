import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTreeViewContext } from './use-tree-view-context'
import { useTreeViewNodePropsContext } from './use-tree-view-node-props-context'

export interface TreeViewItemIndicatorProps extends ComponentProps<'div'>, PolymorphicProps {}

export const TreeViewItemIndicator = (props: TreeViewItemIndicatorProps) => {
  const { ref, ...restProps } = props
  const treeView = useTreeViewContext()
  const nodeProps = useTreeViewNodePropsContext()
  const mergedProps = mergeProps(treeView.getItemIndicatorProps(nodeProps), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
