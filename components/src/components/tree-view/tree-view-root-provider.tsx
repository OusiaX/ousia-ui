import { type Assign, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import {
  type RenderStrategyProps,
  RenderStrategyPropsProvider,
  createSplitProps,
  splitRenderStrategyProps,
} from '@ousia-ui/ark/utils'
import type { TreeNode } from '@zag-js/collection'
import type { ComponentProps, JSX } from 'react'
import type { UseTreeViewReturn } from './use-tree-view'
import { TreeViewProvider } from './use-tree-view-context'

interface RootProviderProps<T extends TreeNode> {
  value: UseTreeViewReturn<T>
}
export interface TreeViewRootProviderBaseProps<T extends TreeNode>
  extends RootProviderProps<T>,
    RenderStrategyProps,
    PolymorphicProps {}
export interface TreeViewRootProviderProps<T extends TreeNode>
  extends ComponentProps<'div'>,
    TreeViewRootProviderBaseProps<T> {}

const TreeViewImpl = <T extends TreeNode>(props: TreeViewRootProviderProps<T>) => {
  const { ref, ...restProps } = props
  const [renderStrategyProps, treeViewProps] = splitRenderStrategyProps(restProps)
  const [{ value: treeView }, localProps] = createSplitProps<RootProviderProps<T>>()(
    treeViewProps,
    ['value'],
  )
  const mergedProps = mergeProps(treeView.getRootProps(), localProps)

  return (
    <TreeViewProvider value={treeView}>
      <RenderStrategyPropsProvider value={renderStrategyProps}>
        <ark.div {...mergedProps} ref={ref} />
      </RenderStrategyPropsProvider>
    </TreeViewProvider>
  )
}

export type TreeViewRootProviderComponent<P = Record<string, unknown>> = <T extends TreeNode>(
  props: Assign<TreeViewRootProviderProps<T>, P>,
) => JSX.Element

export const TreeViewRootProvider = TreeViewImpl as TreeViewRootProviderComponent
