import { type PolymorphicProps, mergeProps } from '@ousia-ui/ark'
import { useRenderStrategyPropsContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { Collapsible } from '~/components/ui/collapsible'
import { useTreeViewContext } from './use-tree-view-context'
import { useTreeViewNodeContext } from './use-tree-view-node-context'
import { useTreeViewNodePropsContext } from './use-tree-view-node-props-context'

export const TreeViewBranchElement = 'div' as const
export interface TreeViewBranchProps
  extends ComponentProps<typeof TreeViewBranchElement>,
    PolymorphicProps {}

export const TreeViewBranch = (props: TreeViewBranchProps) => {
  const { ref, ...restProps } = props
  const treeView = useTreeViewContext()
  const nodeProps = useTreeViewNodePropsContext()
  const nodeState = useTreeViewNodeContext()
  const renderStrategyProps = useRenderStrategyPropsContext()
  const mergedProps = mergeProps(treeView.getBranchProps(nodeProps), restProps)
  const branchContentProps = treeView.getBranchContentProps(nodeProps)

  return (
    <Collapsible.Root
      ref={ref}
      open={nodeState.expanded}
      ids={{ content: branchContentProps.id }}
      {...renderStrategyProps}
      {...mergedProps}
    />
  )
}
