import { createContext } from '@ousia-ui/ark/utils'
import type { TreeNode } from '@zag-js/collection'
import type { UseTreeViewReturn } from './use-tree-view'

export interface UseTreeViewContext<T extends TreeNode> extends UseTreeViewReturn<T> {}

export const [TreeViewProvider, useTreeViewContext] = createContext<UseTreeViewContext<TreeNode>>({
  name: 'TreeViewContext',
  hookName: 'useTreeViewContext',
  providerName: '<TreeViewProvider />',
})
