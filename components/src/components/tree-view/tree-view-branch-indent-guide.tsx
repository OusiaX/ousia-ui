import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTreeViewContext } from './use-tree-view-context'
import { useTreeViewNodePropsContext } from './use-tree-view-node-props-context'

export interface TreeViewBranchIndentGuideBaseProps extends PolymorphicProps {}
export interface TreeViewBranchIndentGuideProps
  extends ComponentProps<'div'>,
    TreeViewBranchIndentGuideBaseProps {}

export const TreeViewBranchIndentGuide = (props: TreeViewBranchIndentGuideProps) => {
  const { ref, ...restProps } = props
  const treeView = useTreeViewContext()
  const nodeProps = useTreeViewNodePropsContext()
  const mergedProps = mergeProps(treeView.getBranchIndentGuideProps(nodeProps), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
