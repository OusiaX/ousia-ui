import type { ItemGroupProps } from '@zag-js/combobox'
import { createContext } from '@ousia-ui/ark/utils'

export interface UseComboboxItemGroupPropsContext extends ItemGroupProps {}

export const [ComboboxItemGroupPropsProvider, useComboboxItemGroupPropsContext] = createContext<ItemGroupProps>({
  name: 'ComboboxItemGroupPropsContext',
  hookName: 'useComboboxItemGroupPropsContext',
  providerName: '<ComboboxItemGroupPropsProvider />',
})
