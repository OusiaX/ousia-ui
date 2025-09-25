import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import type { Assign } from '@ousia-ui/ark'
import { useRenderStrategyPropsContext } from '@ousia-ui/ark/utils'
import { Collapsible } from '~/components/collapsible'
import type { HTMLProps, PolymorphicProps } from '@ousia-ui/ark'
import { useTreeViewContext } from './use-tree-view-context'
import { useTreeViewNodeContext } from './use-tree-view-node-context'
import { useTreeViewNodePropsContext } from './use-tree-view-node-props-context'

export interface TreeViewBranchBaseProps extends PolymorphicProps {}
export interface TreeViewBranchProps extends Assign<HTMLProps<'div'>, TreeViewBranchBaseProps> {}

export const TreeViewBranch = forwardRef<HTMLDivElement, TreeViewBranchProps>((props, ref) => {
  const treeView = useTreeViewContext()
  const nodeProps = useTreeViewNodePropsContext()
  const nodeState = useTreeViewNodeContext()
  const renderStrategyProps = useRenderStrategyPropsContext()
  const mergedProps = mergeProps(treeView.getBranchProps(nodeProps), props)
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
})

TreeViewBranch.displayName = 'TreeViewBranch'
