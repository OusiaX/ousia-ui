import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTreeViewContext } from './use-tree-view-context'
import { useTreeViewNodePropsContext } from './use-tree-view-node-props-context'

export const TreeViewBranchControlElement = 'div' as const
export interface TreeViewBranchControlProps
  extends ComponentProps<typeof TreeViewBranchControlElement>,
    PolymorphicProps {}

export const TreeViewBranchControl = (props: TreeViewBranchControlProps) => {
  const { ref, ...restProps } = props
  const treeView = useTreeViewContext()
  const nodeProps = useTreeViewNodePropsContext()
  const mergedProps = mergeProps(treeView.getBranchControlProps(nodeProps), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
