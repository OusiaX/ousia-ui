import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTreeViewContext } from './use-tree-view-context'
import { useTreeViewNodePropsContext } from './use-tree-view-node-props-context'

export const TreeViewItemTextElement = 'span' as const
export interface TreeViewItemTextProps
  extends ComponentProps<typeof TreeViewItemTextElement>,
    PolymorphicProps {}

export const TreeViewItemText = (props: TreeViewItemTextProps) => {
  const { ref, ...restProps } = props
  const treeView = useTreeViewContext()
  const nodeProps = useTreeViewNodePropsContext()
  const mergedProps = mergeProps(treeView.getItemTextProps(nodeProps), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
