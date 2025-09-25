import type { ItemState } from '@zag-js/select'
import { createContext } from '@ousia-ui/ark/utils'

export interface UseSelectItemContext extends ItemState {}

export const [SelectItemProvider, useSelectItemContext] = createContext<UseSelectItemContext>({
  name: 'SelectItemContext',
  hookName: 'useSelectItemContext',
  providerName: '<SelectItemProvider />',
})
