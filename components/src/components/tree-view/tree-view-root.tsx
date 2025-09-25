import { mergeProps } from '@zag-js/react'
import { type JSX, forwardRef } from 'react'
import type { Assign } from '@ousia-ui/ark'
import { createSplitProps, type RenderStrategyProps, RenderStrategyPropsProvider, splitRenderStrategyProps } from '@ousia-ui/ark/utils'
import type { TreeNode } from '@zag-js/collection'
import { type HTMLProps, type PolymorphicProps, arkSimple } from '@ousia-ui/ark'
import { type UseTreeViewProps, useTreeView } from './use-tree-view'
import { TreeViewProvider } from './use-tree-view-context'

export interface TreeViewRootBaseProps<T extends TreeNode>
  extends UseTreeViewProps<T>,
    RenderStrategyProps,
    PolymorphicProps {}
export interface TreeViewRootProps<T extends TreeNode> extends HTMLProps<'div'>, TreeViewRootBaseProps<T> {}

const TreeViewImpl = <T extends TreeNode>(props: TreeViewRootProps<T>, ref: React.Ref<HTMLDivElement>) => {
  const [renderStrategyProps, treeViewProps] = splitRenderStrategyProps(props)
  const [useTreeViewProps, localProps] = createSplitProps<UseTreeViewProps<T>>()(treeViewProps, [
    'checkedValue',
    'collection',
    'defaultCheckedValue',
    'defaultExpandedValue',
    'defaultFocusedValue',
    'defaultSelectedValue',
    'expandedValue',
    'expandOnClick',
    'focusedValue',
    'id',
    'ids',
    'loadChildren',
    'onCheckedChange',
    'onExpandedChange',
    'onFocusChange',
    'onLoadChildrenComplete',
    'onLoadChildrenError',
    'onSelectionChange',
    'selectedValue',
    'selectionMode',
    'typeahead',
  ])

  const treeView = useTreeView(useTreeViewProps)
  const mergedProps = mergeProps(treeView.getRootProps(), localProps)

  return (
    <TreeViewProvider value={treeView}>
      <RenderStrategyPropsProvider value={renderStrategyProps}>
        <arkSimple.div {...mergedProps} ref={ref} />
      </RenderStrategyPropsProvider>
    </TreeViewProvider>
  )
}

export type TreeViewRootComponent<P = {}> = <T extends TreeNode>(
  props: Assign<TreeViewRootProps<T>, P> & React.RefAttributes<HTMLDivElement>,
) => JSX.Element

export const TreeViewRoot = forwardRef(TreeViewImpl) as TreeViewRootComponent
