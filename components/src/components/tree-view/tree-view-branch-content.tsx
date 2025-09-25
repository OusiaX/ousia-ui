import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { Collapsible } from '~/components/collapsible'
import type { HTMLProps, PolymorphicProps } from '@ousia-ui/ark'
import { useTreeViewContext } from './use-tree-view-context'
import { useTreeViewNodePropsContext } from './use-tree-view-node-props-context'

export interface TreeViewBranchContentBaseProps extends PolymorphicProps {}
export interface TreeViewBranchContentProps extends HTMLProps<'div'>, TreeViewBranchContentBaseProps {}

interface VisibilityProps {
  hidden?: boolean | undefined
  'data-state'?: string | undefined
}

const splitVisibilityProps = createSplitProps<VisibilityProps>()

export const TreeViewBranchContent = forwardRef<HTMLDivElement, TreeViewBranchContentProps>((props, ref) => {
  const treeView = useTreeViewContext()
  const nodeProps = useTreeViewNodePropsContext()
  const contentProps = treeView.getBranchContentProps(nodeProps)

  const [, branchContentProps] = splitVisibilityProps(contentProps, ['hidden', 'data-state'])
  const mergedProps = mergeProps(branchContentProps, props)

  return <Collapsible.Content ref={ref} {...mergedProps} />
})

TreeViewBranchContent.displayName = 'TreeViewBranchContent'
