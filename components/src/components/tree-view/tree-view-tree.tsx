import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTreeViewContext } from './use-tree-view-context'

export interface TreeViewTreeBaseProps extends PolymorphicProps {}
export interface TreeViewTreeProps extends ComponentProps<'div'>, TreeViewTreeBaseProps {}

export const TreeViewTree = (props: TreeViewTreeProps) => {
  const { ref, ...restProps } = props
  const treeView = useTreeViewContext()
  const mergedProps = mergeProps(treeView.getTreeProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
