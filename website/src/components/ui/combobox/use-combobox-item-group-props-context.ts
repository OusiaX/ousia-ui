import { createContext } from '@ousia-ui/ark/utils'
import type { ItemGroupProps } from '@zag-js/combobox'

export interface UseComboboxItemGroupPropsContext extends ItemGroupProps {}

export const [ComboboxItemGroupPropsProvider, useComboboxItemGroupPropsContext] =
  createContext<ItemGroupProps>({
    name: 'ComboboxItemGroupPropsContext',
    hookName: 'useComboboxItemGroupPropsContext',
    providerName: '<ComboboxItemGroupPropsProvider />',
  })
