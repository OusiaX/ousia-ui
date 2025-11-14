import type { Optional } from '@ousia-ui/ark'
import { useEnvironmentContext, useLocaleContext } from '@ousia-ui/ark/providers'
import type { TreeCollection, TreeNode } from '@zag-js/collection'
import { type PropTypes, normalizeProps, useMachine } from '@zag-js/react'
import * as treeView from '@zag-js/tree-view'
import { useId } from 'react'

export interface UseTreeViewProps<T extends TreeNode>
  extends Optional<Omit<treeView.Props<T>, 'dir' | 'getRootNode' | 'collection'>, 'id'> {
  /**
   * The collection of tree nodes
   */
  collection: TreeCollection<T>
}

export interface UseTreeViewReturn<T extends TreeNode> extends treeView.Api<PropTypes, T> {}

export const useTreeView = <T extends TreeNode>(
  props: UseTreeViewProps<T>,
): UseTreeViewReturn<T> => {
  const id = useId()
  const { dir } = useLocaleContext()
  const { getRootNode } = useEnvironmentContext()

  const machineProps: treeView.Props = {
    id,
    dir,
    getRootNode,
    ...props,
  }

  const service = useMachine(treeView.machine, machineProps)
  return treeView.connect(service, normalizeProps)
}
