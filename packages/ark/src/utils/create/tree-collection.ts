import {
  TreeCollection,
  type TreeCollectionOptions,
  type TreeNode
} from '@zag-js/collection'

export const createTreeCollection = <T extends TreeNode>(options: TreeCollectionOptions<T>): TreeCollection<T> =>
  new TreeCollection(options)
