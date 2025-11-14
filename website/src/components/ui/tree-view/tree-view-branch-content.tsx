import { type PolymorphicProps, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { Collapsible } from '~/components/ui/collapsible'
import { useTreeViewContext } from './use-tree-view-context'
import { useTreeViewNodePropsContext } from './use-tree-view-node-props-context'

export const TreeViewBranchContentElement = 'div' as const
export interface TreeViewBranchContentProps
  extends ComponentProps<typeof TreeViewBranchContentElement>,
    PolymorphicProps {}

interface VisibilityProps {
  hidden?: boolean | undefined
  'data-state'?: string | undefined
}

const splitVisibilityProps = createSplitProps<VisibilityProps>()

export const TreeViewBranchContent = (props: TreeViewBranchContentProps) => {
  const { ref, ...restProps } = props
  const treeView = useTreeViewContext()
  const nodeProps = useTreeViewNodePropsContext()
  const contentProps = treeView.getBranchContentProps(nodeProps)

  const [, branchContentProps] = splitVisibilityProps(contentProps, ['hidden', 'data-state'])
  const mergedProps = mergeProps(branchContentProps, restProps)

  return <Collapsible.Content ref={ref} {...mergedProps} />
}
