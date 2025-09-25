import { mergeProps } from '@zag-js/react'
import { type JSX, forwardRef } from 'react'
import type { Assign } from '@ousia-ui/ark'
import { createSplitProps, type RenderStrategyProps, RenderStrategyPropsProvider, splitRenderStrategyProps } from '@ousia-ui/ark/utils'
import type { TreeNode } from '@zag-js/collection'
import { type HTMLProps, type PolymorphicProps, arkSimple } from '@ousia-ui/ark'
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
  extends HTMLProps<'div'>,
    TreeViewRootProviderBaseProps<T> {}

const TreeViewImpl = <T extends TreeNode>(props: TreeViewRootProviderProps<T>, ref: React.Ref<HTMLDivElement>) => {
  const [renderStrategyProps, treeViewProps] = splitRenderStrategyProps(props)
  const [{ value: treeView }, localProps] = createSplitProps<RootProviderProps<T>>()(treeViewProps, ['value'])
  const mergedProps = mergeProps(treeView.getRootProps(), localProps)

  return (
    <TreeViewProvider value={treeView}>
      <RenderStrategyPropsProvider value={renderStrategyProps}>
        <arkSimple.div {...mergedProps} ref={ref} />
      </RenderStrategyPropsProvider>
    </TreeViewProvider>
  )
}

export type TreeViewRootProviderComponent<P = {}> = <T extends TreeNode>(
  props: Assign<TreeViewRootProviderProps<T>, P> & React.RefAttributes<HTMLDivElement>,
) => JSX.Element

export const TreeViewRootProvider = forwardRef(TreeViewImpl) as TreeViewRootProviderComponent
