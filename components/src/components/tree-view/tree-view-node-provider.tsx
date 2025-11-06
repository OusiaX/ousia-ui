import { createSplitProps } from '@ousia-ui/ark/utils'
import type { NodeProps } from '@zag-js/tree-view'
import { useTreeViewContext } from './use-tree-view-context'
import { TreeViewNodeStateProvider } from './use-tree-view-node-context'
import { TreeViewNodePropsProvider } from './use-tree-view-node-props-context'

export interface TreeViewNodeProviderProps<T> extends NodeProps {
  node: T
  children?: React.ReactNode | undefined
}

export function TreeViewNodeProvider<T>(props: TreeViewNodeProviderProps<T>) {
  const [nodeProps, localProps] = createSplitProps<NodeProps>()(props, ['indexPath', 'node'])
  const treeView = useTreeViewContext()
  const nodeState = treeView.getNodeState(nodeProps)
  return (
    <TreeViewNodeStateProvider value={nodeState}>
      <TreeViewNodePropsProvider value={nodeProps}>{localProps.children}</TreeViewNodePropsProvider>
    </TreeViewNodeStateProvider>
  )
}
