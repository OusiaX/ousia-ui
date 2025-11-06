import { type Assign, type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import {
  type RenderStrategyProps,
  RenderStrategyPropsProvider,
  createSplitProps,
  splitRenderStrategyProps,
} from '@ousia-ui/ark/utils'
import type { TreeNode } from '@zag-js/collection'
import type { ComponentProps, JSX } from 'react'
import { type UseTreeViewProps, useTreeView } from './use-tree-view'
import { TreeViewProvider } from './use-tree-view-context'

export const TreeViewRootElement = 'div' as const
export type TreeViewRootProps<T extends TreeNode> = Assigns<
  ComponentProps<typeof TreeViewRootElement>,
  UseTreeViewProps<T>,
  RenderStrategyProps,
  PolymorphicProps
>

const TreeViewImpl = <T extends TreeNode>(props: TreeViewRootProps<T>) => {
  const { ref, ...restProps } = props
  const [renderStrategyProps, treeViewProps] = splitRenderStrategyProps(restProps)
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
        <ark.div {...mergedProps} ref={ref} />
      </RenderStrategyPropsProvider>
    </TreeViewProvider>
  )
}

export type TreeViewRootComponent<P = Record<string, unknown>> = <T extends TreeNode>(
  props: Assign<TreeViewRootProps<T>, P>,
) => JSX.Element

export const TreeViewRoot = TreeViewImpl as unknown as TreeViewRootComponent
