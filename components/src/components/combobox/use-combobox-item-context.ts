import type { ItemState } from '@zag-js/combobox'
import { createContext } from '@ousia-ui/ark/utils'

export interface UseComboboxItemContext extends ItemState {}

export const [ComboboxItemProvider, useComboboxItemContext] = createContext<UseComboboxItemContext>({
  name: 'ComboboxItemContext',
  hookName: 'useComboboxItemContext',
  providerName: '<ComboboxItemProvider />',
})
