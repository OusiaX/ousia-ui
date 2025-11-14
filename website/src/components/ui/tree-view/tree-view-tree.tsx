import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTreeViewContext } from './use-tree-view-context'

export const TreeViewTreeElement = 'div' as const
export interface TreeViewTreeProps
  extends ComponentProps<typeof TreeViewTreeElement>,
    PolymorphicProps {}

export const TreeViewTree = (props: TreeViewTreeProps) => {
  const { ref, ...restProps } = props
  const treeView = useTreeViewContext()
  const mergedProps = mergeProps(treeView.getTreeProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
