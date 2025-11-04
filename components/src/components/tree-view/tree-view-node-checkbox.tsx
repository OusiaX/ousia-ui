import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTreeViewContext } from './use-tree-view-context'
import { useTreeViewNodePropsContext } from './use-tree-view-node-props-context'

export interface TreeViewNodeCheckboxProps extends ComponentProps<'span'>, PolymorphicProps {}

export const TreeViewNodeCheckbox = (props: TreeViewNodeCheckboxProps) => {
  const { ref, ...restProps } = props
  const treeView = useTreeViewContext()
  const nodeProps = useTreeViewNodePropsContext()
  const mergedProps = mergeProps(treeView.getNodeCheckboxProps(nodeProps), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
