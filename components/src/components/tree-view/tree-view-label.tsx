import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTreeViewContext } from './use-tree-view-context'

export interface TreeViewLabelProps extends ComponentProps<'h3'>, PolymorphicProps {}

export const TreeViewLabel = (props: TreeViewLabelProps) => {
  const { ref, ...restProps } = props
  const treeView = useTreeViewContext()
  const mergedProps = mergeProps(treeView.getLabelProps(), restProps)

  return <ark.h3 {...mergedProps} ref={ref} />
}
