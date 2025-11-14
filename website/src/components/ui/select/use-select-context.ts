import { createContext } from '@ousia-ui/ark/utils'
import type { CollectionItem } from '@zag-js/collection'
import type { UseSelectReturn } from './use-select'

export interface UseSelectContext<T extends CollectionItem> extends UseSelectReturn<T> {}

export const [SelectProvider, useSelectContext] = createContext<UseSelectContext<CollectionItem>>({
  name: 'SelectContext',
  hookName: 'useSelectContext',
  providerName: '<SelectProvider />',
})
