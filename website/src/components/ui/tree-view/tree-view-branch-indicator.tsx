import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTreeViewContext } from './use-tree-view-context'
import { useTreeViewNodePropsContext } from './use-tree-view-node-props-context'

export const TreeViewBranchIndicatorElement = 'div' as const
export interface TreeViewBranchIndicatorProps
  extends ComponentProps<typeof TreeViewBranchIndicatorElement>,
    PolymorphicProps {}

export const TreeViewBranchIndicator = (props: TreeViewBranchIndicatorProps) => {
  const { ref, ...restProps } = props
  const treeView = useTreeViewContext()
  const nodeProps = useTreeViewNodePropsContext()
  const mergedProps = mergeProps(treeView.getBranchIndicatorProps(nodeProps), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
