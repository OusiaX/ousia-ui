import { createContext } from '@ousia-ui/ark/utils'
import type { NodeState } from '@zag-js/tree-view'

export interface UseTreeViewNodeContext extends NodeState {}

export const [TreeViewNodeStateProvider, useTreeViewNodeContext] =
  createContext<UseTreeViewNodeContext>({
    name: 'TreeViewNodeContext',
    hookName: 'useTreeViewNodeContext',
    providerName: '<TreeViewNodeProvider />',
  })
