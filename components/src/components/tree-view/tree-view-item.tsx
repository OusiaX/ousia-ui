import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import type { Assign } from '@ousia-ui/ark'
import { type HTMLProps, type PolymorphicProps, arkSimple } from '@ousia-ui/ark'
import { useTreeViewContext } from './use-tree-view-context'
import { useTreeViewNodePropsContext } from './use-tree-view-node-props-context'

export interface TreeViewItemBaseProps extends PolymorphicProps {}
export interface TreeViewItemProps extends Assign<HTMLProps<'div'>, TreeViewItemBaseProps> {}

export const TreeViewItem = forwardRef<HTMLDivElement, TreeViewItemProps>((props, ref) => {
  const treeView = useTreeViewContext()
  const nodeProps = useTreeViewNodePropsContext()
  const mergedProps = mergeProps(treeView.getItemProps(nodeProps), props)

  return <arkSimple.div {...mergedProps} ref={ref} />
})

TreeViewItem.displayName = 'TreeViewItem'
