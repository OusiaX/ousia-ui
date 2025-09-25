import type { ItemProps } from '@zag-js/combobox'
import { createContext } from '@ousia-ui/ark/utils'

export interface UseComboboxItemPropsContext extends ItemProps {}

export const [ComboboxItemPropsProvider, useComboboxItemPropsContext] = createContext<ItemProps>({
  name: 'ComboboxItemPropsContext',
  hookName: 'useComboboxItemPropsContext',
  providerName: '<ComboboxItemPropsProvider />',
})
